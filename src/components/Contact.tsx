import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import emailjs from '@emailjs/browser';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'mkroy030719@gmail.com',
    link: 'mailto:mkroy030719@gmail.com'
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9508158384',
    link: 'tel:+919508158384'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/manasroy13',
    link: 'https://www.linkedin.com/in/manasroy13/'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/manasroy13',
    link: 'https://github.com/manasroy13'
  }
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Try to send using EmailJS if configured
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY) {
      try {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            message: formData.message,
            to_email: 'chymanasray@gmail.com'
          },
          PUBLIC_KEY
        );

        toast({
          title: "Message Sent!",
          description: "Thank you for reaching out. I'll get back to you soon!",
        });

        setFormData({ name: '', email: '', message: '' });
      } catch (err) {
        console.error('EmailJS error:', err);
        toast({
          title: "Error",
          description: "Failed to send message. Please try again later.",
          variant: "destructive"
        });
      }

      return;
    }

    // Fallback: open user's mail client with mailto (not automatic)
    const subject = encodeURIComponent(`Message from ${formData.name}`);
    const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`);
    window.location.href = `mailto:chymanasray@gmail.com?subject=${subject}&body=${body}`;

    // Notify user
    toast({
      title: "Open Mail Client",
      description: "Your mail client should open to send the message. If it didn't, please copy and paste your message manually.",
    });

    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="max-w-6xl mx-auto">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-4"
          >
            Get In <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">Touch</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info Cards */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
              {contactInfo.map((info) => (
                <a
                  key={info.label}
                  href={info.link}
                  target={info.link.startsWith('http') ? '_blank' : undefined}
                  rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block"
                >
                  <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border-[#00d9ff]/20 rounded-xl p-4 shadow-lg hover:shadow-[#00d9ff]/30 transition-all duration-300 hover:scale-[1.02] hover:border-[#00d9ff]/40">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-[#00d9ff]/10 rounded-lg">
                        <info.icon className="w-5 h-5 text-[#00d9ff]" />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  </Card>
                </a>
              ))}
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border-[#00d9ff]/20 rounded-2xl p-6 shadow-xl">
                <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="bg-[#0a0a0a] border-[#00d9ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d9ff] focus:ring-[#00d9ff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-[#0a0a0a] border-[#00d9ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d9ff] focus:ring-[#00d9ff]"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message..."
                      rows={5}
                      className="bg-[#0a0a0a] border-[#00d9ff]/30 text-white placeholder:text-gray-500 focus:border-[#00d9ff] focus:ring-[#00d9ff] resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] hover:from-[#00b8e6] hover:to-[#0d8fc7] text-white font-semibold py-6 rounded-xl shadow-lg shadow-[#00d9ff]/30 hover:shadow-[#00d9ff]/50 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
