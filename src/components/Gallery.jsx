import { ArrowUpRight } from "lucide-react";
import "./Gallery.css";

const galleryImages = [
    {
        image: "/gallery-1.png",
        title: "The WildRose Space",
        category: "Our Salon",
        className: "gallery-large",
    },
    {
        image: "/gallery-2.jpg",
        title: "Beauty Rituals",
        category: "Self Care",
        className: "gallery-tall",
    },
    {
        image: "/gallery-3.jpg",
        title: "Beautiful Details",
        category: "The Experience",
        className: "gallery-wide",
    },
    {
        image: "/gallery-4.jpg",
        title: "Bridal Beauty",
        category: "Bridal",
        className: "gallery-small",
    },
];

function Gallery() {
    return (
        <section className="gallery" id="gallery">

            <div className="gallery-container">

                <div className="gallery-heading">

                    <div className="section-label">
                        <span></span>
                        THE WILDROSE EXPERIENCE
                    </div>

                    <div className="gallery-heading-row">

                        <h2>
                            Beauty in every
                            <em>little detail.</em>
                        </h2>

                        <a href="#contact" className="gallery-view-link">
                            Visit WildRose
                            <ArrowUpRight size={18} />
                        </a>

                    </div>

                </div>


                <div className="gallery-grid">

                    {galleryImages.map((item) => (
                        <div
                            className={`gallery-item ${item.className}`}
                            key={item.image}
                        >

                            <img
                                src={item.image}
                                alt={item.title}
                            />

                            <div className="gallery-overlay">

                                <div>
                                    <span>{item.category}</span>
                                    <h3>{item.title}</h3>
                                </div>

                                <div className="gallery-arrow">
                                    <ArrowUpRight size={20} />
                                </div>

                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Gallery;