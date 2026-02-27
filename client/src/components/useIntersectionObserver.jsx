import { useState, useEffect, useRef } from "react";

export default function useIntersectionObserver(options) {
    const ref = useRef(null);
    const [ isVisible, setIsVisible ] = useState(false);

    useEffect(() => {
           const observer = new IntersectionObserver(
             ([entry]) => setIsVisible(entry.isIntersecting),
             options
           );
   
           if (ref.current) {
             observer.observe(ref.current);
           };
   
           return () => observer.disconnect();
    },[options]);

    return {ref, isVisible};
}