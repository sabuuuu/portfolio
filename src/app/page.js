import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import AboutSection from "./components/AboutSection"
import ProjectSection from "./components/ProjectSection"
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer"
import { Divider } from "@react-md/divider";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar/>
      <div className="container mx-auto mt-32 px-12 py-4">
        <HeroSection />
        <div className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent mt-4 "></div>
        <AboutSection />
        <div className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent mt-4 "></div>
        <ProjectSection />
        <div className="border z-10 border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent mt-4 "></div>
        <EmailSection />
        <Footer />
      </div>
    </main>
  )
}
