import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();
    const geminiApiKey = Deno.env.get('GEMINI_API_KEY');

    if (!geminiApiKey) {
      throw new Error('GEMINI_API_KEY is not set');
    }

    const systemPrompt = `You are Aurawave's friendly chatbot assistant. Your ONLY purpose is to collect contact information from potential clients step by step:

1. Greet politely and ask for Full Name
2. Ask for Email Address (validate it contains @ and valid domain)
3. Ask for Phone Number (must be numeric and at least 8 digits)
4. Ask for Message or Inquiry

IMPORTANT RULES:
- Only ask for ONE piece of information at a time
- Always validate email format (must contain @ and end with valid domain like .com, .org, etc.)
- Validate phone number (numeric only, at least 8 digits)
- If user asks unrelated questions, respond: "I'm here to help you submit your message. Let's continue filling out the form."
- Be polite and professional
- After collecting all 4 pieces of information, say: "Thank you! Your message has been received. We'll get back to you shortly."
- Keep responses concise and friendly`;

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${geminiApiKey}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: systemPrompt + "\n\nUser message: " + message
                }
              ]
            }
          ],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 200,
          }
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Gemini API error: ${response.statusText}`);
    }

    const data = await response.json();
    const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm here to help you submit your message. Let's start with your full name.";

    return new Response(JSON.stringify({ response: botResponse }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in gemini-chat function:', error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});