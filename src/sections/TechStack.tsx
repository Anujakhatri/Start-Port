import "./TechStack.css";

export const TechStack = () => {
    const techStacks = [
        { title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript"] },
        { title: "Backend", skills: ["Node.js", "Express", "Python", "FastAPI"] },
        { title: "Database", skills: ["PostgreSQL", "SQLite"] },
        { title: "Tools & ML", skills: ["Git", "Docker", "Appwrite", "Postman", "Machine Learning", "Scikit-Learn"] }
    ];

    return (
        <section id="tech-stack">
            <div className="section-title-wrapper">
                <h2 className="section-title">Tech Stack</h2>
            </div>
            <div className="tech-grid">
                {techStacks.map((cat, idx) => (
                    <div key={idx} className="tech-category">
                        <h3>{cat.title}</h3>
                        <ul className="tech-list">
                            {cat.skills.map((skill, sIdx) => (
                                <li key={sIdx}>{skill}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
};
