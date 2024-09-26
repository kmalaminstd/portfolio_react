import { lazy } from "react"
// import About from "../component/home/About"
// import Banner from "../component/home/Banner"
// import Service from "../component/home/Service"
// import Skill from "../component/home/Skill"
// import Work from "../component/home/Work"
const About = lazy(()=>import("../component/home/About"))
const Banner = lazy(()=>import("../component/home/Banner"))
const Service = lazy(()=>import("../component/home/Service"))
const Skill = lazy(()=>import("../component/home/Skill"))
const Work = lazy(()=>import("../component/home/Work"))


function Home() {
  return (
    <>
        <Banner />
        <About />
        <Service />
        <Skill />
        <Work />
    </>
  )
}

export default Home