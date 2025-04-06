"use client"

import { Github, Linkedin, Mail, Instagram, Youtube, Twitter, MessageSquare, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useTransform, useAnimation, useInView } from "framer-motion"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/use-toast"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col relative overflow-hidden">
      {/* Custom cursor */}
      <div
        className="fixed w-8 h-8 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: `${mousePosition.x}px`,
          top: `${mousePosition.y}px`,
          transform: "translate(-50%, -50%)",
          background: "white",
          boxShadow:
            "0 0 20px 5px rgba(255, 0, 0, 0.5), 0 0 40px 10px rgba(0, 255, 0, 0.3), 0 0 60px 15px rgba(0, 0, 255, 0.2)",
          transition: "transform 0.1s ease-out, width 0.2s, height 0.2s",
        }}
      />

      {/* RGB gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-background via-background to-background z-[-1]">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#ff0000,transparent_70%)] animate-pulse"
            style={{ animationDuration: "4s" }}
          ></div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,#00ff00,transparent_70%)] animate-pulse"
            style={{ animationDuration: "5s" }}
          ></div>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,#0000ff,transparent_70%)] animate-pulse"
            style={{ animationDuration: "6s" }}
          ></div>
        </div>
      </div>

      <header className="sticky top-0 z-10 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mr-4 hidden md:flex"
          >
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient">
                 Hybridz Dynamics
              </span>
            </Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="#about" className="transition-colors hover:text-foreground/80 hover:scale-110">
                About
              </Link>
              <Link href="#websites" className="transition-colors hover:text-foreground/80 hover:scale-110">
                Websites
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80 hover:scale-110">
                Projects
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80 hover:scale-110">
                Skills
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80 hover:scale-110">
                Contact
              </Link>
            </nav>
          </motion.div>
          <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <SocialButton
                href="https://github.com/HybridzDynamics"
                icon={<Github className="h-4 w-4" />}
                label="GitHub"
              />
              <SocialButton
                href="https://www.linkedin.com/in/mohammad-arsh-b98b91221/"
                icon={<Linkedin className="h-4 w-4" />}
                label="LinkedIn"
              />
              <SocialButton
                href="https://www.instagram.com/hybridz_dynamics/"
                icon={<Instagram className="h-4 w-4" />}
                label="Instagram"
              />
              <SocialButton
                href="https://x.com/HybridzDnamics"
                icon={<Twitter className="h-4 w-4" />}
                label="Twitter"
              />
              <SocialButton
                href="https://www.youtube.com/@Hybridzdynamics"
                icon={<Youtube className="h-4 w-4" />}
                label="YouTube"
              />
              <SocialButton
                href="mailto:hybridzdynamicsofficial@zohomail.in"
                icon={<Mail className="h-4 w-4" />}
                label="Email"
              />
            </motion.div>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section id="about" className="container py-24 sm:py-32 relative">
          <motion.div style={{ opacity }} className="absolute top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-20 right-20 w-64 h-64 bg-red-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-40 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 right-40 w-80 h-80 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:gap-16">
            <AnimatedSection>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient">
                  Arsh
                </span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                A versatile creator with expertise in game development, graphic design, website creation, programming,
                and video editing. As the owner of the YouTube channel <strong>Hybridz Dynamics</strong>, I share
                content on tech, gaming, and development.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button asChild className="relative overflow-hidden group">
                  <Link href="#contact">
                    <span className="relative z-10">Contact Me</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="relative overflow-hidden group">
                  <Link href="#websites">
                    <span className="relative z-10">View My Work</span>
                    <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] overflow-hidden rounded-full bg-muted">
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-spin-slow opacity-70"></div>
                  <div className="absolute inset-2 overflow-hidden rounded-full bg-background flex items-center justify-center">
                    <img
                      src="/3.png"
                      alt="HD"
                      className="object-cover"
                      className="object-cover w-full h-full"
                      style={{ objectFit: "cover" }}
                      width={300}
                      height={300}
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="websites" className="container py-24 sm:py-32">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative inline-block">
              <span className="relative z-10">My Websites</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-20 blur-lg -z-10 transform scale-150"></span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <WebsiteCard
                title="Aayat International"
                description="A business website developed with HTML, CSS, and JavaScript. Currently under development for a business client."
                tags={["HTML", "CSS", "JavaScript", "Business"]}
                image="/ayi.png?height=200&width=400"
                url="https://aayatinternational.netlify.app"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <WebsiteCard
                title="SAP Games"
                description="A game showcase website built with HTML, CSS, and JavaScript. Currently under development for my game projects."
                tags={["HTML", "CSS", "JavaScript", "Gaming"]}
                image="/sap.png"
                url="https://sapgames.netlify.app?height=200&width=400"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <WebsiteCard
                title="DT Horror"
                description="A Roblox game website created with HTML, CSS, and JavaScript to showcase and promote a horror game on Roblox."
                tags={["HTML", "CSS", "JavaScript", "Roblox", "Gaming"]}
                image="/dthorrorr.png?height=200&width=400"
                url="https://dt-horror.vercel.app/"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <WebsiteCard
                title="Hybridz Dynamics"
                description="My personal website built with TypeScript, Tailwind CSS, and Vite to showcase my portfolio and projects."
                tags={["TypeScript", "Tailwind CSS", "Vite", "Portfolio"]}
                image="/logo.png?height=200&width=400"
                url="https://hybridzdynamics.vercel.app/"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.5}>
              <WebsiteCard
                title="United Counties of Mike Island"
                description="A roleplay community website developed with TypeScript, Tailwind CSS, and JavaScript to support an online community."
                tags={["TypeScript", "Tailwind CSS", "JavaScript", "Community"]}
                image="/asd.png?height=200&width=400"
                url="https://uciom.vercel.app/"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.6}>
              <WebsiteCard
                title="Rhys Customs"
                description="."
                tags={["HTML", "CSS", "JavaScript"]}
                image="/rhys.png?height=200&width=400"
                url="https://rhyscustom.vercel.app/"
              />
            </AnimatedSection>
          </div>
        </section>

        <section id="projects" className="container py-24 sm:py-32">
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative inline-block">
              <span className="relative z-10">Projects</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-20 blur-lg -z-10 transform scale-150"></span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection delay={0.1}>
              <ProjectCard
                title="Mythralilos: Realms Unbound"
                description="Genre: Fantasy RPG | Platform: PC | Status: In Development 
                Overview:
                Mythralilos: Realms Unbound is an immersive, open-world RPG that challenges players with deep character progression, a fair economy, and real consequences. Designed for competitive and cooperative gameplay, it blends rich fantasy storytelling with unique game mechanics and a persistent global world."
                tags={["Unreal Engine", "C++"]}
                image="/MRU.png?height=200&width=400"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <ProjectCard
                title="Orlando Protection Bot"
                description="Implemented using Python with features including alt detection, auto-moderation, and security logs to keep Discord servers safe."
                tags={["Python", "Discord API", "Security", "Bot Development"]}
                image="/opr.png?height=200&width=400"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <ProjectCard
                title=" Hybridz Checkpoint Management"
                description="Implemented using Python with features including alt detection, auto-moderation, and security logs to keep Discord servers safe."
                tags={["Python", "Discord API", "Security","Management", "Bot Development"]}
                image="/logo.png?height=100&width=200"
              />
            </AnimatedSection>
          </div>
        </section>
        <section id="skills" className="container py-24 sm:py-32 bg-muted/30 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-green-500/5 to-blue-500/5"></div>
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative inline-block">
              <span className="relative z-10">Skills</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-20 blur-lg -z-10 transform scale-150"></span>
            </h2>
          </AnimatedSection>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <AnimatedSection delay={0.1}>
              <SkillCard
                title="Game Development"
                skills={["Unreal Engine", "Game Design", "Level Design", "3D Modeling"]}
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <SkillCard title="Web Development" skills={["HTML", "CSS", "JavaScript", "Python", "SQL"]} />
            </AnimatedSection>
            <AnimatedSection delay={0.3}>
              <SkillCard title="Graphic Design" skills={["UI/UX", "Digital Art", "Motion Graphics", "Photoshop"]} />
            </AnimatedSection>
            <AnimatedSection delay={0.4}>
              <SkillCard title="DevOps & Tools" skills={["Docker", "GitHub", "Git", "Cloud Services"]} />
            </AnimatedSection>
          </div>
        </section>
        <section id="contact" className="container py-24 sm:py-32 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-green-500/5 to-blue-500/5"></div>
          <AnimatedSection>
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl relative inline-block">
              <span className="relative z-10">Contact Me</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-20 blur-lg -z-10 transform scale-150"></span>
            </h2>
          </AnimatedSection>
          <div className="mx-auto max-w-lg">
            <AnimatedSection delay={0.2}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-green-500/5 to-blue-500/5"></div>
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center text-sm leading-loose text-muted-foreground md:text-left"
          >
            © {new Date().getFullYear()} Mohammad Arsh. All rights reserved.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <SocialButton
              href="https://github.com/HybridzDynamics"
              icon={<Github className="h-4 w-4" />}
              label="GitHub"
            />
            <SocialButton
              href="https://www.linkedin.com/in/mohammad-arsh-b98b91221/"
              icon={<Linkedin className="h-4 w-4" />}
              label="LinkedIn"
            />
            <SocialButton
              href="https://www.instagram.com/hybridz_dynamics/"
              icon={<Instagram className="h-4 w-4" />}
              label="Instagram"
            />
            <SocialButton href="https://x.com/HybridzDnamics" icon={<Twitter className="h-4 w-4" />} label="Twitter" />
            <SocialButton
              href="https://www.youtube.com/@Hybridzdynamics"
              icon={<Youtube className="h-4 w-4" />}
              label="YouTube"
            />
            <SocialButton
              href="mailto:hybridzdynamicsofficial@zohomail.in"
              icon={<Mail className="h-4 w-4" />}
              label="Email"
            />
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

function SocialButton({ href, icon, label }) {
  return (
    <Button variant="ghost" size="icon" asChild className="relative overflow-hidden group">
      <Link href={href} target="_blank" rel="noreferrer">
        <span className="relative z-10">{icon}</span>
        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></span>
        <span className="sr-only">{label}</span>
      </Link>
    </Button>
  )
}

function WebsiteCard({ title, description, tags, image, url }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform group-hover:scale-105 w-full h-full"
        />
      </div>
      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold">{title}</h3>
          <Button variant="ghost" size="icon" asChild className="relative overflow-hidden group">
            <Link href={url} target="_blank" rel="noreferrer">
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Visit {title}</span>
            </Link>
          </Button>
        </div>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">{tag}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ title, description, tags, image }) {
  return (
    <div className="group relative overflow-hidden rounded-lg border hover:shadow-lg transition-all duration-300 bg-card/50 backdrop-blur-sm h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="aspect-video overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-6 relative z-10">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium relative overflow-hidden group"
            >
              <span className="relative z-10">{tag}</span>
              <span className="absolute inset-0 bg-gradient-to-r from-red-500/20 via-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function SkillCard({ title, skills }) {
  return (
    <div className="rounded-lg border bg-card/50 backdrop-blur-sm p-6 hover:shadow-lg transition-all duration-300 relative overflow-hidden group h-full">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <h3 className="text-xl font-bold relative z-10">{title}</h3>
      <ul className="mt-4 space-y-2 relative z-10">
        {skills.map((skill) => (
          <li key={skill} className="flex items-center">
            <div className="mr-2 h-2 w-2 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-gradient"></div>
            {skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const formData = new FormData(e.target)
      const response = await fetch("https://formspree.io/f/xzzeagev", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })

      if (response.ok) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        })
        e.target.reset()
      } else {
        throw new Error("Form submission failed")
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="grid gap-6 relative" onSubmit={handleSubmit}>
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-green-500/5 to-blue-500/5 -z-10"></div>
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium leading-none">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your name"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium leading-none">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="flex h-10 w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your email"
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium leading-none">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          className="flex min-h-[120px] w-full rounded-md border border-input bg-background/50 backdrop-blur-sm px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="Your message"
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="relative overflow-hidden group">
        <span className="relative z-10 flex items-center gap-2">
          {isSubmitting ? "Sending..." : "Send Message"}
          <MessageSquare className="h-4 w-4" />
        </span>
        <span className="absolute inset-0 bg-gradient-to-r from-red-500 via-green-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </Button>
    </form>
  )
}

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

