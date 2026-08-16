import { ArrowUpRight, Sparkles } from "lucide-react";
import "./Services.css";

const services = [
    {
        number: "01",
        title: "Hair",
        description:
            "Beautiful cuts, styling and treatments designed to bring out your best.",
        image: "/service-hair.jpg",
    },
    {
        number: "02",
        title: "Skin",
        description:
            "Thoughtful skincare experiences that leave you feeling fresh and radiant.",
        image: "/service-skin.jpg",
    },
    {
        number: "03",
        title: "Spa",
        description:
            "Relax, recharge and give yourself the care you truly deserve.",
        image: "/service-spa.jpg",
    },
];
function Services() {
    return (
        <section className="services" id="services">

            <div className="services-container">

                <div className="services-heading">

                    <div className="section-label">
                        <span></span>
                        OUR SERVICES
                    </div>

                    <div className="services-heading-row">

                        <h2>
                            Beauty designed
                            <em>around you.</em>
                        </h2>

                        <p>
                            From everyday self-care to unforgettable
                            occasions, discover services created to
                            make you feel your absolute best.
                        </p>

                    </div>

                </div>


                <div className="services-grid">

                    {services.map((service) => (
                        <article
                            className="service-card"
                            key={service.number}
                        >

                            <div className="service-image">
                                <img
                                    src={service.image}
                                    alt={`${service.title} service`}
                                />

                                <span className="service-number">
                                    {service.number}
                                </span>

                            </div>


                            <div className="service-content">

                                <div>
                                    <h3>{service.title}</h3>

                                    <p>
                                        {service.description}
                                    </p>
                                </div>

                                <a
                                    href="#booking"
                                    className="service-link"
                                >
                                    <ArrowUpRight size={19} />
                                </a>

                            </div>

                        </article>
                    ))}

                </div>


                <div className="bridal-service">

                    <div className="bridal-content">

                        <div className="bridal-label">
                            <Sparkles size={16} />
                            WILDROSE BRIDAL
                        </div>

                        <h3>
                            Your special day,
                            <em>beautifully unforgettable.</em>
                        </h3>

                        <p>
                            From elegant bridal makeup to complete
                            beauty preparation, let WildRose be part
                            of your most beautiful moments.
                        </p>

                        <a
                            href="#booking"
                            className="bridal-button"
                        >
                            Discover Bridal Experience
                            <ArrowUpRight size={18} />
                        </a>

                    </div>

                    <div className="bridal-image">
                        <img
                            src="/bridal.jpg"
                            alt="WildRose bridal beauty"
                        />
                    </div>

                </div>

            </div>

        </section>
    );
}

export default Services;