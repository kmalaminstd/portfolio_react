

function Service() {
  return (
    <>
        <div id="services">
            <div className="wrapper">
                <div className="common_sec_header">
                    <h3>My Services</h3>
                </div>

                <div className="all_services">

                    <div className="service">

                        <img src="./image/webdevelopment.png" alt="" />

                        <h5>Web Design</h5>

                        <p>Transform your vision into a stunning, responsive website with my expertise in HTML, CSS, and JavaScript. I specialize in using jQuery plugins and Bootstrap to create dynamic, user-friendly designs that work seamlessly across all devices.</p>
                    </div>

                    <div className="service">

                        <img src="./image/react.png" alt="" />

                        <h5>Full Stack React Development</h5>

                        <p>Build powerful, scalable web applications with my Full Stack React Development services. I leverage the latest technologies, including Firebase for backend integration and Context API for state management, to deliver seamless and efficient user experiences.</p>
                    </div>

                </div>
            </div>
    </div>
    </>
  )
}

export default Service