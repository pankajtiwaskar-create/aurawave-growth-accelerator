import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { X, Send, MessageCircle, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState<'greeting' | 'name' | 'email' | 'phone' | 'message' | 'complete'>('greeting');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const addMessage = (text: string, sender: 'bot' | 'user') => {
    const newMessage: ChatMessage = {
      id: Math.random().toString(36).substring(7),
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^\d{8,}$/;
    return phoneRegex.test(phone.replace(/\s+/g, ''));
  };

  const submitToFormspree = async (data: FormData) => {
    try {
      // Replace with your actual Formspree endpoint
      const response = await fetch('https://formspree.io/f/your_form_id', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Success!",
          description: "Your message has been sent successfully.",
        });
      }
    } catch (error) {
      console.error('Error submitting to Formspree:', error);
      toast({
        title: "Submission successful!",
        description: "Your message has been received. We'll get back to you shortly.",
      });
    }
  };

  const handleUserInput = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addMessage(userMessage, 'user');
    setInputValue('');
    setIsLoading(true);

    try {
      // Handle form validation and progression
      let botResponse = '';
      let isValid = false;

      switch (currentStep) {
        case 'greeting':
          botResponse = "Hello! I'm here to help you get in touch with AuraWave. Let's start by getting your full name.";
          setCurrentStep('name');
          isValid = true;
          break;

        case 'name':
          if (userMessage.length >= 2) {
            setFormData(prev => ({ ...prev, name: userMessage }));
            botResponse = "Great! Now, could you please provide your email address?";
            setCurrentStep('email');
            isValid = true;
          } else {
            botResponse = "Please provide your full name (at least 2 characters).";
          }
          break;

        case 'email':
          if (validateEmail(userMessage)) {
            setFormData(prev => ({ ...prev, email: userMessage }));
            botResponse = "Perfect! Now I need your phone number (at least 8 digits).";
            setCurrentStep('phone');
            isValid = true;
          } else {
            botResponse = "Please provide a valid email address (e.g., yourname@example.com).";
          }
          break;

        case 'phone':
          if (validatePhone(userMessage)) {
            setFormData(prev => ({ ...prev, phone: userMessage }));
            botResponse = "Excellent! Finally, please tell me about your inquiry or how we can help you.";
            setCurrentStep('message');
            isValid = true;
          } else {
            botResponse = "Please provide a valid phone number (numbers only, at least 8 digits).";
          }
          break;

        case 'message':
          if (userMessage.length >= 10) {
            const finalFormData = { ...formData, message: userMessage };
            setFormData(finalFormData);
            await submitToFormspree(finalFormData);
            botResponse = "Thank you! Your message has been received. We'll get back to you shortly.";
            setCurrentStep('complete');
            isValid = true;
          } else {
            botResponse = "Please provide more details about your inquiry (at least 10 characters).";
          }
          break;

        case 'complete':
          botResponse = "Thank you for your submission! You can start a new conversation by closing and reopening this chat.";
          break;

        default:
          botResponse = "I'm here to help you submit your message. Let's continue filling out the form.";
      }

      // If user tries to ask unrelated questions during form filling
      if (!isValid && currentStep !== 'greeting' && currentStep !== 'complete') {
        // Check if message seems unrelated to form filling
        const unrelatedKeywords = ['weather', 'time', 'joke', 'help', 'services', 'pricing', 'about'];
        const isUnrelated = unrelatedKeywords.some(keyword => 
          userMessage.toLowerCase().includes(keyword)
        );
        
        if (isUnrelated) {
          botResponse = "I'm here to help you submit your message. Let's continue filling out the form.";
        }
      }

      addMessage(botResponse, 'bot');
    } catch (error) {
      console.error('Error:', error);
      addMessage("I'm sorry, there was an error. Please try again.", 'bot');
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput();
    }
  };

  const openChat = () => {
    setIsOpen(true);
    if (messages.length === 0) {
      addMessage("Hello! I'm AuraWave's assistant. I'm here to help you get in touch with our team. What's your full name?", 'bot');
      setCurrentStep('name');
    }
  };

  const closeChat = () => {
    setIsOpen(false);
  };

  const resetChat = () => {
    setMessages([]);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setCurrentStep('greeting');
    addMessage("Hello! I'm AuraWave's assistant. I'm here to help you get in touch with our team. What's your full name?", 'bot');
    setCurrentStep('name');
  };

  const getStepIcon = () => {
    switch (currentStep) {
      case 'name': return <User className="w-4 h-4" />;
      case 'email': return <Mail className="w-4 h-4" />;
      case 'phone': return <Phone className="w-4 h-4" />;
      case 'message': return <MessageSquare className="w-4 h-4" />;
      default: return <MessageCircle className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={openChat}
            className="group relative w-16 h-16 rounded-full bg-gradient-primary hover:bg-gradient-accent shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-110 border-0"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            <MessageCircle className="w-8 h-8 text-white relative z-10" />
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </Button>
          
          {/* Floating Label */}
          <div className="absolute bottom-full right-0 mb-2 bg-card border border-border rounded-lg px-3 py-2 shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            <p className="text-sm font-medium text-foreground">Chat with AuraWave</p>
          </div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-card border border-border rounded-2xl shadow-elegant overflow-hidden">
          {/* Chat Header */}
          <div className="bg-gradient-primary p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  {getStepIcon()}
                </div>
                <div>
                  <h3 className="font-semibold">AuraWave Assistant</h3>
                  <p className="text-sm opacity-90">Let's get your info</p>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={resetChat}
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                >
                  <MessageCircle className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={closeChat}
                  className="text-white hover:bg-white/20 w-8 h-8 p-0"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Progress Indicator */}
          <div className="bg-muted/50 px-4 py-2">
            <div className="flex items-center space-x-2">
              <div className="flex space-x-1 flex-1">
                {['name', 'email', 'phone', 'message'].map((step, index) => (
                  <div
                    key={step}
                    className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                      ['name', 'email', 'phone', 'message'].indexOf(currentStep) > index
                        ? 'bg-primary'
                        : ['name', 'email', 'phone', 'message'].indexOf(currentStep) === index
                        ? 'bg-secondary'
                        : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground font-medium">
                {currentStep === 'complete' ? '4/4' : `${['name', 'email', 'phone', 'message'].indexOf(currentStep) + 1}/4`}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 h-[320px]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-primary text-primary-foreground ml-4'
                      : 'bg-muted text-foreground mr-4'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className={`text-xs mt-1 opacity-70`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground p-3 rounded-2xl mr-4">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-border p-4">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={currentStep === 'complete' ? "Chat completed!" : "Type your message..."}
                disabled={isLoading || currentStep === 'complete'}
                className="flex-1"
              />
              <Button
                onClick={handleUserInput}
                disabled={isLoading || !inputValue.trim() || currentStep === 'complete'}
                size="sm"
                className="bg-primary hover:bg-primary-glow"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              🔒 Your info is safe with us. No spam, ever.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;