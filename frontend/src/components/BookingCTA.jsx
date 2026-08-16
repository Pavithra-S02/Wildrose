import { useState } from "react";

import {
    ArrowUpRight,
    CalendarDays,
    Clock3,
    MapPin
} from "lucide-react";

import "./BookingCTA.css";


function BookingCTA() {

    // Booking form data
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        date: "",
        time: "",
        message: ""
    });


    // Controls success screen
    const [submitted, setSubmitted] = useState(false);


    // Handles all input changes
    const handleChange = (event) => {

        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

    };


    // Handles form submission
    const handleSubmit = async (event) => {

        event.preventDefault();


        // =========================
        // NAME VALIDATION
        // =========================

        if (!formData.name.trim()) {

            alert("Please enter your name.");

            return;
        }


        // =========================
        // PHONE VALIDATION
        // =========================

        if (!formData.phone.trim()) {

            alert("Please enter your phone number.");

            return;
        }


        if (!/^[0-9]{10}$/.test(formData.phone.trim())) {

            alert("Please enter a valid 10-digit phone number.");

            return;
        }


        // =========================
        // EMAIL VALIDATION
        // =========================

        if (!formData.email.trim()) {

            alert("Please enter your email.");

            return;
        }


        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        if (!emailPattern.test(formData.email.trim())) {

            alert("Please enter a valid email address.");

            return;
        }


        // =========================
        // SERVICE VALIDATION
        // =========================

        if (!formData.service) {

            alert("Please select a service.");

            return;
        }


        // =========================
        // DATE VALIDATION
        // =========================

        if (!formData.date) {

            alert("Please select a date.");

            return;
        }


        // =========================
        // TIME VALIDATION
        // =========================

        if (!formData.time) {

            alert("Please select a time.");

            return;
        }


        // =========================
        // SEND DATA TO SPRING BOOT
        // =========================

        try {

            const response = await fetch(
                "http://localhost:2007/appointments",
                {
                    method: "POST",

                    headers: {
                        "Content-Type": "application/json"
                    },

                    body: JSON.stringify(formData)
                }
            );


            // Check whether Spring Boot responded successfully
            if (!response.ok) {

                throw new Error(
                    "Failed to save appointment"
                );

            }


            // Get saved appointment from Spring Boot
            const savedAppointment =
                await response.json();


            console.log(
                "Appointment saved successfully:",
                savedAppointment
            );


            // Show success screen
            setSubmitted(true);


        } catch (error) {

            console.error(
                "Error saving appointment:",
                error
            );


            alert(
                "Something went wrong while booking your appointment. Please try again."
            );

        }

    };


    return (

        <section
            className="booking"
            id="booking"
        >

            <div className="booking-container">


                {/* =========================
                    LEFT SIDE
                ========================== */}

                <div className="booking-content">


                    <div className="section-label booking-label">

                        <span></span>

                        YOUR BEAUTY MOMENT

                    </div>


                    <h2>

                        Ready to feel

                        <em>beautiful?</em>

                    </h2>


                    <p>

                        Give yourself the time and care
                        you deserve. Book your WildRose
                        experience today.

                    </p>


                    <div className="booking-details">


                        {/* Easy Booking */}

                        <div className="booking-detail">

                            <CalendarDays size={19} />

                            <div>

                                <strong>
                                    Easy Booking
                                </strong>

                                <span>
                                    Choose your preferred date
                                </span>

                            </div>

                        </div>


                        {/* Flexible Timing */}

                        <div className="booking-detail">

                            <Clock3 size={19} />

                            <div>

                                <strong>
                                    Flexible Timing
                                </strong>

                                <span>
                                    Appointments that fit your day
                                </span>

                            </div>

                        </div>


                        {/* Visit WildRose */}

                        <div className="booking-detail">

                            <MapPin size={19} />

                            <div>

                                <strong>
                                    Visit WildRose
                                </strong>

                                <span>
                                    Your beauty destination
                                </span>

                            </div>

                        </div>


                    </div>

                </div>


                {/* =========================
                    RIGHT SIDE
                ========================== */}

                <div className="booking-form-card">


                    <div className="booking-form-heading">

                        <span>
                            BOOK AN APPOINTMENT
                        </span>


                        <h3>

                            Let's make it

                            <em>your moment.</em>

                        </h3>

                    </div>


                    {/* =========================
                        FORM / SUCCESS SCREEN
                    ========================== */}

                    {!submitted ? (

                        <form
                            className="booking-form"
                            onSubmit={handleSubmit}
                        >


                            {/* =========================
                                NAME + PHONE
                            ========================== */}

                            <div className="form-row">


                                <div className="form-group">

                                    <label htmlFor="name">
                                        Full Name
                                    </label>

                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="phone">
                                        Phone Number
                                    </label>

                                    <input
                                        id="phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Your phone number"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />

                                </div>


                            </div>


                            {/* =========================
                                EMAIL + SERVICE
                            ========================== */}

                            <div className="form-row">


                                <div className="form-group">

                                    <label htmlFor="email">
                                        Email
                                    </label>

                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Your email"
                                        value={formData.email}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="service">
                                        Service
                                    </label>

                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >

                                        <option value="">
                                            Select a service
                                        </option>

                                        <option value="hair">
                                            Hair
                                        </option>

                                        <option value="skin">
                                            Skin
                                        </option>

                                        <option value="spa">
                                            Spa
                                        </option>

                                        <option value="bridal">
                                            Bridal
                                        </option>

                                    </select>

                                </div>


                            </div>


                            {/* =========================
                                DATE + TIME
                            ========================== */}

                            <div className="form-row">


                                <div className="form-group">

                                    <label htmlFor="date">
                                        Preferred Date
                                    </label>

                                    <input
                                        id="date"
                                        name="date"
                                        type="date"
                                        value={formData.date}
                                        onChange={handleChange}
                                    />

                                </div>


                                <div className="form-group">

                                    <label htmlFor="time">
                                        Preferred Time
                                    </label>

                                    <input
                                        id="time"
                                        name="time"
                                        type="time"
                                        value={formData.time}
                                        onChange={handleChange}
                                    />

                                </div>


                            </div>


                            {/* =========================
                                MESSAGE
                            ========================== */}

                            <div className="form-group">

                                <label htmlFor="message">
                                    Message
                                </label>

                                <textarea
                                    id="message"
                                    name="message"
                                    rows="3"
                                    placeholder="Tell us anything we should know..."
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>

                            </div>


                            {/* =========================
                                SUBMIT BUTTON
                            ========================== */}

                            <button
                                type="submit"
                                className="booking-submit"
                            >

                                Book My Appointment

                                <ArrowUpRight size={19} />

                            </button>


                            <p className="booking-note">

                                We'll confirm your appointment shortly.

                            </p>


                        </form>


                    ) : (


                        /* =========================
                           SUCCESS SCREEN
                        ========================== */

                        <div className="booking-success">


                            <div className="success-icon">

                                ✓

                            </div>


                            <h3>

                                Appointment Request Sent!

                            </h3>


                            <p>

                                Thank you, {formData.name}! 🌹

                            </p>


                            <span>

                                We'll contact you shortly to confirm
                                your appointment.

                            </span>


                            <button
                                type="button"
                                onClick={() => {

                                    setSubmitted(false);

                                    setFormData({

                                        name: "",
                                        phone: "",
                                        email: "",
                                        service: "",
                                        date: "",
                                        time: "",
                                        message: ""

                                    });

                                }}
                            >

                                Book Another Appointment

                            </button>


                        </div>

                    )}

                </div>

            </div>

        </section>

    );

}


export default BookingCTA;