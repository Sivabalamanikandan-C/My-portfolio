import React, { useState } from 'react';
import { FiUser, FiMail, FiMessageSquare, FiSend } from 'react-icons/fi';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            // const response = await axios.post('https://localhost:5000/api/contact/submit', formData);
            const response = await axios.post('https://my-portfolio-backend-p9s7.onrender.com/api/contact/submit', formData);
            console.log(response.data);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setSubmitStatus(null), 5000);
        } catch (error) {
            console.error(error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus(null), 5000);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section 
            className="section-padding bg-gradient-to-b from-white via-neutral-50 to-white dark:from-neutral-950 dark:via-neutral-900 dark:to-neutral-950" 
            id='contact'
        >
            <div className="container-max">
                <div className="max-w-4xl mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <span className="inline-block px-4 py-2 rounded-full bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-sm font-semibold mb-4">
                            Get In Touch
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Let's <span className="gradient-text">Connect</span>
                        </h2>
                        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
                            Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you as soon as possible.
                        </p>
                    </div>

                    {/* Form Card */}
                    <div className="card-elevated p-8 md:p-12">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Name Input */}
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <FiUser className="absolute left-4 top-3.5 text-neutral-400 dark:text-neutral-600" size={20} />
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        placeholder="John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="input-field pl-12"
                                    />
                                </div>
                            </div>

                            {/* Email Input */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                                    Your Email
                                </label>
                                <div className="relative">
                                    <FiMail className="absolute left-4 top-3.5 text-neutral-400 dark:text-neutral-600" size={20} />
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="john@example.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="input-field pl-12"
                                    />
                                </div>
                            </div>

                            {/* Message Input */}
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <FiMessageSquare className="absolute left-4 top-4 text-neutral-400 dark:text-neutral-600" size={20} />
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Tell me about your project..."
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows="5"
                                        className="input-field pl-12 resize-none"
                                    />
                                </div>
                            </div>

                            {/* Status Messages */}
                            {submitStatus === 'success' && (
                                <div className="p-4 rounded-lg bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300">
                                    ✓ Message sent successfully! I'll get back to you soon.
                                </div>
                            )}
                            {submitStatus === 'error' && (
                                <div className="p-4 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300">
                                    ✕ Error sending message. Please try again.
                                </div>
                            )}

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <FiSend size={20} />
                                {isLoading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                        <div className="card-base p-6">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Email</h3>
                            <a href="mailto:sivabalamanikandan03@gmail.com" className="text-primary-600 dark:text-primary-400 hover:underline">
                                sivabalamanikandan03@gmail.com
                            </a>
                        </div>
                        <div className="card-base p-6">
                            <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2">Phone</h3>
                            <a href="tel:+919751357984" className="text-primary-600 dark:text-primary-400 hover:underline">
                                +91 9751357984
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
