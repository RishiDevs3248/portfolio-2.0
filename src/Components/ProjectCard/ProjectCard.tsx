import "./ProjectCard.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from "react"

gsap.registerPlugin(ScrollTrigger)

type projectType = {
    image: string,
    prjName: string,
    description: string,
    skill: Array<string>
}

export default function ProjectCard(props: projectType) {

    const cardRef = useRef<HTMLDivElement>(null)

    useGSAP(() => {

        const card = cardRef.current

        if (!card) return

        const skills = card.querySelectorAll(".skill")

        gsap.from(skills, {
            y: 10,
            opacity: 0,
            duration: 0.4,
            stagger: 0.08,
            ease: "power2.out",
            scrollTrigger: {
                trigger: card,
                start: "top 20%",
            }
        })

    }, { scope: cardRef })

    return (
        <div ref={cardRef} className='prj-card-container'>
            <img className='prjImage' src={props.image} alt={props.prjName} />

            <div className='prjName'>{props.prjName}</div>

            <div className='prjDesc'>{props.description}</div>

            <div className='skilssContainer'>
                {props.skill.map((skill, idx) => {
                    return <span className='skill' key={idx}>{skill}</span>
                })}
            </div>
        </div>
    )
}