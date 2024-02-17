import React, { useRef } from "react";
import "./Home.css";
import devzoniaLogo from "../../assets/images/devzonia_logo.webp";
import ptLogo from "../../assets/images/pt_logo.webp";
import ghLogo from "../../assets/images/gh-logo.gif";
import { projects } from "../../assets/data/projects";
import { skills } from "../../assets/data/skills";
import { toast } from "react-toastify";
import emailjs from "@emailjs/browser";
import resume from "../../assets/files/Abdulrahman's Resume.pdf";

function Home() {
 const form = useRef();
 const handleContact = (e) => {
  e.preventDefault();
  emailjs
   .sendForm(
    "service_vvsc6zn",
    "template_2nish6g",
    form.current,
    "EqCA2Js1g6Dl94zXh"
   )
   .then(
    (result) => {
     toast.success("Message Sent");
     e.target.reset();
    },
    (error) => {
     toast.error("error");
    }
   );
 };
 return (
  <div className="home">
   <section className="hero mt-5 d-flex justify-content-center align-items-center">
    <div className="container">
     <h1 className="text-md-center">
      Hi, I am <span>Abdulrahman Ali</span>
     </h1>
     <h2 className="text-md-center">A Front-End Developer</h2>
     <p className="mt-4">
      {/* <!-- A Very Active Programmer ,Always Ready To Learn New Things , And Very Fast At Learning Them!! -->
        <!-- I Love Programming And Learning New Technologies That Can Speed Up The Process --> */}
      Detail Oriented, I Love Programming, And i Like Creating Solid and
      Scalable Frontend Products With Great User Experience.
     </p>
     <div className="hero-contact d-flex justify-content-center pt-5 pb-5 gap-2 flex-wrap text-md-center">
      <a
       href="https://github.com/abdulrahmanali-dev"
       target="_blank"
       className="btn-with-img btn"
      >
       <i className="icon-github-circled"></i>
       <span> Github </span>
      </a>
      <a
       href="https://www.linkedin.com/in/abdulrahman-ali-bb960626a/"
       target="_blank"
       className="btn-with-img btn"
      >
       <i className="icon-linkedin-squared"></i>
       <span> Linkedin </span>
      </a>
      <a href={resume} target="_blank" className="btn-with-img btn">
       <i className="icon-doc-text"></i>
       <span> Resume </span>
      </a>
     </div>
    </div>
   </section>
   <h2 className="text-center m-0 fw-bold">
    Worked With <br />
   </h2>
   <section className="companies">
    <img src={devzoniaLogo} alt="Devzonia Logo" />
    <img src={ptLogo} alt="Property Turkey Logo" />
    <img src={ghLogo} alt="Growth Hacker Logo" />
   </section>
   <div className="year">Years of Experiens: 1+</div>
   <section className="skills" id="skills">
    <div className="container">
     <h2 className="heading">Skills</h2>
     <div className="skills-box ">
      {skills.map((skill, key) => (
       <div className="skill">
        <img src={skill.imgUrl} width="30" alt={skill.name} />
        <span>{skill.name}</span>
       </div>
      ))}
      <div className="skill">
       <span>Comming Soon</span>
      </div>
     </div>
    </div>
   </section>
   <section className="projects" id="projects">
    <div className="container">
     <h2 className="heading">Projects</h2>
     <div className="row justify-content-center mt-5 gap-4">
      {projects.map((proj, key) => (
       <div className="col-12 col-md-4 project-card">
        <img className="card-img-top" src={proj.imgUrl} alt="Card image cap" />
        <div className="card-body">
         <h5 className="card-title">{proj.name}</h5>
         <div className="card-text">
          <p>{proj.desc}</p>
         </div>
         <ul className="m-0 justify-content-center gap-2 d-flex list-unstyled">
          {proj.tech.map((t) => (
           <li className={t}>{t}</li>
          ))}
         </ul>
        </div>
        <div className="btn-container card-body d-flex justify-content-center gap-3 text-md-center">
         <a href={proj.link} target="_blank" className="btn-with-img btn">
          <i className="icon-link-ext"></i>
          <span> Demo </span>
         </a>
         <a href={proj.source} target="_blank" className="btn-with-img btn">
          <i className="icon-github-circled"></i>
          <span> Source </span>
         </a>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>
   <section className="contact" id="contact">
    <div className="container">
     <h2 className="heading">Contact</h2>
     <div className="row justify-content-center">
      <div className="contact-info col-12 col-md-6 col-lg-4">
       <h3>Lets Get In Touch</h3>
       <p>
        Fill this Form Right Here And I will Get Back To You As Fast As Posible,
        Thanks
       </p>
       <h5>My email</h5>
       <a href="mailto:someone@example.com">abdulrahman.ali6666@gmail.com</a>
       <div className="social">
        <h5>You Can Find Me At:</h5>
        <a href="https://github.com/abdulrahmanali-dev  " target="_blank">
         <i className="icon-github-circled ms-0"></i>
        </a>
        <a href="https://twitter.com/_abdulrahmnali" target="_blank">
         <i className="icon-twitter"></i>
        </a>
        <a
         href="https://www.linkedin.com/in/abdulrahman-ali-bb960626a/"
         target="_blank"
        >
         <i className="icon-linkedin-squared"></i>
        </a>
        <a href="https://www.instagram.com/abdulrahmanalilead/" target="_blank">
         <i className="icon-instagram"></i>
        </a>
       </div>
      </div>
      <form
       ref={form}
       onSubmit={handleContact}
       className="col-12 col-md-6 col-lg-4 d-flex flex-column"
      >
       <label for="name">Full Name</label>
       <input type="text" placeholder="Full Name" name="user_name" required />
       <label for="email">Email</label>
       <input type="email" placeholder="Email" name="user_email" required />
       <label for="message">Message</label>
       <textarea
        name="message"
        required
        placeholder="I Would Like To Discuss Some Stuff"
        id=""
        cols="10"
        rows="10"
       ></textarea>
       <button type="submit" className="btn">
        Submit
       </button>
      </form>
     </div>
    </div>
   </section>
  </div>
 );
}
export default Home;
