import { useContext, useEffect, useRef } from 'react';
import { PortfolioContext } from '../context/Portfolio.context';
import Isotope from 'isotope-layout';
import { Link } from 'react-router-dom';

function Portfolio() {
  const { items } = useContext(PortfolioContext);

  const isotopGridRef = useRef(null);
  const iso = useRef(null);

  useEffect(() => {
    // Initialize Isotope when the component mounts
    if (isotopGridRef.current) {
      iso.current = new Isotope(isotopGridRef.current, {
        itemSelector: '.single_work',
        layoutMode: 'fitRows'
      });
    }

    // Cleanup Isotope when the component unmounts
    return () => {
      if (iso.current) {
        iso.current.destroy();
        iso.current = null;
      }
    };
  }, []);

  const handleFilter = (filter) => {
    if (iso.current) {
      iso.current.arrange({ filter });
    }
  };

  return (
    <>
      <div className="portfolio">
        <div className="container">
          <div className="port_head">
            <h2>Portfolio</h2>
          </div>

          <div className="portfolio_buttons">
              <div className="button-group filter-button-group">
                <button data-filter="*" onClick={() => handleFilter('*')}>
                  Show All
                </button>
                <button
                  data-filter=".psdconv"
                  onClick={() => handleFilter('.psdconv')}
                >
                  PSD to Html
                </button>
                <button
                  data-filter=".webdesign"
                  onClick={() => handleFilter('.webdesign')}
                >
                  Web Design
                </button>
                <button data-filter=".react" onClick={() => handleFilter('.react')}>
                  React.Js
                </button>
                <button data-filter=".js" onClick={() => handleFilter('.js')}>
                  JavaScript
                </button>
              </div>
            </div>

            <div className="portfolio_container" ref={isotopGridRef}>
              {items && items.map((item, i) => {
                return (
                  <div
                    className={`grid single_work ${item.category}`}
                    key={i}
                  >
                    <img src={item.portfolio_image} alt="" />
                    <div className="single_work_overlay">
                      <Link to={`/portfolio-details/${item.id}`}
                      >
                        {item.portfolio_name}
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    </>
  );
}

export default Portfolio;
