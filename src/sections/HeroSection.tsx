import { useEffect, useState } from "react";
import "./HeroSection.css";

export const HeroSection = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const roles = ["Full Stack Developer", "ML & AI Enthusiast"];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 2000;

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[roleIndex];
            if (isDeleting) {
                setDisplayText(prev => prev.slice(0, -1));
                if (displayText === "") {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % roles.length);
                }
            } else {
                setDisplayText(currentRole.slice(0, displayText.length + 1));
                if (displayText === currentRole) {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            }
        };

        const timer = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );

        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, roles]);

    return (
        <section id="home" className="hero-section">
            <div className="hero-content">
                <span className="greeting">Hi 👋 I am Anuja Khatri,</span>
                <div className="role-container">
                    <span className="role-text">{displayText}</span>
                    <span className="cursor">|</span>
                </div>
                <p className="hero-description">
                    Computer Engineering graduate and Full Stack Developer with experience building end-to-end scalable web
                    applications and exploring the frontiers of AI/ML.
                </p>

                <div className="btn-group">
                    <button className="btn btn-primary">Connect with me ⚡</button>
                    <button className="btn btn-outline">Download Resume 📄</button>
                </div>
            </div>
            <div className="hero-image-container">
                <div className="image-border">
                    <img src="/profile.png" alt="Anuja Khatri" className="profile-img" />
                </div>
            </div>
        </section>
    );
};
