import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortfolioContext } from "../context/Portfolio.context";
import { DotLoader } from "react-spinners"
// import ReactMar from "react-markdown"
import ReactMarkDown from "react-markdown"
import rehypeRaw from "rehype-raw";


function PortfolioDetails() {
  const { items } = useContext(PortfolioContext)
  const [targetItem, setTargetItem] = useState(null)
  const { id } = useParams()
  
  useEffect(()=>{
    if(items){
      const item = items.find(elm => elm.id === id)
      setTargetItem(item)
    }
  },[id, items])
  
  console.log(targetItem);
  
    return (
      <>
      {
        
        targetItem ?
        <div className="portfolio_details">
          <div className="container">
            <div className="port_name">
              <h3>{targetItem.portfolio_name}</h3>
              <Link target="_blank" to={targetItem.portfolio_link}>Live Preview</Link>
            </div>
            <div className="port_detail">
              <ReactMarkDown rehypePlugins={rehypeRaw}>
                {targetItem.portfolio_details}
              </ReactMarkDown>
            
            </div>
          </div>
        </div> :  (
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
      </>
    );
}
  
  export default PortfolioDetails;
  