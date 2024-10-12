import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Tag, ChevronRight } from 'lucide-react'

const projectsData = [
  { id: 1, name: 'Quantum Computing Platform', category: 'Quantum Tech', description: 'Next-gen quantum algorithms for complex problem-solving' },
  { id: 2, name: 'AR Fashion Try-On', category: 'Augmented Reality', description: 'Virtual fitting room using advanced AR technology' },
  { id: 3, name: 'AI-Powered Health Diagnostics', category: 'Healthcare AI', description: 'Machine learning for early disease detection and diagnosis' },
  { id: 4, name: 'Sustainable Smart City System', category: 'IoT', description: 'Integrated IoT network for efficient urban management' },
  { id: 5, name: 'Decentralized Finance Protocol', category: 'Blockchain', description: 'Revolutionary DeFi platform for global transactions' },
  { id: 6, name: 'Neuromorphic AI Chip', category: 'Hardware', description: 'Brain-inspired computing architecture for AI acceleration' },
]

const categories = ['All', 'Quantum Tech', 'Augmented Reality', 'Healthcare AI', 'IoT', 'Blockchain', 'Hardware']

export default function PremiumProjectsComponent() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = useMemo(() => {
    return projectsData.filter(project => 
      (selectedCategory === 'All' || project.category === selectedCategory) &&
      project.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [selectedCategory, searchTerm])

  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-purple-700 via-pink-600 to-orange-500 text-white overflow-hidden">
      <style jsx global>{`
        ::-webkit-scrollbar {
          width: 10px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.3);
          border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.5);
        }
      `}
      </style>
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-pink-200"
        >
          Innovative Projects
        </motion.h1>
        
        <div className="mb-8 flex flex-wrap gap-4">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative flex-grow"
          >
            <input
              type="text"
              placeholder="Search projects..."
              className="w-full p-4 pl-12 rounded-full bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 text-white placeholder-white placeholder-opacity-70"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-4 top-4 text-white opacity-70" />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-white text-purple-700 shadow-lg'
                    : 'bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 text-white hover:bg-opacity-20'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>

        <AnimatePresence>
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white bg-opacity-10 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-20 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-pink-200 transition-colors duration-300">{project.name}</h2>
                <p className="text-white text-opacity-80 mb-4">{project.description}</p>
                <div className="flex items-center text-sm text-pink-200">
                  <Tag size={16} className="mr-2" />
                  {project.category}
                </div>
                <motion.div
                  whileHover={{ x: 5 }}
                  className="mt-4 flex items-center text-white text-opacity-80 group-hover:text-opacity-100 transition-all duration-300"
                >
                  <span className="mr-2">Learn more</span>
                  <ChevronRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}