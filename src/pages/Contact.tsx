import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import React, { useState } from "react";

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
  const [result, setResult] = useState("");

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.currentTarget);

    formData.append("access_key", "cebda5b4-c8ba-4ce3-8fe5-cb59284301e3");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.currentTarget.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="max-w-6xl mx-auto mt-8">
      <div className="glass-card p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 opacity-0 animate-fade-in">Contact Me</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6 opacity-0 animate-fade-in animate-delay-200">
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
            </p>
            
            <form className="space-y-4" onSubmit={onSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">Name</label>
                  <Input id="name" name="name" placeholder="Your name" className="w-full" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">Email</label>
                  <Input id="email" name="email" type="email" placeholder="Your email" className="w-full" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <Input id="subject" name="subject" placeholder="Subject" required />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  className="min-h-[150px] resize-none"
                  required
                />
              </div>
              
              <Button className="w-full sm:w-auto">Send Message</Button>
            </form>
            <span>{result}</span>
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
                value="work.ybansod@gmail.com"
                href="mailto:work.ybansod@gmail.com"
              />
              <ContactItem
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/yash-bansod-b61471268/"
                href="https://www.linkedin.com/in/yash-bansod-b61471268/"
              />
              <ContactItem
                icon={Github}
                label="GitHub"
                value="github.com/yxsh-exe"
                href="https://github.com/yxsh-exe"
              />
              <ContactItem
                icon={Twitter}
                label="Twitter"
                value="@dev_yash04"
                href="https://x.com/dev_yash04?t=v5m3QNlyBNnCtq7dsoNaPw&s=09"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
