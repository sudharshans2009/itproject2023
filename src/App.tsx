import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import { Background } from "./components/background";

const contributors = [
  {
    name: "Sudharshan S",
    github: "sudharshans2009",
    email: "mail@sudharshans.me",
    website: "https://www.sudharshans.me",
    avatar: "https://github.com/sudharshans2009.png",
    tags: ["Lead Developer", "Project Manager"],
  },
  {
    name: "A P Akshayan Raj",
    github: null,
    email: null,
    website: null,
    avatar: null,
    tags: ["Developer", "Designer"],
  },
  {
    name: "Akash P",
    github: null,
    email: null,
    website: null,
    avatar: null,
    tags: ["Developer", "Tester"],
  },
];

const projects = [
  {
    title: "AI Image Generator",
    description: "Generate AI-powered images from text prompts.",
    github: "https://github.com/sudharshans2009/itproject2023-image",
    demo: null,
    tags: ["AI", "Image"],
  },
  {
    title: "Lunar AI - Voice & Text Chatbot",
    description: "Conversational AI with voice and text support.",
    github: "https://github.com/sudharshans2009/itproject2023-lunar",
    demo: null,
    tags: ["AI", "Chatbot"],
  },
  {
    title: "Lunar Assistant - Advanced Text Chatbot",
    description: "Advanced chatbot for text-based conversations.",
    github: "https://github.com/sudharshans2009/itproject2023-assistant",
    demo: null,
    tags: ["AI", "Chatbot"],
  },
  {
    title: "QR Code Reader & Generator",
    description: "Scan and generate QR codes easily.",
    github: "https://github.com/sudharshans2009/itproject2023-qrcode",
    demo: null,
    tags: ["Utility"],
  },
  {
    title: "Weather Forecast App",
    description: "Get real-time weather updates and forecasts.",
    github: "https://github.com/sudharshans2009/itproject2023-weather",
    demo: null,
    tags: ["Utility", "Weather"],
  },
  {
    title: "Image Editor",
    description: "Edit images with various tools and filters.",
    github: "https://github.com/sudharshans2009/itproject2023-editor",
    demo: null,
    tags: ["Editor", "Image"],
  },
  {
    title: "Paint Canvas",
    description: "Draw and paint on a digital canvas.",
    github: "https://github.com/sudharshans2009/itproject2023-paint",
    demo: null,
    tags: ["Editor", "Drawing"],
  },
  {
    title: "RNG Quiz App",
    description: "Quiz app with random question generation.",
    github: "https://github.com/sudharshans2009/itproject2023-quiz",
    demo: null,
    tags: ["Quiz", "Utility"],
  },
  {
    title: "Decentralized Chat App",
    description: "Peer-to-peer decentralized chat platform.",
    github: "https://github.com/sudharshans2009/itproject2023-d-chat",
    demo: null,
    tags: ["Chat", "Decentralized"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
    },
  },
};

const allTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

function ContributorCard({
  contributor,
}: {
  contributor: (typeof contributors)[0];
}) {
  return (
    <Card
      className={`flex flex-col items-center p-6 gap-3 w-full max-w-xs mx-auto shadow-lg border-2 transition-all duration-200 ${
        contributor.tags?.includes("Lead Developer")
          ? "border-primary bg-gradient-to-br from-primary/10 to-background"
          : "border-muted bg-background"
      }`}
    >
      {contributor.avatar ? (
        <img
          src={contributor.avatar}
          alt={contributor.name}
          className="w-20 h-20 rounded-full border-2 border-primary shadow-md mb-2"
        />
      ) : (
        <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-3xl font-bold mb-2">
          {contributor.name[0]}
        </div>
      )}
      <div className="font-semibold text-lg text-center">
        {contributor.name}
      </div>
      {contributor.tags && (
        <div className="flex flex-wrap gap-2 justify-center mb-1">
          {contributor.tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
        </div>
      )}
      <div className="flex gap-3 mt-1">
        {contributor.github && (
          <a
            href={`https://github.com/${contributor.github}`}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:scale-110 transition-transform"
          >
            <Github className="w-6 h-6 hover:text-primary transition" />
          </a>
        )}
        {contributor.email && (
          <a
            href={`mailto:${contributor.email}`}
            target="_blank"
            rel="noopener noreferrer"
            title="Email"
            className="hover:scale-110 transition-transform"
          >
            <Mail className="w-6 h-6 hover:text-primary transition" />
          </a>
        )}
        {contributor.website && (
          <a
            href={contributor.website}
            target="_blank"
            rel="noopener noreferrer"
            title="Website"
            className="hover:scale-110 transition-transform"
          >
            <ExternalLink className="w-6 h-6 hover:text-primary transition" />
          </a>
        )}
      </div>
    </Card>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  return (
    <motion.div className="relative z-10" variants={itemVariants}>
      <Card className="flex flex-col h-full shadow-md border-2 border-transparent hover:border-primary/60 hover:shadow-xl transition-all duration-200 group">
        <CardContent className="flex flex-col gap-4 p-6 flex-1">
          <div className="font-semibold text-lg group-hover:text-primary transition-colors duration-200 mb-1">
            {project.title}
          </div>
          <div className="flex gap-1 mb-2 flex-wrap">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs px-2 py-0.5"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <div className="text-muted-foreground flex-1 text-sm">
            {project.description}
          </div>
          <div className="flex gap-2 mt-2">
            {project.demo && (
              <Button
                asChild
                variant="default"
                size="sm"
                className="hover:scale-105 transition-transform"
              >
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo <ExternalLink className="w-4 h-4 ml-1" />
                </a>
              </Button>
            )}
            <Button
              asChild
              variant="outline"
              size="sm"
              className="hover:bg-primary/10 hover:text-primary border-primary/30 transition group-hover:scale-105"
            >
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub <Github className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

function SectionDivider() {
  return (
    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent my-12" />
  );
}

function App() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const filteredProjects = selectedTag
    ? projects.filter((p) => p.tags.includes(selectedTag))
    : projects;

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/10 to-background text-foreground relative">
        <Background />
        {/* Navbar */}
        <nav className="flex items-center justify-between px-6 py-4 border-b bg-background/80 backdrop-blur sticky top-0 z-20 shadow-sm">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-primary">IT Project 2023</span>
          </div>
          <div className="flex items-center gap-2">
            <ModeToggle />
            <Button asChild variant="link" size="sm">
              <a
                href="https://www.sudharshans.me"
                target="_blank"
                rel="noopener noreferrer"
              >
                Main Website <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </nav>
        {/* Hero Section */}
        <section className="max-w-3xl mx-auto px-4 py-12 text-center flex flex-col items-center gap-6">
          <motion.h1
            className="text-3xl md:text-5xl font-extrabold text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            IT Project 2023 Portfolio
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-muted-foreground"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            A showcase of projects by Sudharshan S, A P Akshayan Raj and Akash P
            for the school IT exhibition. Explore AI, utilities, editors, and
            more!
          </motion.p>
        </section>
        <SectionDivider />
        {/* Contributors */}
        <section className="max-w-5xl mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold mb-4 text-center">Contributors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
            {contributors.map((c) => (
              <ContributorCard key={c.name} contributor={c} />
            ))}
          </div>
        </section>
        <SectionDivider />
        {/* Project Filter */}
        <section className="max-w-6xl mx-auto px-4 pt-8 pb-2">
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              className={`px-4 py-1 rounded-full border text-sm font-medium transition-all duration-150 ${
                selectedTag === null
                  ? "bg-primary text-background border-primary shadow"
                  : "bg-background border-muted hover:bg-primary/10 hover:text-primary"
              }`}
              onClick={() => setSelectedTag(null)}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`px-4 py-1 rounded-full border text-sm font-medium transition-all duration-150 ${
                  selectedTag === tag
                    ? "bg-primary text-background border-primary shadow"
                    : "bg-background border-muted hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setSelectedTag(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </section>
        {/* Projects Grid */}
        <section className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Projects</h2>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredProjects.length === 0 ? (
              <div className="col-span-full text-center text-muted-foreground py-12">
                No projects found for this category.
              </div>
            ) : (
              filteredProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))
            )}
          </motion.div>
        </section>
        <SectionDivider />
        {/* Footer */}
        <footer className="text-center text-muted-foreground py-8">
          IT Project 2023. Crafted by Sudharshan S, A P Akshayan Raj and Akash
          P.
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
