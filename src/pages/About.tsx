const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-8">
      <div className="glass-card p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 opacity-0 animate-fade-in">About Me</h1>
        
        <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
          <p className="text-lg text-muted-foreground">
            I'm a passionate full-stack developer with over 1 year of experience building web applications
            that are not only functional but also beautiful and intuitive to use.
          </p>
          
          <p className="text-lg text-muted-foreground">
            Throughout my career, I've worked with various technologies and frameworks, always seeking
            to learn new skills and improve my craft. I believe in writing clean, maintainable code and
            creating user experiences that feel natural and seamless.
          </p>
          
          <div className="pt-6">
            <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                "JavaScript", "TypeScript", "React", "Node.js", "TailwindCSS",
                "MongoDB", "Docker", "Git"
              ].map((skill) => (
                <div key={skill} className="glass-card p-3 rounded-md text-center">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
