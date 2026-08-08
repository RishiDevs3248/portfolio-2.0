import React, { useEffect, useState } from 'react'
import './Shutter.css'

export default function Shutter() {

    const sutterSentanceArray: string[] = ["FROM IDEA", "TO CODE", "TO PRODUCT"];
    const [currentText, setCurrentText] = useState(sutterSentanceArray[0])

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



    return (
        <div className='shutter-container'>
            <div className='shutter-cenimatic-bg shutter-cenimatic-bg-top'></div>
            <div className='shutter-gate'>
                <div className='shutter-text'>
                    {currentText}
                </div>
                <div className='shutter-loading-bar'>
                    <div className='shutter-progress-bar'></div>
                </div>
            </div>
            <div className='shutter-cenimatic-bg shutter-cenimatic-bg-bottom'></div>
        </div>
    )
}
