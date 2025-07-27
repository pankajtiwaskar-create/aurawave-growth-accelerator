import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
const NewsSection = () => {
  const articles = [{
    id: 1,
    title: "5 Ways AI Is Transforming Paid Media",
    excerpt: "Discover how artificial intelligence is revolutionizing performance marketing and what it means for your campaigns in 2025.",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop&crop=center"
  }, {
    id: 2,
    title: "Southeast Asia Market Trends 2025",
    excerpt: "The latest insights into consumer behavior and market opportunities across SEA markets for performance marketers.",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "Market Research",
    image: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=400&h=250&fit=crop&crop=center"
  }, {
    id: 3,
    title: "Creative Best Practices for TikTok Ads",
    excerpt: "Learn the proven creative strategies that drive conversions on TikTok across different Southeast Asian markets.",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "Creative Strategy",
    image: "https://images.unsplash.com/photo-1611605698323-b1e99cfd37ea?w=400&h=250&fit=crop&crop=center"
  }, {
    id: 4,
    title: "The Future of Programmatic Buying",
    excerpt: "How programmatic advertising is evolving and what performance marketers need to know to stay ahead.",
    date: "January 8, 2025",
    readTime: "8 min read",
    category: "Programmatic",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop&crop=center"
  }];
  const handleArticleClick = (articleId: number) => {
    // In a real app, this would navigate to the article page
    console.log(`Navigate to article ${articleId}`);
  };
  return <section id="news" className="section-padding">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-sm font-semibold text-primary mb-2 tracking-wider uppercase">
            Insights & Updates
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Latest in <span className="text-glow">Paid Media & AI</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Stay ahead of the curve with expert insights, market trends, and actionable strategies 
            for performance marketing in Southeast Asia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {articles.map((article, index) => (
            <article
              key={article.id}
              className="group bg-card rounded-xl border border-border/50 overflow-hidden hover:border-primary/20 transition-all duration-300 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${0.1 * index}s` }}
              onClick={() => handleArticleClick(article.id)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 mb-3 text-sm text-muted-foreground">
                  <span className="bg-primary/10 text-primary px-2 py-1 rounded-md font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{article.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All Articles CTA */}
        <div className="text-center animate-fade-in-up" style={{
        animationDelay: '0.6s'
      }}>
          <Button variant="outline" size="lg" className="btn-ghost">
            View All Articles
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>;
};
export default NewsSection;