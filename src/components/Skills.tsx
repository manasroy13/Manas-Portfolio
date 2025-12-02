import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Code2, Brain, Wrench, BookOpen } from 'lucide-react';

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: Code2,
    skills: ['Python', 'C++', 'SQL']
  },
  {
    title: 'ML/CV Libraries',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Keras', 'scikit-learn', 'YOLO', 'MediaPipe', 'NumPy', 'Pandas']
  },
  {
    title: 'Software Tools',
    icon: Wrench,
    skills: ['Git', 'Linux', 'Jupyter', 'VS Code']
  },
  {
    title: 'Coursework',
    icon: BookOpen,
    skills: ['Deep Learning', 'Computer Vision', 'Machine Learning', 'Data Structures', 'Algorithms', 'Neural Networks']
  }
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
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
            Technical <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">Skills</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#00d9ff]/20 rounded-2xl p-6 shadow-xl hover:shadow-[#00d9ff]/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-[#00d9ff]/10 rounded-lg">
                    <category.icon className="w-6 h-6 text-[#00d9ff]" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="cursor-default"
                    >
                      <Badge 
                        variant="secondary"
                        className="bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 hover:bg-[#00d9ff]/20 hover:border-[#00d9ff]/50 transition-all duration-300 px-4 py-2 text-sm font-medium"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
