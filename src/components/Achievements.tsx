import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Award, Presentation, Lightbulb } from 'lucide-react';

const achievements = [
  {
    id: 1,
    title: 'IEEE Sensors Council Certificate of Appreciation',
    description: 'Received Certificate of Appreciation from IEEE Sensors Council at IIT Guwahati during NSD-2023',
    date: '2023',
    icon: Award,
    side: 'left'
  },
  {
    id: 2,
    title: 'IEEE Presentation: Smart Pavement Repair Bot with IoT & ML',
    description: 'Presented research on Smart Pavement Repair Bot integrating IoT and Machine Learning at ICMSCI-2025',
    date: '2025',
    icon: Presentation,
    side: 'right'
  },
  {
    id: 3,
    title: 'Patent: Automatic Headlight Control System',
    description: 'Patent on Automatic Headlight Control System based on Ambient Light conditions for vehicles (Patent Office Journal No 10/2025 Dated on 07/03/2025)',
    date: '2025',
    icon: Lightbulb,
    side: 'left'
  },
  {
    id: 4,
    title: 'IEEE Presentation: AI-Optimized VLSI Amplifier for Autonomous Vehicles',
    description: 'Presented research on AI-Optimized VLSI Amplifier design for Autonomous Vehicles at ICICT-2025',
    date: '2025',
    icon: Presentation,
    side: 'right'
  }
];

export default function Achievements() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  };

  const itemVariantsRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
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
            Achievements & <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">Recognition</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          {/* Timeline */}
          <div className="relative">
            {/* Center Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#00d9ff] to-[#0ea5e9]" />

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.id}
                  variants={achievement.side === 'left' ? itemVariants : itemVariantsRight}
                  className={`flex items-center gap-8 ${
                    achievement.side === 'right' ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Card */}
                  <div className="flex-1">
                    <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border-[#00d9ff]/20 rounded-2xl p-6 shadow-xl hover:shadow-[#00d9ff]/30 transition-all duration-300 hover:scale-[1.02]">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-[#00d9ff]/10 rounded-lg">
                          <achievement.icon className="w-6 h-6 text-[#00d9ff]" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                          <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                          <p className="text-[#00d9ff] text-sm font-medium">{achievement.date}</p>
                        </div>
                      </div>
                    </Card>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:block relative">
                    <div className="w-4 h-4 bg-[#00d9ff] rounded-full shadow-lg shadow-[#00d9ff]/50" />
                    <div className="absolute inset-0 w-4 h-4 bg-[#00d9ff] rounded-full animate-ping opacity-75" />
                  </div>

                  {/* Spacer for alignment */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
