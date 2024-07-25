// components/NavBar.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
    return (
        <nav className="w-full bg-neutral-950 p-4 fixed top-0 left-0 flex justify-center z-50">
            <ul className="flex space-x-6">
                <li>
                    <a href="https://www.linkedin.com/in/mohammed-zaid-mir" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faLinkedin} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="mailto:mmir28@uwo.ca" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faEnvelope} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faFileAlt} size="2x" />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/mdzdmr" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                        <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
