import { Link } from "react-router-dom"
import { PortfolioContext } from "../../context/Portfolio.context"
import { useContext } from "react"


function Work() {

    const { portfolioItem } = useContext(PortfolioContext)
    // console.log(portfolioItem);
    
  return (
    <>
        <div id="work">
            <div className="container">
                <div className="common_sec_header">
                    <h3>My Work</h3>
                </div>

                <div className="all_works">
                    {
                        portfolioItem.slice(0, 3).map((item, i) => {
                            
                            return(
                                <div className="single_work" key={i}>
                                    <img src="./image/work_one.png" alt="" />
                                    <div className="single_work_overlay">
                                        <a href="https://kmalaminstd.github.io/portfolio/" target="_blank">{item.projectName}</a>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <div className="single_work">
                        <img src="./image/work_one.png" alt="" />
                        <div className="single_work_overlay">
                            <a href="https://kmalaminstd.github.io/portfolio/" target="_blank">Portfolio</a>
                        </div>
                    </div>

                    <div className="single_work">
                        <img src="./image/work_one.png" alt="" />
                        <div className="single_work_overlay">
                            <a href="https://kmalaminstd.github.io/portfolio/" target="_blank">Portfolio</a>
                        </div>
                    </div>

                    <div className="single_work">
                        <img src="./image/work_one.png" alt="" />
                        <div className="single_work_overlay">
                            <a href="https://kmalaminstd.github.io/portfolio/" target="_blank">Portfolio</a>
                        </div>
                    </div> */}

                </div>

                <div className="worK_btn">
                    <Link to="/portfolio">See All Work</Link>
                </div>

            </div>
            <div className="clearifix"></div>
        </div>
    </>
  )
}

export default Work