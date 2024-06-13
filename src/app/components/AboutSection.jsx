"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
            <li>MongoDB</li>
            <li>React</li>
            <li>Node.js</li>
            <li>React Native</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>Java Swing</li>
            <li>Python</li>
            <li>Next.js</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
            <li>Bachelor&apos;s in Information Systems - University of Béjaïa</li>
            <li>Master&apos;s in Software Engineering - University of Béjaïa</li>
        </ul>
      ),
    }
  ];

function AboutSection() {
    const [tab, setTab] = useState("skills");
    
    const [isPending, startTransition] = useTransition();
  
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      });
    };
  return (
    <section id="about" className="text-white">
    <div className="gap-8 items-center py-8 px-4 xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-16">
      <Image src="/assets/about-image.png" width={700} height={700} alt="Description of the image"/>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-2xl font-bold text-white mb-4">About Me</h2>
        <p className="text-white ">
            I am a dedicated Software Engineering student with a passion for full-stack and mobile development. My technical skill set includes expertise in MongoDB, Express.js, React, Node.js, React Native, Firebase, MySQL, Java Swing, Python, and Next.js. I thrive on bringing projects to life through code, utilizing Git and GitHub for efficient version control and collaboration. I am a quick learner and always looking to expand my knowledge and skill set. As a team player, I am excited to work with others to create amazing applications. My hands-on experience in developing dynamic applications and robust backend systems equips me with the versatility and problem-solving capabilities to tackle diverse challenges in the tech world.
        </p>
        <div className="flex flex-row justify-start mt-8">
          <TabButton
            selectTab={() => handleTabChange("skills")}
            active={tab === "skills"}
          >
            Skills
          </TabButton>
          <TabButton
            selectTab={() => handleTabChange("education")}
            active={tab === "education"}
          >
            Education
          </TabButton>
        </div>
        <div className="mt-4 text-sm">
          {TAB_DATA.find((t) => t.id === tab).content}
        </div>
      </div>
    </div>
  </section>
  )
}

export default AboutSection