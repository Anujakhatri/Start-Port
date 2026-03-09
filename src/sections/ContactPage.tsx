import "./ContactPage.css";

export const ContactPage = () => {
    return (
        <section id="contact">
            <div className="section-title-wrapper">
                <h2 className="section-title">Get In Touch</h2>
            </div>
            <div className="contact-grid">
                <form className="contact-form">
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" placeholder="Your name" />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Email address" />
                    </div>
                    <div className="form-group">
                        <label>Message</label>
                        <textarea placeholder="How can I help you?" rows={5}></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
                <div className="contact-details">
                    <div className="detail-item">
                        <h3>Email</h3>
                        <p>khatrianuja20@gmail.com</p>
                    </div>
                    <div className="detail-item">
                        <h3>Linkedln</h3>
                        <p>link here</p>
                    </div>
                    <div className="detail-item">
                        <h3>GitHub</h3>
                        <p>link here</p>
                    </div>
                    <div className="detail-item">
                        <h3>Twitter</h3>
                        <p>link here</p>
                    </div>
                </div>
            </div>
        </section>
    );
};
