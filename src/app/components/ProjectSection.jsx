"use client"
import React ,{useState,useRef} from 'react'
import ProjectCard from './ProjectCrad'
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "BibioTech Website",
    description: "Personal reading list to keep track of books.",
    image: "/assets/bib.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sabuuuu/book-store",
    previewUrl: "https://biblio-tech.onrender.com",
  },
  {
    id: 2,
    title: "Exam Scheduler Website",
    description: "Web application developed to create exam schedules automatically whilst respecting some constraints.",
    image: "/assets/eadmin.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sabuuuu/e-admin",
    previewUrl: "https://e-plan-admin.vercel.app/",
  },
  {
    id: 3,
    title: "Exam Schedules Visualization Website",
    description: "Web application developed to create exam schedules for all departments and specialties.",
    image: "/assets/eplan.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sabuuuu/e-plan",
    previewUrl: "https://e-plan-students.vercel.app/",
  },
  {
    id: 4,
    title: "Blood Donation Application",
    description: "Lifedrop is a mobile application designed for a blood donation association in Algeria.",
    image: "/assets/lifedrop.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sabuuuu/lifeDrop",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Tv Show Search Website",
    description: "A tv shows searching platfom using keywords.",
    image: "/assets/wave.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/sabuuuu/tvshows-frontend",
    previewUrl: "https://tvshows-frontend.vercel.app/",
  },
  {
    id: 6,
    title: "Restaurant Table Reservation",
    description: "Booking app for a restaurant using React Native and Firebase.",
    image: "/assets/goldenexp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/sabuuuu/golden-experience",
    previewUrl: "/",
  },
];

function ProjectSection() {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
            <motion.li
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
      </ul>
    </section>
  );
}

export default ProjectSection