import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Mail, Phone, Briefcase, User } from 'lucide-react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
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
            About <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">Me</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Bio Section */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-2xl font-semibold text-[#00d9ff] mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate AI and Computer Vision Engineer specializing in developing cutting-edge real-time perception systems. 
                My work focuses on creating intelligent solutions that enable machines to understand and interpret visual information 
                with human-like accuracy.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a strong foundation in machine learning, deep learning, and computer vision, I've worked on diverse projects 
                ranging from object detection systems to recommendation engines. I'm driven by the challenge of solving complex 
                problems and pushing the boundaries of what's possible with AI.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, I'm exploring the latest research in AI, contributing to open-source projects, or sharing 
                my knowledge through technical presentations and workshops.
              </p>
            </motion.div>

            {/* Quick Details Card */}
            <motion.div variants={itemVariants}>
              <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border-[#00d9ff]/20 rounded-2xl p-8 shadow-xl hover:shadow-[#00d9ff]/20 transition-all duration-300 hover:scale-[1.02]">
                <h3 className="text-2xl font-semibold text-[#00d9ff] mb-6">Quick Details</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#00d9ff]/10 rounded-lg">
                      <User className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Name</p>
                      <p className="text-white font-medium">Chaudhary Manas Ray</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#00d9ff]/10 rounded-lg">
                      <Mail className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="text-white font-medium break-all">mkroy030719@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#00d9ff]/10 rounded-lg">
                      <Phone className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="text-white font-medium">+91 9508158384</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-[#00d9ff]/10 rounded-lg">
                      <Briefcase className="w-5 h-5 text-[#00d9ff]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Field</p>
                      <p className="text-white font-medium">AI & Computer Vision Engineering</p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
