import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const educationData = [
  {
    degree: 'B.E. — Electrical & Electronics Engineering',
    institute: 'New Horizon College Of Engineering',
    year: '2022–2026',
    score: '8.59 CGPA'
  },
  {
    degree: 'Senior Secondary',
    institute: 'Don Bosco School',
    year: '2020–2022',
    score: '74.2%'
  },
  {
    degree: 'Secondary',
    institute: 'Jesus Mary Academy',
    year: '2019–2020',
    score: '77%'
  }
];

export default function Education() {
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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
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
            🎓 EDUCATION SECTION
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#00d9ff]/20 rounded-2xl overflow-hidden shadow-xl"
          >
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-[#00d9ff]/20 hover:bg-transparent">
                    <TableHead className="text-[#00d9ff] font-semibold text-base">Degree</TableHead>
                    <TableHead className="text-[#00d9ff] font-semibold text-base">Institute</TableHead>
                    <TableHead className="text-[#00d9ff] font-semibold text-base">Year</TableHead>
                    <TableHead className="text-[#00d9ff] font-semibold text-base">Score</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {educationData.map((edu, index) => (
                    <motion.tr
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.1 }}
                      className="border-b border-[#00d9ff]/10 hover:bg-[#00d9ff]/5 transition-colors"
                    >
                      <TableCell className="font-medium text-white py-4">{edu.degree}</TableCell>
                      <TableCell className="text-gray-300">{edu.institute}</TableCell>
                      <TableCell className="text-gray-300">{edu.year}</TableCell>
                      <TableCell className="text-[#00d9ff] font-semibold">{edu.score}</TableCell>
                    </motion.tr>
                  ))}
                </TableBody>
              </Table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
