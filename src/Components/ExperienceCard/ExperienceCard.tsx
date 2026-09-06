import "./ExperienceCard.css";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type ExperienceCardProps = {
    companyName: string,
    role: string,
    time: string,
    desc: string
}

export default function ExperienceCard(props: ExperienceCardProps) {

    const { companyName, role, time, desc } = props;

    const cardRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {

        const card = cardRef.current;
        const roleElement = card?.querySelector(".role");

        if (!card || !roleElement) return;

        gsap.set(roleElement, {
            y: 8,
            opacity: 0
        });

        ScrollTrigger.create({
            trigger: card,
            start: "top 60%",
            end: "top 25%",

            onToggle: () => {

                gsap.to(roleElement, {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });

            }
        });

    }, { scope: cardRef });

    return (
        <div
            ref={cardRef}
            className='exp-card-container'
        >
            <div className="side-line"></div>

            <div className="main-card">

                <div className="always-display">

                    <div className="exp-top">
                        <div className="companyName">
                            {companyName}
                        </div>

                        <div className="time">
                            {time}
                        </div>
                    </div>

                    <div className="role">
                        {role}
                    </div>

                </div>

                <div className="card-desc">
                    {desc}
                </div>

            </div>

        </div>
    )
}