import './Home.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ProjectCard from '../ProjectCard/ProjectCard';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


export default function Home() {

  const year = new Date().getFullYear();
  const bornYear = 2004;
  const age = year - bornYear

  const expObj = [
    {
      companyName: "Qualitia Software",
      role: "Junior Software Developer",
      time: "13 Nov 2025 - Present",
      projects: [
        {
          projectName: "Salesforce Integration",
          desc: [
            "Researched and developed support for Salesforce custom components, including LWC, Aura, and Visualforce, taking the feature from R&D to implementation.",
            "Worked with Salesforce REST API and Bulk API, using SOQL queries to retrieve and process the required Salesforce data.",
            "Built parsers for all three component types to extract the required data directly from their source code.",
            "Optimized the processing logic by reducing time complexity, resulting in a 68.2% average reduction in processing time across the repository."
          ]
        },
        {
          projectName: "Electron App & Engine",
          desc: [
            "Developed a private-key-based login feature for Salesforce to automate authentication and reduce manual multi-factor authentication (MFA) steps during the login process.",
            "Used Private key to generate JWT token and exchange it with Salesforce for an access token."
          ]
        },
        {
          projectName: "Web Recorder & Web Object Spy",
          desc: [
            "Automated the connection between the web extension and Electron app, eliminating the need for manual connection/setup.",
            "Implemented logic to detect whether the web extension is installed and automatically establish the connection when available, otherwise notify users about the missing extension and guide them through the installation process."
          ]
        }
      ]
    },
    {
      companyName: "Techspawn Solutions",
      role: "ERP Developer Intern",
      time: "4 Nov 2024 - 6 Feb 2025",
      projects: [
        {
          projectName: "Okio",
          desc: [
            "Designed and customized the Odoo website for this project, implementing responsive UI with XML and CSS to enhance user interaction.",
            "Optimized the website layout and improved navigation for a seamless experience."
          ]
        },
        {
          projectName: "Escarra",
          desc: [
            "Worked on Odoo ERP customization, enhancing module functionalities to streamline business operations.",
            "Focused on improving system workflows, UI enhancements, and module optimizations."
          ]
        }
      ]
    }
  ];

  const prjObj = [
    {
      image: "./images/prj ref.png",
      prjName: "Prj name",
      goto: "link",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/prj ref.png",
      prjName: "Prj name",
      goto: "link",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/prj ref.png",
      prjName: "Prj name",
      goto: "link",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/prj ref.png",
      prjName: "Prj name",
      goto: "link",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
  ]

  const skillsList: Array<string> = [
    "React.js",
    "Express.js",
    "REST APIs",
    "Node.js",
    "Salesforce Integration",
    "JavaScript",
    "TypeScript",
    "Java",
    "GSAP",
    "Tailwind CSS",
    "CSS",
    "HTML",
    "MySQL",
    "MongoDB",
    "VS Code",
    "Git",
    "Postman",
    "Docker"
  ];

  useGSAP(() => {
    const tl = gsap.timeline();


    tl.from(".name-container", {
      y: 10,
      opacity: 0,
      duration: 0.3,
      stagget: 0.2,
    }, "start")

    tl.from(".hero-left", {
      opacity: 0,
      duration: 0.3,
    }, "start")

      .from(".text-container-text1", {
        y: 10,
        opacity: 0,
        duration: 0.3,
        stagget: 0.2
      })

      .from(".text-container-text2", {
        y: 10,
        opacity: 0,
        duration: 0.3,
        stagget: 0.2
      })

    gsap.from(".skills-container-parent .skill", {
      y: 15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.06,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".skills-container-parent",
        start: "top 80%",
      }
    })

    gsap.from(".contacts-container-parent .contact", {
      y: 15,
      opacity: 0,
      duration: 0.5,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: ".contacts-container-parent",
        start: "top 75%",
      }
    })

  })


  return (
    <div className='homePageParent'>
      <div className='home-container'>
        <div className="home-hero-container">
          <div className="hero-left">
            <img src="/images/Porfolio_profile_image.png" alt="Profile image" />
          </div>

          <div className="hero-right">
            <div className='name-container'>Hi, I am <span>Hrishikesh Alabnur</span></div>
            <div className="text-container">
              <div className="text-container-text text-container-text1"><span>{age} years old</span> from <span>Pune, India</span></div>
              <div className="text-container-text text-container-text2">Working as <span>Junior Software Engineer</span> at Qualitia Software, <span>Full Stack Web Developer</span> by passion</div>
            </div>
          </div>

        </div>
      </div>


      <div className='exp-container'>
        <div className="top-border"></div>
        <div className="exp-box-container">
          <div className='exp-button'>Experience</div>

          <div className='exp exp-container'>
            {expObj.map((company) => {
              return <ExperienceCard key={company.companyName + company.role} {...company} ></ExperienceCard>
            })}
          </div>
        </div>
      </div>

      <div className='exp-container'>
        <div className="top-border"></div>
        <div className="exp-box-container">
          <div className='exp-button'>Projects</div>
          <div className='exp prj-container'>
            {prjObj.map((prj, idx) => {
              return <ProjectCard key={idx} {...prj} ></ProjectCard>
            })}
          </div>
        </div>
      </div>



      <div className="skills-container-parent">
        <div className="top-border"></div>
        <div className="skills-container">
          <div className="skills-heading">Skills</div>
          <div className="skill-container">
            {skillsList.map((skill, idx) => {
              return <span className='skill' key={idx}>{skill}</span>
            })}
          </div>
        </div>
      </div>


      <div className="contacts-container-parent">
        <div className="top-border"></div>
        <div className="contact-container">
          <div className="contact-heading">Contact</div>
          <div className="contact-container">
            <div className="contact">Mobile : <span>9307076748</span></div>
            <div className="contact">Email : <span>hrishikesh3248@gmail.com</span></div>
            <div className="contact">Visit : <span><a target='_blank' href='https://www.linkedin.com/in/hrishikesh-alabnur-407269233/'>Linkedin</a></span></div>
            <div className="contact">Visit : <span><a target='_blank' href='https://github.com/RishiDevs3248'>Github</a></span></div>
            <div className="contact">Visit : <span><a target='_blank' href='https://leetcode.com/u/Hrishikesh_3248/'>LeetCode</a></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}