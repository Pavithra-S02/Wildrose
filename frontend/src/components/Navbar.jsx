import { Heart, Menu } from "lucide-react";
import "./Navbar.css";

function Navbar() {
    return (
        <header className="navbar">
            <div className="navbar-container">

                <a href="/" className="logo">
                    <span className="logo-icon">✦</span>
                    <span className="logo-text">WILDROSE</span>
                </a>

                <nav className="nav-links">
                    <a href="/">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#gallery">Gallery</a>
                    <a href="#contact">Contact</a>
                </nav>

                <div className="nav-actions">
                    <button className="heart-btn" aria-label="Favorites">
                        <Heart size={19} />
                    </button>

                    <a href="#booking" className="book-btn">
                        Book Appointment
                    </a>

                    <button className="menu-btn" aria-label="Open menu">
                        <Menu size={24} />
                    </button>
                </div>

            </div>
        </header>
    );
}

export default Navbar;