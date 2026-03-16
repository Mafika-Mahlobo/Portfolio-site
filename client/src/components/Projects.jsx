import { useEffect, useState } from "react";
import useIntersectionObserver from './useIntersectionObserver';
import ProjectItem from "./Admin/ProjectItem";
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
    <section id='projects' ref={ref}  className={`flex flex-col items-center bg-linear-to-b from-gray-600 to-gray-800 p-4 md:p-6 transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>

       <fieldset className='p-5 rounded-lg flex flex-col justify-center shadow-2xl shadow-gray-900'>
            <legend className='text-4xl text-gray-400 font-extrabold'>
              <i className="fa-solid fa-wrench text-gray-700 text-2xl"></i> Projects <i className="fa-solid fa-wrench text-gray-700 text-2xl"></i>
            </legend>
            <div className='p-2 flex flex-col gap-y-5'>
              { projects.length > 0 ?
                    projects.map((project) => (
                      <ProjectItem title={project.title} 
                  description={project.description} 
                  git={project.links ? project.links.repo ? project.links.repo : null : null}
                  live={project.links ? project.links.live ? project.links.live : null : null}
                  pictures={project.pictures}
                  key={project._id} />
                ))
                :
                <div className='text-gray-300 text-center sm:mx-30 lg:mx-100 flex flex-col justify-center items-center'>
                  <p className="text-gray-400 text-2xl font-bold">No projects</p>
                  <i className="fa-solid fa-wrench p-10 text-4xl text-gray-400"></i>
                </div>

              }
            </div>
       </fieldset>
      
    </section>
    
  )
}

export default Projects
