"use client";

import React from 'react';
import Image from 'next/image'
import Header from '../components/header';
import Work from '../components/work';
import Experience from '../components/initiatives';
import Skills from '@/components/skills';
import TestAndAchievements from '@/components/test-and-achievements';

import Projects from '@/components/projects';
import Footer from '@/components/footer';
import Contact from '@/components/contact';
import Navbar from '@/components/navbar';

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const home = React.useRef(null);
  const work = React.useRef(null)
  const experience = React.useRef(null);
  const projects = React.useRef(null);
  const skills = React.useRef(null);

  return (
    <div className='home'>
      <Header ref={home}/>
      <Work ref={work}/>
      <Experience ref={experience}/>
      <Projects ref={projects}/>
      <Skills ref={skills}></Skills>
      <Footer />
      <Contact open={open} setOpen={setOpen} />
      <Navbar setOpen={setOpen} home={home} work={work} experience={experience} projects={projects} skills={skills} />
      {/* <TestAndAchievements /> */}
    </div>
  )
}
