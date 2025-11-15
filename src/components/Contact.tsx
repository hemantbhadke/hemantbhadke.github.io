import { useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hemant.bhadke@example.com",
      link: "mailto:hemant.bhadke@example.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl text-white mb-4">
              Get In Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto mb-4"></div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your visions. Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="p-6 bg-slate-800/50 border-slate-700 hover:border-cyan-500/50 transition-all text-center"
                >
                  <Icon className="text-cyan-400 mx-auto mb-3" size={32} />
                  <h3 className="text-white mb-2">{info.label}</h3>
                  <a
                    href={info.link}
                    className="text-slate-300 hover:text-cyan-400 transition-colors"
                  >
                    {info.value}
                  </a>
                </Card>
              );
            })}
          </div>

          <Card className="p-8 bg-slate-800/50 border-slate-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="text-white mb-2 block">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-600 text-white focus:border-cyan-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-white mb-2 block">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-slate-900/50 border-slate-600 text-white focus:border-cyan-500"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="text-white mb-2 block">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-slate-900/50 border-slate-600 text-white focus:border-cyan-500"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-white mb-2 block">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="bg-slate-900/50 border-slate-600 text-white focus:border-cyan-500 resize-none"
                  placeholder="Tell me about your project or inquiry..."
                />
              </div>

              <Button
                type="submit"
                className="w-full sm:w-auto bg-cyan-500 hover:bg-cyan-600 text-white"
              >
                <Send size={18} className="mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
}
