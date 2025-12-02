import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00d9ff]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#0ea5e9]/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#00d9ff] to-[#0ea5e9] p-1 shadow-lg shadow-[#00d9ff]/50">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
              <img
                src="https://ibb.co/LXqqNqs8"
                alt="Chaudhary Manas Ray"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">
            Chaudhary Manas Ray
          </span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-4"
        >
          AI Computer Vision Engineer
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto"
        >
          Building real-time perception systems that bridge the gap between artificial intelligence and visual understanding
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={() => scrollToSection('projects')}
            size="lg"
            className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] hover:from-[#00b8e6] hover:to-[#0d8fc7] text-white font-semibold px-8 py-6 text-lg rounded-xl shadow-lg shadow-[#00d9ff]/30 hover:shadow-[#00d9ff]/50 transition-all duration-300 glow-blue-hover"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            size="lg"
            variant="outline"
            className="border-2 border-[#00d9ff] text-[#00d9ff] hover:bg-[#00d9ff]/10 font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300"
          >
            Contact Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="text-[#00d9ff] w-8 h-8" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
