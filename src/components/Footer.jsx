// Footer.jsx
import React from 'react';
import {Link} from 'react-router-dom';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import logo from '../assets/images/logos/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-900 text-white mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Description */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={logo}
                                alt="La Commune Logo"
                                className="w-16 h-16 object-cover"
                            />
                        </div>
                        <p className="text-gray-400 text-sm">
                            Votre commune dynamique et accueillante, engagée pour le bien-être de ses habitants et le
                            développement durable de son territoire.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link to="/commune"
                                      className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                    La commune
                                </Link>
                            </li>
                            <li>
                                <Link to="/projets"
                                      className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                    Projets
                                </Link>
                            </li>
                            <li>
                                <Link to="/tourisme"
                                      className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                    Tourisme
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact"
                                      className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center space-x-3 text-gray-400">
                                <LocationOnIcon className="text-[#228B22]"/>
                                <span>123 Rue de la Mairie, 75001</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <PhoneIcon className="text-[#228B22]"/>
                                <span>01 23 45 67 89</span>
                            </li>
                            <li className="flex items-center space-x-3 text-gray-400">
                                <EmailIcon className="text-[#228B22]"/>
                                <span>contact@lacommune.fr</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-400 text-sm mb-4">
                            Inscrivez-vous pour recevoir les dernières actualités
                        </p>
                        <form className="space-y-2">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:border-[#228B22]"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-[#228B22] to-[#1a6b1a] text-white font-medium hover:shadow-lg hover:shadow-[#228B22]/20 transition-all duration-300"
                            >
                                S'inscrire
                            </button>
                        </form>
                    </div>
                </div>

                {/* Social Links and Copyright */}
                <div className="border-t border-gray-800 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-gray-400 text-sm">
                            © {currentYear} La Commune. Tous droits réservés.
                        </div>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                <FacebookIcon/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                <TwitterIcon/>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-[#228B22] transition-colors duration-300">
                                <LinkedInIcon/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;