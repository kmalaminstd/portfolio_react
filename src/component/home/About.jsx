

function About() {
  return (
    <>
        <div className="about">
            <div className="about_overlay">
                <div className="container">
                    <div className="common_sec_header">
                        <h3>About Me</h3>
                    </div>

                    <div className="about_content">
                        <p>{`"With a strong foundation in front-end technologies like HTML, CSS, JavaScript, and React, I craft visually stunning and user-friendly websites. My expertise in Bootstrap and jQuery plugins allows me to create responsive designs that enhance user experience across all devices. Additionally, I have a basic understanding of PHP and SQL, which enables me to handle back-end integration and database management, ensuring a well-rounded approach to web development."`}</p>
                    </div>

                    {/* <div className="socials"></div>  */}

                    <div className="hire_btn">
                        <button>Hire Me</button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About