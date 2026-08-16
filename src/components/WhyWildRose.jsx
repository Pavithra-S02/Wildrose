import {
    Heart,
    Sparkles,
    ShieldCheck,
    Gem
} from "lucide-react";

import "./WhyWildRose.css";

const reasons = [
    {
        icon: Heart,
        number: "01",
        title: "Personalised Care",
        description:
            "Every visit is tailored to your unique beauty, style and comfort."
    },
    {
        icon: Gem,
        number: "02",
        title: "Premium Experience",
        description:
            "A calm, elegant environment where every little detail matters."
    },
    {
        icon: Sparkles,
        number: "03",
        title: "Expert Professionals",
        description:
            "Our skilled team brings experience, creativity and care to every service."
    },
    {
        icon: ShieldCheck,
        number: "04",
        title: "Quality Products",
        description:
            "We choose trusted, high-quality products for beautiful results."
    }
];

function WhyWildRose() {
    return (
        <section className="why-wildrose">

            <div className="why-container">

                <div className="why-heading">

                    <div className="section-label">
                        <span></span>
                        WHY WILDROSE
                    </div>

                    <h2>
                        More than beauty.
                        <em>A feeling.</em>
                    </h2>

                    <p>
                        We created WildRose to be a place where you
                        can slow down, take a breath and leave feeling
                        like the best version of yourself.
                    </p>

                </div>


                <div className="why-reasons">

                    {reasons.map((reason) => {

                        const Icon = reason.icon;

                        return (
                            <div
                                className="why-card"
                                key={reason.number}
                            >

                                <div className="why-card-top">

                                    <span className="why-number">
                                        {reason.number}
                                    </span>

                                    <div className="why-icon">
                                        <Icon size={21} />
                                    </div>

                                </div>

                                <h3>{reason.title}</h3>

                                <p>{reason.description}</p>

                            </div>
                        );
                    })}

                </div>

            </div>

        </section>
    );
}

export default WhyWildRose;