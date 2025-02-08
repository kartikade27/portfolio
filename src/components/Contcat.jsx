import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/kartikade27@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("Email Sent Successfully!");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Error Sending Email!");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="bg-gray-900 py-20" style={{ fontFamily: "Roboto, sans-serif" }}>
            <div className="container mx-auto px-6 text-white">
                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text"
                >
                    Contact <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-transparent bg-clip-text">Me</span>
                </motion.h2>

                {/* Form */}
                <motion.form
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-lg mx-auto bg-white bg-opacity-10 backdrop-blur-md p-8 rounded-lg shadow-lg"
                >
                    {/* Name Input */}
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text" name="name" value={formData.name} onChange={handleChange}
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    {/* Email Input */}
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email" name="email" value={formData.email} onChange={handleChange}
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            required
                        />
                    </div>

                    {/* Message Input */}
                    <div className="mb-6">
                        <label className="block text-gray-900 text-sm font-bold mb-2">Message</label>
                        <textarea
                            name="message" value={formData.message} onChange={handleChange}
                            className="w-full px-4 py-2 text-black border rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                            rows="5" required
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-center">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            type="submit"
                            className="bg-transparent border border-gray-900 text-gray-900 hover:bg-white hover:text-gray-900 font-bold py-2 px-4 rounded transition duration-200"
                        >
                            {loading ? "Sending..." : "Send Message"}
                        </motion.button>
                    </div>
                </motion.form>
            </div>
        </section>
    );
};

export default Contact;
