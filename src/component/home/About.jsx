import { Link } from "react-router-dom"


function About() {
  return (
    <>
        <div className="about">
            <div className="about_overlay">
                <div className="container">
                    <div className="common_sec_header">
                        <h3>About Me</h3>
                    </div>

                    <div className="about_content" style={{textAlign: "center"}}>
                        <p>With a solid foundation in front-end technologies such as HTML, CSS, Bootstrap, JavaScript, jQuery, and React, I specialize in building visually appealing, responsive, and user-friendly websites. My experience with Bootstrap and jQuery plugins helps me deliver seamless designs that adapt across all devices.
                        </p>
                            <br />
                        <p>
                        Beyond front-end, I have professional experience developing cross-platform mobile apps using React Native (Expo) and working with Firebase for authentication, cloud storage, and real-time updates. On the backend, I’ve built RESTful APIs with Node.js (Express.js) and managed data with MySQL and SQL, ensuring smooth integration between systems.
                        </p>
                                <br />
                        <p>
                        This combination of web, mobile, and backend expertise allows me to approach projects with a full-stack mindset—designing, developing, and deploying solutions that are scalable, efficient, and impactful.</p>
                    </div>

                    {/* <div className="socials"></div>  */}

                    <div className="hire_btn">
                        <Link to="/contact">Hire Me</Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About