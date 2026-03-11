import React, { useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const Hero = ({name, hero, resume, profilePicture}) => {
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
        <section id='home' ref={ref} className={`bg-linear-to-b from-gray-500 to-gray-800 text-gray-900 overflow-hidden justify-center p-0 m-0 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-90'}`}>
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-12 items-start min-h-fit p-5 m-0">
                <div className="flex flex-col items-stretch gap-y-5 p-5 m-0">
                    <h3 className="text-2xl p-0 m-0 text-gray-200">Welcome to my portfolio<li className='text-5xl text-green-900 font-extralight inline'>.</li></h3>
                    <h1 className={`text-3xl sm:text-4xl font-extrabold transition-all duration-900 text-gray-300 ${!isTitleDev ? 'underline underline-offset-10 decoration-green-700 decoration-1': ''}`}>{isTitleDev ? name : "Web Developer"}</h1>
                    <p className="text-gray-300 max-w-xl">{hero}</p>

                    <div className="container flex gap-x-4 justify-around sm:justify-start">
                        <button onClick={() => downloadResume(resume)} className="mt-2 inline-flex items-center px-4 py-2 hover:bg-gray-900 duration-800 bg-green-700 text-gray-300 border border-green-900  font-semibold rounded-md shadow-3xl shadow-gray-800 transition cursor-pointer">Download resumé</button>
                    </div>
                </div>

                <div className="flex h-full w-full p-1 justify-center items-center">
                    <img src={profilePicture} alt="Profile" className="justify-self-center w-48 h-48 md:w-80 md:h-80 rounded-full object-cover bg-linear-to-b from-gray-800 to-gray-900 shadow-sm shadow-green-900" />

                </div>
            </div>
            <section className="flex justify-center bg-gray-600 p-4 shadow-5xl shadow-grey-900">
                <ul
                    className="flex flex-wrap justify-center gap-2 md:gap-15 max-w-4xl transition-all duration-700"
                >
                    {/** each skill is a fixed-size circle */}
                    <li
                        className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23 rounded-full shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-js text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">JavaScript</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23  rounded-full shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-python text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">Python</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23  rounded-full shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-html5 text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">HTML</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23  rounded-full shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-css3-alt text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">CSS</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23  rounded-full shadow-2xl shadow-gray-900 bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-node text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">Node.js</span>
                    </li>
                    <li className="flex flex-col items-center justify-center w-24 h-24 sm:w-23 sm:h-23  rounded-full shadow-2xl shadow-gray-900  bg-linear-to-b from-gray-600 to-gray-800 text-gray-400 hover:animate-pulse">
                        <i className="fa-brands fa-react text-2xl"></i>
                        <span className="mt-1 text-xs sm:text-sm">React</span>
                    </li>
                </ul>
            </section>
                
        </section>
    )
}

export default Hero
