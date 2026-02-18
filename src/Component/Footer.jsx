"use client";
import React from 'react';
import { motion } from "framer-motion";
import { Facebook, Twitter, Linkedin, Mail,  } from "lucide-react";

const Footer = () => {
    return (
        <div>
            <footer className="bg-gray-900 text-gray-300 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8"
                >
                    {/* Brand */}
                    <div>
                        <h2 className="text-2xl font-bold text-white">DressShop</h2>
                        <p className="mt-3 text-sm leading-relaxed">
                            Smart phone analytics for better decisions. Track, analyze & grow your mobile business.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Product</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">Features</li>
                            <li className="hover:text-white cursor-pointer">Pricing</li>
                            <li className="hover:text-white cursor-pointer">Integrations</li>
                            <li className="hover:text-white cursor-pointer">Updates</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Company</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="hover:text-white cursor-pointer">About Us</li>
                            <li className="hover:text-white cursor-pointer">Careers</li>
                            <li className="hover:text-white cursor-pointer">Blog</li>
                            <li className="hover:text-white cursor-pointer">Contact</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">Subscribe</h3>
                        <p className="text-sm mb-3">Get product updates in your inbox.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2 rounded-l-md text-white outline-none"
                            />
                            <button className="bg-indigo-600 px-4 py-2 rounded-r-md hover:bg-indigo-700 transition">
                                <Mail size={18} />
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Bottom */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                    className="border-t border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center px-6 max-w-7xl mx-auto"
                >
                    <p className="text-sm">&copy; {new Date().getFullYear()} DressShop. All rights reserved.</p>

                    <div className="flex gap-4 mt-3 md:mt-0">
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-white">
                            <Facebook />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-white">
                            <Twitter />
                        </motion.a>
                        <motion.a whileHover={{ scale: 1.2 }} href="#" className="hover:text-white">
                            <Linkedin />
                        </motion.a>
                    </div>
                </motion.div>
            </footer>
        </div>
    );
};

export default Footer;