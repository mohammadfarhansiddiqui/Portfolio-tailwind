import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='container pt-32'>
        <div className='grid md:grid-cols-2 gap-20 items-center'>
            <div>
                 <h2 className='text-4xl md:text-4xl'>Technologies I am familiar with</h2>
                 <p className='text-black-2000 pt-2'>
                 With extensive expertise in web development, I specialize in technologies including HTML, CSS, and TypeScript. I leverage modern frameworks such as React and Next.js to architect responsive, intuitive applications that prioritize user experience. My proficiency in Tailwind CSS enables rapid development of sophisticated, maintainable interfaces. Committed to technical excellence, I consistently expand my knowledge base through emerging technologies and industry best practices, ensuring optimal contribution to project outcomes."

                 </p>
            </div>
            <div>
                <div className='grid grid-cols-2 text-black text-3xl sm:text-4xl'>
<div className='space-y-2'>
    <h2>Wordpress</h2>
    <h2>TypeScript</h2>
    <h2>Next.js</h2>
</div>
<div className='space-y-2'>
    <h2>CSS</h2>
    <h2>PHP</h2>
    <h2>Tailwind</h2>

</div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
