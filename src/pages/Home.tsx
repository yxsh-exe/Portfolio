
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="space-y-8 opacity-0 animate-fade-in">
        <div className="flex items-center space-x-2">
          <span className="inline-block animate-wave">👋</span>
          <h1 className="text-4xl font-bold">Hello there! I'm John</h1>
        </div>

        <div className="space-y-4 opacity-0 animate-fade-in animate-delay-200">
          <p className="text-xl text-muted-foreground">
            I'm a full-stack developer that loves building products and web apps that 
            can impact millions of lives
          </p>

          <p className="text-xl text-muted-foreground">
            I'm a senior software engineer with 7 years of experience building scalable 
            web apps that are performance optimized and good looking.
          </p>
        </div>

        <div className="pt-8 opacity-0 animate-fade-in animate-delay-300">
          <h2 className="text-2xl font-semibold mb-6">What I've been working on</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-in animate-delay-400">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Acetermity" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Acetermity</h3>
              <p className="text-muted-foreground mt-2">
                A design and development studio that focuses on building quality apps.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">NextJS</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">TailwindCSS</span>
              </div>
            </div>
            
            <div className="glass-card rounded-xl p-6 opacity-0 animate-fade-in animate-delay-500">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="/placeholder.svg" 
                  alt="Algochurn" 
                  className="w-full h-48 object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold">Algochurn</h3>
              <p className="text-muted-foreground mt-2">
                Practice for technical interviews with hands on coding challenges.
              </p>
              <div className="flex gap-2 mt-4">
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">React</span>
                <span className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">Node.js</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
