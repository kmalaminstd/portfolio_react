
import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import emailjs from "@emailjs/browser"
import { toast } from "react-toastify"
// import { Resend } from "resend"


function ContactPage() {

    const form = useRef()

    const [data, setData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [dataErr, setDataErr] = useState('')

    const handleValue = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }


    const handleForm = e => {
        e.preventDefault()

        if(!data.email && !data.message){
            setDataErr('Invalid field')
        }else{
            emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current,{
                publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            }).then(()=>{
                toast.success("Email sent")
                form.current.reset()
                setData({
                    name: '',
                    email: '',
                    message: ''
                });
            }).catch((err)=>{
                console.log(err);
                toast.error("Email send failed")
            })
        }
    }

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
                                <Link to="https://www.facebook.com/kmalaminstd">Facebook</Link>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/instagram.png" alt="" />
                            </div>
                            <div className="site_name">
                                <Link to="https://www.instagram.com/kmalaminwd/">Instagram</Link>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/twitter.png" alt="" />
                            </div>
                            <div className="site_name">
                                <Link to="https://x.com/KMALAMI61039121">X (twitter)</Link>
                            </div>
                        </div>

                        <div className="site">
                            <div className="site_image">
                                <img src="./image/github (1).png" alt="" />
                            </div>
                            <div className="site_name">
                                <Link to="github.com/kmalaminstd">Github</Link>
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
                                <Link to="mailto:alaminkhanstd@gmail.com">Gmail</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="contact_form">

                    <h4>Contact Form</h4>

                    <form ref={form} onSubmit={handleForm}>
                        {
                            dataErr && <p style={{color: 'red'}}>{dataErr}</p>
                        }
                        <input type="text" value={data.name} onChange={handleValue} name="name" placeholder="Enter your full name" />
                        <input type="text" name="subject" defaultValue="Contact from kmsite.netlify.app" hidden />
                        <input type="email" value={data.email} onChange={handleValue} name="email" placeholder="Enter your email (required)" required />
                        <textarea placeholder="Type your message (required)" value={data.message} onChange={handleValue} name="message" required></textarea>
                        <button>Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage