import { ArrowUpRight, Sparkles } from "lucide-react";
import "./Hero.css";

function Hero() {
    return (
        <section className="hero">

            <div className="hero-container">

                <div className="hero-content">

                    <div className="hero-label">
                        <Sparkles size={16} />
                        <span>BEAUTY • SALON • SPA</span>
                    </div>

                    <h1>
                        Your Beauty,
                        <span>Your Moment.</span>
                    </h1>

                    <p className="hero-description">
                        Discover a premium beauty experience where
                        elegance, confidence and self-care come together.
                    </p>

                    <div className="hero-buttons">

                        <a href="#booking" className="hero-primary-btn">
                            Book an Appointment
                            <ArrowUpRight size={18} />
                        </a>

                        <a href="#services" className="hero-secondary-btn">
                            Explore Services
                        </a>

                    </div>

                    <div className="hero-info">
                        <div>
                            <strong>10+</strong>
                            <span>Beauty Services</span>
                        </div>

                        <div className="hero-divider"></div>

                        <div>
                            <strong>100%</strong>
                            <span>Personal Care</span>
                        </div>
                    </div>

                </div>

                <div className="hero-image-wrapper">

                    <div className="hero-image">
                        <img
                            src="/hero-salon.png"
                            alt="WildRose beauty salon"
                        />
                    </div>

                    <div className="hero-floating-card">
                        <span className="floating-star">✦</span>

                        <div>
                            <strong>Feel Beautiful.</strong>
                            <p>Feel WildRose.</p>
                        </div>
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Hero;