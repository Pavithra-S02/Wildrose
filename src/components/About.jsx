import { ArrowUpRight, Sparkles } from "lucide-react";
import "./About.css";

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                <div className="about-images">

                    <div className="about-main-image">
                        <img
                            src="/about-detail.jpg"
                            alt="WildRose salon experience"
                        />
                    </div>

                    <div className="about-small-image">
                        <img
                            src="/about-salon.jpg"
                            alt="WildRose beauty detail"
                        />
                    </div>

                    <div className="about-badge">
                        <Sparkles size={18} />
                        <span>BEAUTY<br />REDEFINED</span>
                    </div>

                </div>


                <div className="about-content">

                    <div className="section-label">
                        <span></span>
                        ABOUT WILDROSE
                    </div>

                    <h2>
                        Where beauty
                        <em>becomes an experience.</em>
                    </h2>

                    <p className="about-intro">
                        At WildRose, we believe beauty is more than
                        looking good. It's about feeling confident,
                        cared for and completely yourself.
                    </p>

                    <p className="about-text">
                        From everyday self-care to your most important
                        moments, our team creates a personalised beauty
                        experience designed around you. Every detail,
                        every service and every visit is thoughtfully
                        crafted with care.
                    </p>

                    <div className="about-stats">

                        <div className="about-stat">
                            <strong>10+</strong>
                            <span>Signature<br />Services</span>
                        </div>

                        <div className="about-stat">
                            <strong>100%</strong>
                            <span>Personalised<br />Care</span>
                        </div>

                        <div className="about-stat">
                            <strong>∞</strong>
                            <span>Beautiful<br />Moments</span>
                        </div>

                    </div>

                    <a href="#services" className="about-link">
                        Discover Our Story
                        <ArrowUpRight size={18} />
                    </a>

                </div>

            </div>

        </section>
    );
}

export default About;