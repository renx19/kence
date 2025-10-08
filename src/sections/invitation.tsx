import React, { useState, useEffect } from "react";
import "../styles/invitation.css";

interface InvitationProps {
    onOpen: () => void;
}

// Set your wedding date here
const WEDDING_DATE = new Date("2025-12-25T15:00:00");

const Invitation: React.FC<InvitationProps> = ({ onOpen }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = WEDDING_DATE.getTime() - now;

            if (distance < 0) {
                clearInterval(interval);
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setTimeLeft({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="invitation-container">
            {/* Ribbon container */}
            <div className="invitation-ribbon-container">
                <img src="/ribbon.jpg" alt="Wedding Ribbon" />
            </div>

            {/* Main invitation card */}
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
                    <button onClick={onOpen}>Open Invitation</button>
                </div>
            </div>
        </div>

    );
};

export default Invitation;
