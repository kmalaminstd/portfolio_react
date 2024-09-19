import About from "../component/home/About"
import Banner from "../component/home/Banner"
import Service from "../component/home/Service"
import Skill from "../component/home/Skill"
import Work from "../component/home/Work"


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