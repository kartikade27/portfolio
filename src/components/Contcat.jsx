import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .sendForm(
                "service_4dv4y1m",
                "template_7kqgfap",
                formRef.current,
                "50scnYL_4XP1XGcKG"
            )
            .then(
                () => {
                    toast.success("Email Sent Successfully!", { position: "top-center", autoClose: 2000 });
                    formRef.current.reset();
                },
                (error) => {
                    console.error("Error:", error);
                    toast.error("Something went wrong!", { position: "top-center", autoClose: 2000 });
                }
            )
            .finally(() => setLoading(false));
    };

    return (
        <section id="contact" className="bg-gray-900 py-20" style={{ fontFamily: "Roboto, sans-serif" }}>
            {/* Toast container with center position */}
            <ToastContainer position="top-center" autoClose={2000} />

            <div className="container mx-auto px-6 text-white">
                <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r text-white  bg-clip-text">
                    Contact <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Me</span>
                </h2>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg"
                >
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Message</label>
                        <textarea
                            name="message"
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            rows="5"
                            required
                        ></textarea>
                    </div>

                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-transparent border border-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 font-bold py-2 px-4 rounded transition duration-200"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;
