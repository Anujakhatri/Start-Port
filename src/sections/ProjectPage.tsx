import "./ProjectPage.css";

export const ProjectPage = () => {
    const projects = [
        {
            title: "Bookshelf",
            description: "A digital space for managing and organizing your personal library with ease.",
            tags: ["React", "Python", "PostgreSQL", "Machine Learning", "OpenAI API"]
        },
        {
            title: "Custom Rate Limiter",
            description: "Integrated with URL shortening to protect resources from excessive traffic(5 requests per minutes).",
            tags: ["React", "Node.js", "Express.js", "SQLite", "BASE62", "Encoding"]
        },
        {
            title: "LinkedIn Generator Post",
            description: "An AI-powered tool to help creators generate engaging content for LinkedIn.",
            tags: ["python", "Streamlit", "LangChain"]
        }
    ];

    return (
        <section id="projects">
            <div className="section-title-wrapper">
                <h2 className="section-title">Personal Projects</h2>
            </div>
            <div className="projects-grid">
                {projects.map((project, idx) => (
                    <div key={idx} className="project-card">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map((tag, tIdx) => (
                                    <span key={tIdx}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
