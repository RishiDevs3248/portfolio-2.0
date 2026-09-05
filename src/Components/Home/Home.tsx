import './Home.css'
import ExperienceCard from '../ExperienceCard/ExperienceCard';
import ProjectCard from '../ProjectCard/ProjectCard';

export default function Home() {

  const year = new Date().getFullYear();
  const bornYear = 2004;
  const age = year - bornYear
  const expObj = [
    {
      companyName: "Qualitia Software",
      role: "Junior Software Engineer",
      time: "13 Nov 2025 - Present",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
    },
    {
      companyName: "Techspawn Solutions",
      role: "ERP Developer Intern",
      time: "4 Nov 2024 – 6 Feb 2025",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software like Aldus PageMaker and Microsoft Word including versions of Lorem Ipsum."
    },
  ]
  const prjObj = [
    {
      image: "./images/Porfolio_profile_image.png",
      prjName: "Prj name",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/Porfolio_profile_image.png",
      prjName: "Prj name",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/Porfolio_profile_image.png",
      prjName: "Prj name",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
    {
      image: "./images/Porfolio_profile_image.png",
      prjName: "Prj name",
      description: "description description description description description description",
      skill: ["React.js", "Node.js", "Express.js"]
    },
  ]
  const skillsList: Array<string> = ["React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js", "React.js", "Node.js", "Express.js"];

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
            {prjObj.map((prj) => {
              return <ProjectCard key={prj.prjName} {...prj} ></ProjectCard>
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
            <div className="contact">Visit : <span><a href='https://www.linkedin.com/in/hrishikesh-alabnur-407269233/'>Linkedin</a></span></div>
            <div className="contact">Visit : <span><a href='https://github.com/RishiDevs3248'>Github</a></span></div>
            <div className="contact">Visit : <span><a href='https://leetcode.com/u/Hrishikesh_3248/'>LeetCode</a></span></div>
          </div>
        </div>
      </div>
    </div>
  )
}
