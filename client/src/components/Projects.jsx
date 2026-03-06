import { useEffect, useState } from "react";
import useIntersectionObserver from './useIntersectionObserver';
import ProjectItem from "./ProjectItem"
import axios from "axios";

const Projects = () => {
  const { ref, isVisible } = useIntersectionObserver({threshold: 0.3});
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
      
      const fetchProjects = async () => {
        try {
          const res = await axios.get('http://127.0.0.1:5000/api/projects/all/6997eae9bea0458f5cd582c9');
          setProjects(res.data);
  
        } catch (error) {
          console.log(error);
        }
      }
  
      fetchProjects();
      
    }, []);
  
  return (
    <section id='projects' ref={ref}  className={`bg-linear-to-b from-gray-600 to-gray-800 p-4 md:p-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
      <h1 className='text-center text-3xl md:text-4xl text-gray-300 font-bold p-5 py-8 underline underline-offset-8 decoration-green-700 decoration-2'>Projects</h1>
      {
            projects.map(project => (
          <ProjectItem title={project.title} 
          description={project.description} 
          git={project.links ? project.links.repo ? project.links.repo : null : null}
          live={project.links ? project.links.live ? project.links.live : null : null}
          pictures={project.pictures}
          key={project._id} />
    ))

      }
    </section>
    
  )
}

export default Projects
