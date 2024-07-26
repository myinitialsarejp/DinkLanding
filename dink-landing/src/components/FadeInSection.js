/* eslint-disable */
import { Box} from "@mui/material";
import { useEffect, useRef, useState } from "react"



const FadeInSection = (props) => {

    //const alignment = props.alignment;
    const message = props.message;
    const [isVisible, setIsVisible] = useState(false)
    const domRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting))
        })
        observer.observe(domRef.current)
        return () => observer.unobserve(domRef.current)
    },[])

    return (
        <Box ref={domRef} className={`fade-in ${isVisible ? 'is-visible' : ''}`}>
            {message}
        </Box>
    )
}

export default FadeInSection;