import React from 'react'
import Heading from './Heading';
import Card from './Card'

const data = [
    {

        id: 0,
        title: "Dynamic Resume Builder",
        desc: "Dynamic Resume Builder where users can fill out a form, and the resume is generated based on their input.",
        img: "/project_01.jpg",
        tags: ["HTML", "CSS", "TypeScript"],
       
      },
      {

        id: 1,
        title: "Static Interactive Resume Builder",
        desc: "A static resume using HTML, CSS, and TypeScript",
        img: "/project_02.jpg",
        tags: ["HTML", "CSS", "TypeScript"],
       
    },
    {
        id: 2,
        title: "Wordpress website",
        desc: "A Website developed in Wordpress",
        img: "/project_03.png",
        tags: ["Wordpress"],
        
    },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
        <Heading title='My Projects' />
        <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-2 place-items-center'>
            {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
    </div>
  )
}

export default Projects
