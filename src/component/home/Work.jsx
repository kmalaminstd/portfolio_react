import { Link } from "react-router-dom"
import { PortfolioContext } from "../../context/Portfolio.context"
import { useContext } from "react"
import { DotLoader } from "react-spinners"


function Work() {

    const { items } = useContext(PortfolioContext)
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
                        items ? items.slice(0, 3).map((item, i) => {
                            
                            return(
                                <div className="single_work" key={i}>
                                    <img src={item.portfolio_image} alt="" />
                                    <div className="single_work_overlay">
                                        <Link to={`/portfolio-details/${item.id}`} >{item.portfolio_name}</Link>
                                    </div>
                                </div>
                            )
                        }) : (
                            <div className="webLoader">
                                <DotLoader
                                height="80"
                                width="80"
                                radius={1}
                                color="#4fa94d"
                                aria-label="loading-indicator"
                                visible="true" 
                                />
                            </div>
                        )
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

                <div className="work_btn">
                    <Link to="/portfolio">See All Work</Link>
                </div>

                

            </div>
            {/* <div className="clearifix"></div> */}
        </div>
    </>
  )
}

export default Work