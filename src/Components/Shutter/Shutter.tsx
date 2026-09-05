import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import './Shutter.css';
import { useEffect, useState } from 'react';

export default function Shutter() {
    const [progressCounter, setProgressCounter] = useState("000");

    const sutterSentanceArray: string[] = [
        "FROM IDEA",
        "TO CODE",
        "TO PRODUCT"
    ];

    const [currentText, setCurrentText] = useState(
        sutterSentanceArray[0]
    );

    useEffect(() => {
        document.documentElement.style.overflow = "hidden";
        document.body.style.overflow = "hidden";

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    }, []);

    useEffect(() => {
        let itrator = 0;
        const interval = setInterval(() => {
            itrator++;
            if (itrator >= sutterSentanceArray.length) {
                clearInterval(interval);
                return;
            }
            setCurrentText(sutterSentanceArray[itrator])
        }, 750)
        return () => clearInterval(interval);
    }, [])

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.to(
            ".shutter-progress-bar-focus",
            {
                width: "100%",
                duration: 2.25,
                ease: "none",
            },
            "progress"
        );

        tl.to(
            { value: 0 },
            {
                value: 100,
                duration: 2.25,
                ease: "none",

                onUpdate: function () {
                    setProgressCounter(
                        Math.floor(this.targets()[0].value)
                            .toString()
                            .padStart(3, "0")
                    );
                }
            },
            "progress"
        );

        tl.addLabel("cinematic", 2.25);

        tl.from(
            ".shutter-cenimatic-bg-top",
            {
                y: "-100%",
                duration: 1.5,
                ease: "power4.out"
            },
            "cinematic"
        );

        tl.from(
            ".shutter-cenimatic-bg-bottom",
            {
                y: "100%",
                duration: 1.5,
                ease: "power4.out"
            },
            "cinematic"
        );

        tl.to(".shutter-gate", {
            opacity: 0,
            duration: 0.3,
        });

        tl.to(
            ".shutter-container",
            {
                backgroundColor: "transparent",
                duration: 0.3,
            },
            "<"
        );

        tl.addLabel("cinematic-off");

        tl.to(
            ".shutter-cenimatic-bg-top",
            {
                y: "-100%",
                duration: 1.5,
                ease: "power4.out"
            },
            "cinematic-off"
        );

        tl.to(
            ".shutter-cenimatic-bg-bottom",
            {
                y: "100%",
                duration: 1.5,
                ease: "power4.out"
            },
            "cinematic-off"
        );

        tl.set(".shutter-container", {
            display: "none",

            onComplete: () => {
                document.documentElement.style.overflow = "";
                document.body.style.overflow = "";
            }
        });

        return () => {
            document.documentElement.style.overflow = "";
            document.body.style.overflow = "";
        };
    });

    return (
        <div className="shutter-container">

            <div className="shutter-cenimatic-bg shutter-cenimatic-bg-top"></div>

            <div className="shutter-gate">

                <div className="shutter-text">
                    {currentText}
                </div>

                <div className="shutter-loading-bar">

                    <div className="shutter-progress-bar">
                        <div className="shutter-progress-bar-focus"></div>
                    </div>

                    <div className="shutter-progress-number">
                        {progressCounter}
                    </div>

                </div>

            </div>

            <div className="shutter-cenimatic-bg shutter-cenimatic-bg-bottom"></div>

        </div>
    );
}