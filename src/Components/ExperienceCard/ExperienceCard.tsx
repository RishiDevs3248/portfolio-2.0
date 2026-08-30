import React, { useState } from 'react'
import "./ExperienceCard.css"
type ExperienceCardProps = {
    companyName: string,
    role: string,
    time: string,
    desc: string
}

export default function ExperienceCard(props: ExperienceCardProps) {

    const { companyName, role, time, desc } = props

    const [showDesc, setShowDesc] = useState(false);

    return (
        <div className='exp-card-container' onClick={() => { setShowDesc(!showDesc) }}>
            <div className="side-line"></div>
            <div className="main-card">
                <div className="always-display" >
                    <div className="exp-top">
                        <div className="companyName">{companyName}</div>
                        <div className="time">{time}</div>
                    </div>
                    <div className="role">{role}</div>
                </div>
                {showDesc && <div className="card-desc">{desc}</div>}
            </div>
        </div>
    )
}
