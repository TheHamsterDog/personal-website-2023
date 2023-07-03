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
import Head from 'next/head';
// const metadata = {
//   title: 'Shreshth Verma',
//   "og:title": 'Shreshth Verma',
//   description: 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
//   "og:description": 'I\'m Shreshth Verma: A Full Stack Developer, a perpetual student, an entrepreneur, and an amateur poet',
//   "og:url": "https://www.shreshthverma.me",
//   "keywords": "Shreshth, Verma, Shreshth Verma, shreshthverma.me, Personal Site, personal, site",
//   "og:image": "/favicon.ico"

// }
export default function Home() {
  const [open, setOpen] = React.useState(false)
  const home = React.useRef(null);
  const work = React.useRef(null)
  const experience = React.useRef(null);
  const projects = React.useRef(null);
  const skills = React.useRef(null);

  return (
    <div className='home'>
      {/* <Head>
        {Object.keys(metadata).map(a => {
          return (<meta name={a} content={metadata[a]} />)
        })}
      </Head> */}
      <Header ref={home} />
      <Work ref={work} />
      <Experience ref={experience} />
      <Projects ref={projects} />
      <Skills ref={skills}></Skills>
      <Contact open={open} setOpen={setOpen} />
      <Navbar setOpen={setOpen} home={home} work={work} experience={experience} projects={projects} skills={skills} />
      {/* <TestAndAchievements /> */}
    </div>
  )
}
