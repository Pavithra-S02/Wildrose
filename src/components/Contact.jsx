import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import "./Contact.css";

function Contact() {
    return (
        <footer className="contact" id="contact">

            <div className="contact-container">

                <div className="contact-hero">

                    <div className="section-label contact-label">
                        <span></span>
                        COME VISIT US
                    </div>

                    <h2>
                        Your beauty story
                        <em>starts here.</em>
                    </h2>

                    <p>
                        Have a question, want to book an appointment,
                        or simply want to know more about WildRose?
                        We'd love to hear from you.
                    </p>

                    <a
                        href="#booking"
                        className="contact-button"
                    >
                        Book an Appointment
                        <ArrowUpRight size={18} />
                    </a>

                </div>

                <div className="contact-info-grid">

                    <div className="contact-info">

                        <div className="contact-icon">
                            <MapPin size={19} />
                        </div>

                        <div>
                            <span>VISIT US</span>

                            <p>
                                WildRose Beauty Studio
                                <br />
                                Chennai, Tamil Nadu
                            </p>
                        </div>

                    </div>

                    <div className="contact-info">

                        <div className="contact-icon">
                            <Phone size={19} />
                        </div>

                        <div>
                            <span>CALL US</span>

                            <p>
                                +91 98765 43210
                                <br />
                                Mon - Sat, 9 AM - 8 PM
                            </p>
                        </div>

                    </div>

                    <div className="contact-info">

                        <div className="contact-icon">
                            <Mail size={19} />
                        </div>

                        <div>
                            <span>EMAIL US</span>

                            <p>
                                hello@wildrose.com
                                <br />
                                We reply within 24 hours
                            </p>
                        </div>

                    </div>

                </div>


                {/* FOOTER */}

                <div className="footer">

                    <div className="footer-brand">

                        <a
                            href="#contact"
                            className="footer-logo"
                        >
                            WILD<span>ROSE</span>
                        </a>

                        <p>
                            Beauty, care & confidence.
                        </p>

                    </div>


                    <div className="footer-links">

                        <a href="#about">About</a>

                        <a href="#services">Services</a>

                        <a href="#gallery">Gallery</a>

                        <a href="#booking">Book Now</a>

                    </div>


                    <div className="footer-social">

                        <a
                            href="#"
                            aria-label="Instagram"
                        >
                            Instagram
                        </a>

                    </div>

                </div>


                <div className="footer-bottom">

                    <span>
                        © 2026 WildRose Beauty Studio.
                        All rights reserved.
                    </span>

                    <span>
                        Made with care.
                    </span>

                </div>

            </div>

        </footer>
    );
}

export default Contact;

