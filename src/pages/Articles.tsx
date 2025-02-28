
const ArticleCard = ({ title, excerpt, date, readTime, image }: {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden flex flex-col md:flex-row opacity-0 animate-fade-in">
      <div className="md:w-1/3 h-48 md:h-auto bg-gray-100 dark:bg-gray-800">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 md:w-2/3">
        <div className="flex items-center text-sm text-muted-foreground mb-2">
          <span>{date}</span>
          <span className="mx-2">•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2">{excerpt}</p>
        <a href="#" className="inline-block mt-4 text-primary font-medium hover:underline">
          Read more
        </a>
      </div>
    </div>
  );
};

const Articles = () => {
  const articles = [
    {
      title: "Building Accessible React Applications",
      excerpt: "Learn how to create web applications that everyone can use, regardless of their abilities or disabilities.",
      date: "May 15, 2023",
      readTime: "8 min read",
      image: "/placeholder.svg",
      delay: 200
    },
    {
      title: "The Future of Web Development with WebAssembly",
      excerpt: "Explore how WebAssembly is changing the landscape of web development and opening new possibilities.",
      date: "April 22, 2023",
      readTime: "10 min read",
      image: "/placeholder.svg",
      delay: 300
    },
    {
      title: "Optimizing React Performance: A Deep Dive",
      excerpt: "Techniques and strategies to make your React applications faster and more efficient.",
      date: "March 10, 2023",
      readTime: "12 min read",
      image: "/placeholder.svg",
      delay: 400
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in">Articles</h1>
      
      <div className="space-y-6">
        {articles.map((article, index) => (
          <div key={article.title} style={{ animationDelay: `${article.delay}ms` }}>
            <ArticleCard {...article} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
