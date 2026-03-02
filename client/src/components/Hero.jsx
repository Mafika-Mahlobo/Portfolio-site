import React, { useEffect } from 'react';
import image2 from '../assets/profile-pic.png';
import useIntersectionObserver from './useIntersectionObserver';

const Hero = ({name, hero, resume}) => {
    const [ isTitleDev, setIsTitleDev ] = React.useState(true);
    const { ref, isVisible } = useIntersectionObserver({threshold: 0.3})

    useEffect(() => {
        const titleInterval = setInterval(() => {
            setIsTitleDev(prev => !prev);
            
        }, 7000);
        return () => clearInterval(titleInterval);
    }, []);

    const downloadResume = async (url) => {
        if (!url) {
            alert('Resume not found!');
            return
        }

        if (!window.confirm("You are about to download a file")) return

        try {
            const response = await fetch(url);
            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);

            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = 'Mafika_Mahlbo_CV.pdf';
            document.body.appendChild(a);
            a.click();

            document.body.removeChild(a);
            window.URL.revokeObjectURL(blobUrl);

        } catch (error) {
            console.log(error);
        }
    }

    
    return (
        <section id='home' ref={ref} className={`bg-linear-to-b from-gray-900 to-gray-600 text-gray-400 overflow-hidden justify-center p-0 m-0 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-50'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 items-start min-h-fit p-5 m-0">
                <div className="flex flex-col items-stretch gap-y-5 p-5 m-0">
                    <h3 className="text-2xl p-0 m-0 ">Welcome to my portfolio<li className='text-5xl text-green-700 font-extralight inline'>.</li></h3>
                    <h1 className={`text-3xl sm:text-4xl font-extrabold transition-all duration-900 ${!isTitleDev ? 'underline underline-offset-10 style decoration-green-700 decoration-1': 'text-gray-400'}`}>{isTitleDev ? name : "Web Developer"}</h1>
                    <p className="text-gray-300 max-w-xl">{hero}</p>

                    <div className="container flex gap-x-4 justify-around sm:justify-start">
                        <button onClick={() => downloadResume(resume)} className="mt-2 inline-flex items-center px-4 py-2 hover:bg-gray-900 duration-800 bg-green-700 text-gray-300 border border-green-900  font-semibold rounded-md shadow-3xl shadow-gray-800 transition cursor-pointer">Download resumé</button>
                    </div>
                </div>

                <div className="flex h-full w-full p-1 justify-center items-center">
                    <img src={image2} alt="Profile" className="justify-self-center w-60 h-60 sm:w-80 sm:h-80 rounded-full object-cover bg-linear-to-b from-gray-800 to-gray-900 shadow-sm shadow-green-900" />

                </div>
            </div>
            <section className="flex justify-center overflow-hidden bg-gray-600 p-0 shadow-5xl shadow-grey-900">
                <ul className='flex justify-center text-2xl md:text-3xl animate-pulse text-gray-900'>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-js"></i></li>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-node"></i></li>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-react"></i></li>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-python"></i></li>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-html5"></i></li>
                    <li className='py-5 px-10 sm:px-25'><i className="fa-brands fa-css3-alt"></i></li>
                </ul>
            </section>
                
        </section>
    )
}

export default Hero
