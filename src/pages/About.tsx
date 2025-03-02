import { FaJs, FaReact, FaNodeJs, FaDocker, FaGit } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiMongodb, SiRedux, SiHtml5, SiCss3 } from 'react-icons/si';
import { BiLogoGithub } from 'react-icons/bi';

interface SkillProps {
  size?: number;
}

const About = () => {
  const skillSize = 40; // Define the default size here

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
            <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-4">
              {[
                { name: "HTML", icon: <SiHtml5 size={skillSize} /> },
                { name: "CSS", icon: <SiCss3 size={skillSize} /> },
                { name: "JavaScript", icon: <FaJs size={skillSize} /> },
                { name: "TypeScript", icon: <SiTypescript size={skillSize} /> },
                { name: "React", icon: <FaReact size={skillSize} /> },
                { name: "Node.js", icon: <FaNodeJs size={skillSize} /> },
                { name: "TailwindCSS", icon: <SiTailwindcss size={skillSize} /> },
                { name: "MongoDB", icon: <SiMongodb size={skillSize} /> },
                { name: "Git", icon: <FaGit size={skillSize} /> },
                { name: "GitHub", icon: <BiLogoGithub size={skillSize} /> },
                { name: "Docker", icon: <FaDocker size={skillSize} /> },
                { name: "Redux Toolkit", icon: <SiRedux size={skillSize} /> },
              ].map(({ name, icon }) => (
                <div key={name} className="glass-card p-3 rounded-md text-center border-none flex flex-col items-center justify-center">
                  {icon}
                  <span className="block text-sm font-bold text-center mt-2">{name}</span>
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
