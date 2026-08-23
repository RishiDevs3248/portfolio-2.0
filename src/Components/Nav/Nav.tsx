import React from 'react'
import "./Nav.css"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

export default function Nav() {

    useGSAP(() => {

        const buttons = document.querySelectorAll(".nav-button")

        gsap.set(buttons, {
            color: "var(--unfocused-text)"
        })

        gsap.set(buttons[0], {
            color: "var(--focused-text)"
        })

        buttons.forEach((button) => {

            button.addEventListener("click", () => {

                gsap.to(buttons, {
                    color: "var(--unfocused-text)",
                    duration: 0.3
                })

                gsap.to(button, {
                    color: "var(--focused-text)",
                    duration: 0.3
                })

            })

        })

    })

    return (
        <div id='nav-main-container'>
            <div id='nav-container'>
                <div className="nav-button">Home</div>
                <div className="nav-button">Contact</div>
                <div className="nav-button">Resume</div>
            </div>
        </div>
    )
}