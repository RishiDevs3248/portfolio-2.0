import React from 'react'
import "./ProjectCard.css"

type projectType = {
    image: string,
    prjName: string,
    description: string,
    skill: Array<string>
}

export default function ProjectCard(props: projectType) {
    return (
        <div className='prj-card-container'>
            <img className='prjImage' src={props.image} alt={props.prjName} />

            <div className='prjName'>{props.prjName}</div>
            <div className='prjDesc'>{props.description}</div>
            <div className='skilssContainer'>
                {props.skill.map((skill, idx)=>{
                    return <span className='skill' key={idx}>{skill}</span>
                })}
            </div>
        </div>
    )
}
