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

  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Latest Insights</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with our latest thoughts on performance marketing, industry trends, and strategic insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {articles.map((article) => (
            <div
              key={article.id}
              className="bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
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
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {article.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-muted-foreground gap-1">
                    <Calendar className="w-3 h-3" />
                    {article.date}
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <Button variant="outline" size="lg">
            View All Articles
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};
export default NewsSection;