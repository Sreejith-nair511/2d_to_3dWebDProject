"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  ExternalLink,
  Github,
  Linkedin,
  Sparkles,
  Code,
  Star,
  GitFork,
  ChevronRight,
  Info,
  Zap,
  Users,
  BookOpen,
  Brain,
  Camera,
  Layers,
  FileText,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import StableWrapper from "@/components/stable-wrapper"

const tools = [
  {
    name: "OmniPart",
    url: "https://huggingface.co/spaces/omnipart/OmniPart",
    description: "Segment object parts from single-view images.",
    icon: "🔍",
  },
  {
    name: "EmbodiedGen",
    url: "https://huggingface.co/spaces/HorizonRobotics/EmbodiedGen-Image-to-3D",
    description: "Realistic 3D object generation using diffusion.",
    icon: "🤖",
  },
  {
    name: "PartPacker (NVIDIA)",
    url: "https://huggingface.co/spaces/nvidia/PartPacker",
    description: "Pack and align parts into 3D meshes.",
    icon: "📦",
  },
  {
    name: "Pi3 Generator",
    url: "https://huggingface.co/spaces/yyfz233/Pi3",
    description: "Generate part-level 3D meshes from images.",
    icon: "⚡",
  },
  {
    name: "PartCrafter",
    url: "https://huggingface.co/spaces/alexnasa/PartCrafter",
    description: "Compose modular 3D objects from part templates.",
    icon: "🛠️",
  },
]

const repositories = [
  {
    name: "Zerora_3dmodelexample",
    url: "https://github.com/Sreejith-nair511/Zerora_3dmodelexample",
    description: "Advanced 3D model generation examples using cutting-edge AI techniques",
    language: "Python",
    stars: 15,
    forks: 8,
    topics: ["3d-modeling", "ai", "computer-vision", "deep-learning"],
  },
  {
    name: "T2M_sreejith",
    url: "https://github.com/Sreejith-nair511/T2M_sreejith",
    description: "Text-to-Motion generation system for creating realistic 3D animations",
    language: "Python",
    stars: 23,
    forks: 12,
    topics: ["text-to-motion", "3d-animation", "nlp", "machine-learning"],
  },
]

const researchPaper = {
  title: "Generating 3D Model Using 2D Images of an Object",
  authors: [
    "K SusheelKumar - Ideal Institute of Technology",
    "Vijay Bhaskar Semwal - Newgen Software Technology",
    "Shitala Prasad - IIIT Allahabad",
    "R.C Tripathi - IIIT Allahabad",
  ],
  abstract:
    "3D reconstruction is a process of regenerating 3D information of an object using its 2D images. This research focuses on volumetric reconstruction algorithms, particularly the voxel coloring algorithm, and analyzes its behavior when operating on different numbers of images and resolutions.",
  keywords: [
    "3D reconstruction",
    "voxel coloring algorithm",
    "extraction of images",
    "computer vision",
    "volumetric reconstruction",
  ],
  year: "2011",
  journal: "International Journal of Engineering Science and Technology (IJEST)",
}

export default function Component() {
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState("home")
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  // Startup Animation Component
  const StartupAnimation = () => (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-purple-900 via-blue-900 to-black flex items-center justify-center"
    >
      <div className="text-center padding-safe">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
            <Sparkles className="w-12 h-12 sm:w-16 sm:h-16 text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-responsive-lg font-bold text-white mb-4"
        >
          AI 2D-to-3D Lab
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-responsive-md text-gray-300 mb-8"
        >
          Initializing AI Systems...
        </motion.p>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto max-w-xs"
        />
      </div>
    </motion.div>
  )

  // Navigation Component
  const Navigation = () => (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-white/10 dark:bg-black/10 border-b border-white/20 dark:border-white/10">
      <div className="container mx-auto px-3 sm:px-4 py-3 sm:py-4">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2 cursor-pointer min-h-[44px] min-w-[44px] p-3"
            onClick={() => setCurrentPage("home")}
          >
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />
            <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI 2D-to-3D Lab
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {[
              { id: "home", label: "Home", icon: Sparkles },
              { id: "about", label: "About", icon: Info },
              { id: "research", label: "Research", icon: BookOpen },
              { id: "tools", label: "Tools", icon: Zap },
              { id: "github", label: "GitHub", icon: Github },
            ].map(({ id, label, icon: Icon }) => (
              <Button
                key={id}
                variant="ghost"
                onClick={() => setCurrentPage(id)}
                className={`flex items-center space-x-2 min-h-[44px] min-w-[44px] p-3 ${
                  currentPage === id ? "text-purple-500" : "text-gray-600 dark:text-gray-300"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden lg:inline">{label}</span>
              </Button>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full backdrop-blur-sm bg-white/20 dark:bg-black/20 hover:bg-white/30 dark:hover:bg-black/30 border border-white/30 min-h-[44px] min-w-[44px] p-3"
          >
            {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden flex justify-center space-x-2 mt-3 overflow-x-auto">
          {[
            { id: "home", label: "Home", icon: Sparkles },
            { id: "about", label: "About", icon: Info },
            { id: "research", label: "Research", icon: BookOpen },
            { id: "tools", label: "Tools", icon: Zap },
            { id: "github", label: "GitHub", icon: Github },
          ].map(({ id, label, icon: Icon }) => (
            <Button
              key={id}
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage(id)}
              className={`flex items-center space-x-1 min-h-[44px] min-w-[44px] p-3 whitespace-nowrap ${
                currentPage === id ? "text-purple-500 bg-purple-500/10" : "text-gray-600 dark:text-gray-300"
              }`}
            >
              <Icon className="w-3 h-3" />
              <span className="text-xs">{label}</span>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  )

  // Home Page Component
  const HomePage = () => (
    <div className="min-h-screen">
      <section className="relative min-h-screen flex items-center justify-center padding-safe">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-responsive-xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent animate-pulse">
                AI 2D-to-3D
              </span>
              <br />
              <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
                Generator Hub
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-responsive-md text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Explore next-gen tools to transform images into 3D assets
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              onClick={() => setCurrentPage("tools")}
              size="lg"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-full text-base sm:text-lg font-semibold shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 transform hover:scale-105 min-w-[44px] p-3"
            >
              Explore Tools
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
            <Button
              onClick={() => setCurrentPage("research")}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto min-h-[44px] px-6 py-3 rounded-full text-base sm:text-lg font-semibold border-2 border-purple-500/50 hover:border-purple-500 backdrop-blur-sm bg-white/10 dark:bg-black/10 min-w-[44px] p-3"
            >
              View Research
              <BookOpen className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </motion.div>
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -100, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  )

  // About Page Component
  const AboutPage = () => (
    <div className="min-h-screen py-12 sm:py-20 padding-safe">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-responsive-lg font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            About AI 2D-to-3D Lab
          </h1>
          <p className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Bridging the gap between 2D imagination and 3D reality through cutting-edge AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="h-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
              <CardHeader className="padding-safe">
                <CardTitle className="flex items-center space-x-2 text-responsive-md">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  <span>Our Mission</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="padding-safe pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  We're democratizing 3D content creation by making advanced AI tools accessible to everyone. Our
                  platform showcases the latest breakthroughs in 2D-to-3D conversion technology, enabling creators,
                  developers, and researchers to transform their ideas into stunning 3D assets.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Card className="h-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
              <CardHeader className="padding-safe">
                <CardTitle className="flex items-center space-x-2 text-responsive-md">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  <span>Who We Serve</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="padding-safe pt-0">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  From game developers and 3D artists to researchers and hobbyists, our tools cater to anyone interested
                  in exploring the frontier of AI-powered 3D generation. Whether you're prototyping game assets or
                  conducting academic research, we provide the tools you need.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
            <CardHeader className="padding-safe">
              <CardTitle className="text-responsive-md">The Technology Behind the Magic</CardTitle>
            </CardHeader>
            <CardContent className="padding-safe pt-0">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Our curated collection features state-of-the-art models from leading research institutions and
                companies. These tools leverage advanced techniques including:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {["Neural Radiance Fields", "Diffusion Models", "3D Gaussian Splatting", "Mesh Generation"].map(
                  (tech, index) => (
                    <div
                      key={tech}
                      className="padding-safe rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30"
                    >
                      <span className="text-sm font-semibold">{tech}</span>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )

  // Research Page Component
  const ResearchPage = () => (
    <div className="min-h-screen py-12 sm:py-20 padding-safe">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            <BookOpen className="inline-block w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
            Research Foundation
          </h1>
          <p className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Understanding the science behind 2D-to-3D transformation through cutting-edge research
          </p>
        </motion.div>

        {/* Featured Research Paper */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 sm:mb-16"
        >
          <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
            <CardHeader className="padding-safe">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex-1">
                  <CardTitle className="text-xl sm:text-2xl mb-2 flex items-center space-x-2">
                    <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                    <span>Featured Research Paper</span>
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {researchPaper.title}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="bg-purple-500/20 text-purple-300 border-purple-500/30 self-start">
                  {researchPaper.year}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="padding-safe pt-0">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Authors:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {researchPaper.authors.map((author, index) => (
                      <div key={index} className="text-sm text-gray-600 dark:text-gray-300">
                        {author}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Abstract:</h4>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{researchPaper.abstract}</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">Keywords:</h4>
                  <div className="flex flex-wrap gap-2">
                    {researchPaper.keywords.map((keyword, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 border-blue-500/30"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-sm text-gray-500 dark:text-gray-400">Published in: {researchPaper.journal}</div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Technical Process Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            How 2D-to-3D Transformation Works
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
              <CardHeader className="padding-safe">
                <CardTitle className="flex items-center space-x-2 text-responsive-md">
                  <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                  <span>Physical 2D-to-3D Process</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="padding-safe pt-0">
                <div className="mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/605c6e5c5b1a6.jpg-IEV60WtQBDkonBVZKdhwXBfpwUJpZG.jpeg"
                    alt="2D-to-3D transformation process showing selective floating, solution penetration, immersion, and 3D structure fixation"
                    className="w-full rounded-lg border border-white/20"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  This diagram illustrates the physical process of transforming 2D drawings into 3D structures through
                  selective floating, solution penetration, immersion into solution, and final 3D structure fixation
                  with polymer coating.
                </p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
              <CardHeader className="padding-safe">
                <CardTitle className="flex items-center space-x-2 text-responsive-md">
                  <Layers className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                  <span>Digital Projection Methods</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="padding-safe pt-0">
                <div className="mb-4">
                  <img
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen-Shot-2021-10-28-at-1.14.40-AM-gzbjvrFAL3oX65HGlNZNjgd5JDJn7i.png"
                    alt="3D to 2D orthographic projection showing isometric representation converted to top view and elevations"
                    className="w-full rounded-lg border border-white/20"
                  />
                </div>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Understanding how 3D objects can be represented through multiple 2D orthographic projections - a
                  fundamental concept in computer vision for 3D reconstruction from 2D images.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>

        {/* Algorithm Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Core Algorithms & Techniques
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Voxel Coloring",
                icon: <Camera className="w-6 h-6 sm:w-8 sm:h-8 text-purple-500" />,
                description:
                  "Uses photoconsistency to derive object shape by analyzing color consistency across multiple viewpoints.",
                features: ["Photo-consistency check", "Layer-by-layer processing", "Visibility computation"],
              },
              {
                title: "Visual Hull Reconstruction",
                icon: <Layers className="w-6 h-6 sm:w-8 sm:h-8 text-blue-500" />,
                description: "Approximates 3D shape by intersecting silhouettes from multiple 2D views of the object.",
                features: ["Silhouette extraction", "Volume intersection", "Shape approximation"],
              },
              {
                title: "Volumetric Methods",
                icon: <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-green-500" />,
                description: "Divides 3D space into voxels and determines occupancy based on image evidence.",
                features: ["Voxel occupancy", "3D space discretization", "Memory optimization"],
              },
            ].map((algorithm, index) => (
              <Card
                key={algorithm.title}
                className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:border-purple-400/50 transition-all duration-300"
              >
                <CardHeader className="padding-safe">
                  <CardTitle className="flex items-center space-x-2 text-responsive-md">
                    {algorithm.icon}
                    <span>{algorithm.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="padding-safe pt-0">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{algorithm.description}</p>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-sm text-gray-800 dark:text-gray-200">Key Features:</h5>
                    <ul className="space-y-1">
                      {algorithm.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full flex-shrink-0"></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Implementation Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
            <CardHeader className="padding-safe">
              <CardTitle className="text-xl sm:text-2xl flex items-center space-x-2">
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" />
                <span>Research Findings & Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="padding-safe pt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Key Findings:</h4>
                  <ul className="space-y-3">
                    {[
                      "Higher resolution voxels improve reconstruction quality but increase computation time significantly",
                      "More input images generally lead to better 3D models with fewer artifacts",
                      "Voxel coloring algorithm shows good performance for textured objects",
                      "Memory requirements scale cubically with voxel resolution",
                    ].map((finding, index) => (
                      <li key={index} className="text-gray-600 dark:text-gray-300 flex items-start space-x-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="leading-relaxed">{finding}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-gray-800 dark:text-gray-200">Performance Metrics:</h4>
                  <div className="space-y-3">
                    <div className="padding-safe rounded-lg bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Resolution Impact</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">240³ voxels: 2262s processing time</div>
                    </div>
                    <div className="padding-safe rounded-lg bg-gradient-to-r from-blue-500/20 to-green-500/20 border border-blue-500/30">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Image Count Effect</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        23 images vs 2 images: 10x quality improvement
                      </div>
                    </div>
                    <div className="padding-safe rounded-lg bg-gradient-to-r from-green-500/20 to-yellow-500/20 border border-green-500/30">
                      <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">Memory Efficiency</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">
                        Optimized voxel storage reduces memory usage
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )

  // Tools Page Component
  const ToolsPage = () => (
    <div className="min-h-screen py-12 sm:py-20 padding-safe">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            🧰 AI Tools Collection
          </h1>
          <p className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Discover cutting-edge AI models that transform 2D images into stunning 3D assets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group"
            >
              <div className="relative h-full padding-safe rounded-2xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-purple-400/50 dark:hover:border-purple-400/50">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl" />

                <div className="relative z-10">
                  <div className="text-3xl sm:text-4xl mb-4">{tool.icon}</div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3 text-gray-800 dark:text-white">{tool.name}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">{tool.description}</p>
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 transform group-hover:scale-105 min-h-[44px] min-w-[44px] p-3"
                  >
                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                      Try Now
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )

  // GitHub Page Component
  const GitHubPage = () => (
    <div className="min-h-screen py-12 sm:py-20 padding-safe">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h1 className="text-responsive-lg font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            <Github className="inline-block w-8 h-8 sm:w-12 sm:h-12 mr-2 sm:mr-4" />
            Open Source Projects
          </h1>
          <p className="text-responsive-md text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Explore our cutting-edge research and implementations in 3D AI technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group"
            >
              <Card className="h-full backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10 hover:border-purple-400/50 dark:hover:border-purple-400/50 transition-all duration-300">
                <CardHeader className="padding-safe">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2 flex-1">
                      <Code className="w-5 h-5 sm:w-6 sm:h-6 text-purple-500" />
                      <CardTitle className="text-lg sm:text-xl">{repo.name}</CardTitle>
                    </div>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 min-h-[44px] min-w-[44px] p-3"
                    >
                      <a href={repo.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                  <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {repo.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="padding-safe pt-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center space-x-1">
                        <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                        <span>{repo.language}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>{repo.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitFork className="w-4 h-4" />
                        <span>{repo.forks}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {repo.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-1 text-xs bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold transition-all duration-300 min-h-[44px] min-w-[44px] p-3"
                  >
                    <a href={repo.url} target="_blank" rel="noopener noreferrer">
                      View Repository
                      <Github className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <Card className="backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20 dark:border-white/10">
            <CardHeader className="padding-safe">
              <CardTitle className="text-xl sm:text-2xl flex items-center justify-center space-x-2">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" />
                <span>Contribute to the Future</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="padding-safe pt-0">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                Join our open-source community and help advance the field of AI-powered 3D generation. Whether you're
                fixing bugs, adding features, or sharing research, every contribution matters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-xl font-semibold min-h-[44px] min-w-[44px] p-3"
                >
                  <a href="https://github.com/Sreejith-nair511" target="_blank" rel="noopener noreferrer">
                    View All Repositories
                    <Github className="ml-2 w-4 h-4" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-2 border-purple-500/50 hover:border-purple-500 backdrop-blur-sm bg-white/10 dark:bg-black/10 rounded-xl min-h-[44px] min-w-[44px] p-3"
                >
                  Star Projects
                  <Star className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )

  const renderCurrentPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "research":
        return <ResearchPage />
      case "tools":
        return <ToolsPage />
      case "github":
        return <GitHubPage />
      default:
        return <HomePage />
    }
  }

  return (
    <StableWrapper>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900 transition-all duration-500">
        <AnimatePresence>{loading && <StartupAnimation />}</AnimatePresence>

        {!loading && (
          <>
            {/* Animated Background */}
            <motion.div className="fixed inset-0 opacity-30" style={{ y: backgroundY }}>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-purple-400/20 to-pink-400/20 animate-pulse" />
              <div
                className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/10 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "6s" }}
              />
              <div
                className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-purple-500/10 rounded-full blur-3xl animate-bounce"
                style={{ animationDuration: "8s", animationDelay: "2s" }}
              />
            </motion.div>

            <Navigation />

            <motion.main
              key={currentPage}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              {renderCurrentPage()}
            </motion.main>

            {/* Footer */}
            <footer className="py-8 sm:py-12 padding-safe backdrop-blur-md bg-white/5 dark:bg-black/5 border-t border-white/10">
              <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    Powered by{" "}
                    <a
                      href="https://huggingface.co"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-700 font-semibold"
                    >
                      Hugging Face Spaces
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Built with ❤️ by{" "}
                    <span className="font-semibold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Sreejith S
                    </span>
                  </p>

                  <div className="flex justify-center space-x-4 sm:space-x-6">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full backdrop-blur-sm bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 border border-white/20 min-h-[44px] min-w-[44px] p-3"
                    >
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="w-5 h-5" />
                      </a>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      className="rounded-full backdrop-blur-sm bg-white/10 dark:bg-black/10 hover:bg-white/20 dark:hover:bg-black/20 border border-white/20 min-h-[44px] min-w-[44px] p-3"
                    >
                      <a href="https://github.com/Sreejith-nair511" target="_blank" rel="noopener noreferrer">
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </div>
            </footer>
          </>
        )}
      </div>
    </StableWrapper>
  )
}
