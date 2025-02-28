
const ProjectCard = ({ title, description, image, tags }: { 
  title: string; 
  description: string; 
  image: string;
  tags: string[];
}) => {
  return (
    <div className="glass-card rounded-xl overflow-hidden opacity-0 animate-fade-in">
      <div className="h-48 bg-gray-100 dark:bg-gray-800 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-muted-foreground mt-2">{description}</p>
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Acetermity",
      description: "A design and development studio that focuses on building quality apps.",
      image: "/placeholder.svg",
      tags: ["NextJS", "TailwindCSS", "Framer Motion"],
      delay: 200
    },
    {
      title: "Algochurn",
      description: "Practice for technical interviews with hands on coding challenges.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB"],
      delay: 300
    },
    {
      title: "Portfolio Website",
      description: "A clean, minimal portfolio website built with React and TailwindCSS.",
      image: "/placeholder.svg",
      tags: ["React", "TailwindCSS", "Vite"],
      delay: 400
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured e-commerce platform with payments integration.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Stripe", "Prisma"],
      delay: 500
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in">Projects</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={project.title} style={{ animationDelay: `${project.delay}ms` }}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
