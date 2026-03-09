import "./ExperiencePage.css";

export const ExperiencePage = () => {
    const experiences = [
        { title: "CodeRush", role: "Full Stack Developer", date: "Feb 2026 - Present" },
        { title: "Gen AI (GeeksForGeeks)", role: "Learner", date: "Nov 2025" },
        { title: "Nobel Learning PBC", role: "Intern", date: "July 2025 - Oct 2025" },
        { title: "Leapfrog Technology", role: "Student Partner", date: "May 2025 - July 2025" },
        { title: "Code for Change", role: "Operation Lead", date: "Jan 2023 - Dec 2024" }
    ];

    return (
        <section id="experience">
            <div className="section-title-wrapper">
                <h2 className="section-title">Experience</h2>
            </div>
            <div className="experience-timeline">
                {experiences.map((exp, idx) => (
                    <div key={idx} className="experience-item">
                        <div className="exp-dot"></div>
                        <div className="exp-content">
                            <div className="exp-header">
                                <h3>{exp.title}</h3>
                                <span className="exp-date">{exp.date}</span>
                            </div>
                            <p className="exp-role">{exp.role}</p>
                            <button className="btn-link">View Certificate →</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
