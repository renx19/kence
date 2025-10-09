"use client"

import { AnimatePresence, motion } from "motion/react"
import { useState, useEffect } from "react"
import "../styles/invitation.css"

interface InvitationProps {
    onOpen: () => void
}

const WEDDING_DATE = new Date("2025-12-25T15:00:00")

export default function Invitation({ onOpen }: InvitationProps) {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    })
    const [isVisible, setIsVisible] = useState(true)

    // Countdown timer
    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = WEDDING_DATE.getTime() - now

            if (distance < 0) {
                clearInterval(interval)
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
                return
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)

            setTimeLeft({ days, hours, minutes, seconds })
        }, 1000)

        return () => clearInterval(interval)
    }, [])

    const handleOpen = () => {
        setIsVisible(false) // trigger exit animation
        setTimeout(() => onOpen(), 600) // match duration
    }

    return (
        <div className="invitation-container">
            <AnimatePresence initial={false}>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="invitation-card-wrapper"
                    >
                        <div className="invitation-ribbon-container">
                            <img src="/ribbon.jpg" alt="Wedding Ribbon" />
                        </div>
                        <div className="invitation-card">
                            <div className="invitation-card-content">
                                <h1>We’re Getting Married!</h1>
                                <p>You are warmly invited to celebrate our special day</p>
                                <div className="countdown">
                                    <span>{timeLeft.days}d</span>:
                                    <span>{timeLeft.hours}h</span>:
                                    <span>{timeLeft.minutes}m</span>:
                                    <span>{timeLeft.seconds}s</span>
                                </div>
                                <button onClick={handleOpen}>Open Invitation</button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
