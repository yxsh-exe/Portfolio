
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const ContactItem = ({ icon: Icon, label, value, href }: {
  icon: React.ElementType;
  label: string;
  value: string;
  href: string;
}) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="glass-card p-4 rounded-lg flex items-center gap-4 hover:shadow-md transition-all"
    >
      <div className="bg-primary/10 p-3 rounded-full">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in">Contact Me</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
          <p className="text-lg text-muted-foreground">
            I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          
          <form className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input id="subject" placeholder="Subject" />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Your message"
                className="min-h-[150px] resize-none"
              />
            </div>
            
            <Button className="w-full sm:w-auto">Send Message</Button>
          </form>
        </div>
        
        <div className="space-y-6 opacity-0 animate-fade-in animate-delay-300">
          <h2 className="text-xl font-semibold">Contact Information</h2>
          <p className="text-muted-foreground">
            Feel free to reach out to me through any of these channels.
          </p>
          
          <div className="grid grid-cols-1 gap-4">
            <ContactItem
              icon={Mail}
              label="Email"
              value="john.doe@example.com"
              href="mailto:john.doe@example.com"
            />
            <ContactItem
              icon={Linkedin}
              label="LinkedIn"
              value="linkedin.com/in/johndoe"
              href="https://linkedin.com"
            />
            <ContactItem
              icon={Github}
              label="GitHub"
              value="github.com/johndoe"
              href="https://github.com"
            />
            <ContactItem
              icon={Twitter}
              label="Twitter"
              value="@johndoe"
              href="https://twitter.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
