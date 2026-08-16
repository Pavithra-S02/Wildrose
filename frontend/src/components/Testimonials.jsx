import { ArrowLeft, ArrowRight, Quote, Star } from "lucide-react";
import "./Testimonials.css";

const testimonials = [
    {
        quote:
            "WildRose completely changed the way I feel about salon visits. The atmosphere is beautiful and the attention to detail is incredible.",
        name: "Ananya",
        service: "Hair & Styling",
    },
    {
        quote:
            "From the moment I walked in, everything felt so calm and personalised. I left feeling confident, refreshed and genuinely happy.",
        name: "Meera",
        service: "Skin & Spa",
    },
    {
        quote:
            "I chose WildRose for my special occasion and they understood exactly what I wanted. Every little detail was perfect.",
        name: "Nisha",
        service: "Bridal Beauty",
    },
];

function Testimonials() {
    return (
        <section className="testimonials" id="testimonials">

            <div className="testimonials-container">

                <div className="testimonials-heading">

                    <div className="section-label">
                        <span></span>
                        KIND WORDS
                    </div>

                    <h2>
                        Loved by
                        <em>beautiful people.</em>
                    </h2>

                    <div className="rating">

                        <div className="stars">
                            <Star size={15} fill="currentColor" />
                            <Star size={15} fill="currentColor" />
                            <Star size={15} fill="currentColor" />
                            <Star size={15} fill="currentColor" />
                            <Star size={15} fill="currentColor" />
                        </div>

                        <span>5.0 • WildRose Experience</span>

                    </div>

                </div>


                <div className="testimonial-card">

                    <div className="quote-icon">
                        <Quote size={28} />
                    </div>

                    <div className="testimonial-content">

                        <p className="testimonial-quote">
                            "{testimonials[0].quote}"
                        </p>

                        <div className="testimonial-author">

                            <div className="author-avatar">
                                {testimonials[0].name.charAt(0)}
                            </div>

                            <div>
                                <strong>
                                    {testimonials[0].name}
                                </strong>

                                <span>
                                    {testimonials[0].service}
                                </span>
                            </div>

                        </div>

                    </div>

                    <div className="testimonial-controls">

                        <button aria-label="Previous testimonial">
                            <ArrowLeft size={18} />
                        </button>

                        <button aria-label="Next testimonial">
                            <ArrowRight size={18} />
                        </button>

                    </div>

                </div>


                <div className="testimonial-mini-grid">

                    {testimonials.slice(1).map((testimonial) => (
                        <div
                            className="mini-testimonial"
                            key={testimonial.name}
                        >

                            <div className="mini-stars">
                                <Star size={13} fill="currentColor" />
                                <Star size={13} fill="currentColor" />
                                <Star size={13} fill="currentColor" />
                                <Star size={13} fill="currentColor" />
                                <Star size={13} fill="currentColor" />
                            </div>

                            <p>
                                "{testimonial.quote}"
                            </p>

                            <div className="mini-author">
                                <strong>{testimonial.name}</strong>
                                <span>{testimonial.service}</span>
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </section>
    );
}

export default Testimonials;