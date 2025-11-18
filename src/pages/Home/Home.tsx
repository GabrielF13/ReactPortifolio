import { lazy, Suspense } from "react"
import Hero from "./sections/Hero/Hero"
import { Box, CircularProgress } from "@mui/material"

// Lazy loading das seções que não são imediatamente visíveis
const About = lazy(() => import("./sections/About/About"))
const Education = lazy(() => import("./sections/Education/Education"))
const Experience = lazy(() => import("./sections/Experience/Experience"))
const Projects = lazy(() => import("./sections/Projects/Projects"))
const Footer = lazy(() => import("./sections/Footer/Footer"))

const LoadingFallback = () => (
  <Box 
    sx={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: "center", 
      minHeight: "200px",
      backgroundColor: "primary.main"
    }}
  >
    <CircularProgress sx={{ color: "secondary.main" }} />
  </Box>
)

const Home = () => {

    return (
      <>
        <div id="hero">
          <Hero/>
        </div>
        <Suspense fallback={<LoadingFallback />}>
          <div id="about">
            <About/>
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="education">
            <Education/>
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="experience">
            <Experience/>
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <div id="projects">
            <Projects/>
          </div>
        </Suspense>
        <Suspense fallback={<LoadingFallback />}>
          <Footer/>
        </Suspense>
      </>
    )
  }
  
  export default Home
  