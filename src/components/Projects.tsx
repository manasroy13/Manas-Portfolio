import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Calendar, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'DOTA Detection System',
    shortDesc: 'Real-time object detection system for aerial imagery',
    fullDesc: 'Developed a state-of-the-art object detection system specifically designed for DOTA (Dataset for Object Detection in Aerial Images). The system utilizes advanced deep learning architectures to accurately detect and classify objects in aerial and satellite imagery with high precision and real-time performance.',
    image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&q=80',
    techStack: ['Python', 'PyTorch', 'YOLO', 'OpenCV', 'TensorFlow'],
    timeline: 'Jan 2023 - May 2023',
    githubLink: 'https://github.com/manasroy13/Automatic-Detection-on-DOTA-Dataset',
    features: [
      'Real-time object detection with 95% accuracy',
      'Support for 15+ object categories',
      'Optimized for aerial imagery processing',
      'Custom data augmentation pipeline'
    ]
  },
  {
    id: 2,
    title: 'Cine Suggest',
    shortDesc: 'AI-powered movie recommendation engine',
    fullDesc: 'Built an intelligent movie recommendation system that leverages collaborative filtering and content-based algorithms to provide personalized movie suggestions. The system analyzes user preferences, viewing history, and movie metadata to deliver highly accurate recommendations.',
    image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80',
    techStack: ['Python', 'scikit-learn', 'Pandas', 'Flask', 'React'],
    timeline: 'Sep 2022 - Dec 2022',
    githubLink: 'https://github.com/manasroy13/Cine-Suggest-ML-Based-Movie-Recommendation-Engine',
    features: [
      'Hybrid recommendation algorithm',
      'User preference learning',
      'Real-time suggestion updates',
      'Integration with movie databases'
    ]
  },
  {
    id: 3,
    title: 'Fake News Detection',
    shortDesc: 'NLP-based fake news classifier',
    fullDesc: 'Created a sophisticated natural language processing system to identify and classify fake news articles. The model uses advanced NLP techniques including BERT embeddings and ensemble learning to achieve high accuracy in distinguishing between authentic and fabricated news content.',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80',
    techStack: ['Python', 'BERT', 'TensorFlow', 'NLTK', 'FastAPI'],
    timeline: 'Jun 2022 - Aug 2022',
    githubLink: 'https://github.com/manasroy13/NLP-Based-Fake-News-Detection-System',
    features: [
      '92% classification accuracy',
      'Multi-language support',
      'Real-time article analysis',
      'Explainable AI predictions'
    ]
  }
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
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
            Featured <span className="bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">Projects</span>
          </motion.h2>
          <motion.div
            variants={itemVariants}
            className="w-20 h-1 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] mx-auto mb-16 rounded-full"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <Card className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border-[#00d9ff]/20 rounded-2xl overflow-hidden shadow-xl hover:shadow-[#00d9ff]/30 transition-all duration-300 h-full">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Calendar className="w-4 h-4 text-[#00d9ff]" />
                      <span className="text-sm text-gray-400">{project.timeline}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{project.shortDesc}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.techStack.length > 3 && (
                        <Badge
                          variant="secondary"
                          className="bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30 text-xs"
                        >
                          +{project.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="bg-[#0f0f0f] border-[#00d9ff]/20 text-white max-w-3xl max-h-[90vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] bg-clip-text text-transparent">
                  {selectedProject.title}
                </DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4 text-[#00d9ff]" />
                  <span>{selectedProject.timeline}</span>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00d9ff] mb-2">Description</h4>
                  <p className="text-gray-300 leading-relaxed">{selectedProject.fullDesc}</p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00d9ff] mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <span className="text-[#00d9ff] mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-[#00d9ff] mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-[#00d9ff]/10 text-[#00d9ff] border border-[#00d9ff]/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                {selectedProject.githubLink && (
                  <div className="pt-4 border-t border-[#00d9ff]/20">
                    <a
                      href={selectedProject.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00d9ff] to-[#0ea5e9] hover:from-[#00b8e6] hover:to-[#0d8fc7] text-white font-semibold rounded-lg shadow-lg shadow-[#00d9ff]/30 hover:shadow-[#00d9ff]/50 transition-all duration-300"
                    >
                      <Github className="w-5 h-5" />
                      View on GitHub
                    </a>
                  </div>
                )}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
