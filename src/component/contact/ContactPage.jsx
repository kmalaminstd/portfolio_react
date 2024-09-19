

function ContactPage() {
  return (
    <>
        <div className="contact_page">
            <div className="container">
                <div className="common_sec_header">
                    <h3>Contact With Me</h3>
                </div>

                <div className="social_sites">
                    <div className="header">
                        <h4>You will find me at...</h4>
                    </div>
                    <div className="sites">

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/facebook.png" alt="" /> 
                            </div>
                            <div className="site_name">
                                <a href="https://www.facebook.com/kmalaminstd">Facebook</a>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/instagram.png" alt="" />
                            </div>
                            <div className="site_name">
                                <a href="https://www.instagram.com/kmalaminwd/">Instagram</a>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/twitter.png" alt="" />
                            </div>
                            <div className="site_name">
                                <a href="https://x.com/KMALAMI61039121">X (twitter)</a>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/github (1).png" alt="" />
                            </div>
                            <div className="site_name">
                                <a href="github.com/kmalaminstd">Github</a>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className="social_sites">
                    <div className="header">
                        <h4>Get in touch with me at...</h4>
                    </div>

                    <div className="sites">
                        <div className="site">
                            <div className="site_image">
                                <img src="./image/gmail.png" alt="" />
                            </div>
                            <div className="site_name">
                                <a href="mailto:alaminkhanstd@gmail.com">Gmail</a>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="contact_form">

                    <h4>Contact Form</h4>

                    <form action="">
                        <input type="text" name="fullname" placeholder="Enter your full name" />
                        <input type="email" name="email" placeholder="Enter your email (required)" required />
                        <textarea placeholder="Type your message (required)" name="message" required></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage