import React from "react";

import {
  FaYoutube,
  FaLinkedin,
  FaInstagram,
  FaPatreon,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-neutral-600 font-bold py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-2">
        {/* Features */}
        <div className="md:col-span-1 px-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Features</h3>
          <ul className="flex flex-row md:flex-col justify-between items-start">
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">Layout</li>
              <li className="hover:text-white py-2 cursor-pointer">CMS</li>
              <li className="hover:text-white py-2 cursor-pointer">Effects</li>
              <li className="hover:text-white py-2 cursor-pointer">
                SEO & Performance
              </li>
            </div>
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">
                Site Navigation
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Site Management
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Enterprise
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Developers
              </li>
            </div>
          </ul>
        </div>

        {/* Resources */}
        <div className="md:col-span-1 px-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
          <ul className="flex flex-row md:flex-col justify-between items-start">
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">Updates</li>
              <li className="hover:text-white py-2 cursor-pointer">NEW</li>
              <li className="hover:text-white py-2 cursor-pointer">
                Templates
              </li>
              <li className="hover:text-white py-2 cursor-pointer">Academy</li>
              <li className="hover:text-white py-2 cursor-pointer">
                Customers
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Hype Feed
              </li>
            </div>
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">
                Become a Partner
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Become an Expert
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Desktop App
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                Figma to Framer
              </li>
              <li className="hover:text-white py-2 cursor-pointer">
                HTML to Framer
              </li>
            </div>
          </ul>
        </div>

        {/* Company */}
        <div className="md:col-span-1 px-6">
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="flex flex-row md:flex-col justify-between items-start">
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">About</li>
              <li className="hover:text-white py-2 cursor-pointer">Careers</li>
              <li className="hover:text-white py-2 cursor-pointer">HIRING</li>
              <li className="hover:text-white py-2 cursor-pointer">Security</li>
              <li className="hover:text-white py-2 cursor-pointer">Privacy</li>
            </div>
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">Abuse</li>
              <li className="hover:text-white py-2 cursor-pointer">Charges</li>
              <li className="hover:text-white py-2 cursor-pointer">Terms</li>
              <li className="hover:text-white py-2 cursor-pointer">Cookies</li>
            </div>
          </ul>
        </div>

        <div className="md:col-span-1 px-6">
          {/* Community */}
          <h3 className="text-lg font-semibold mb-4 text-white">Community</h3>
          <ul className="flex flex-row md:flex-col justify-between items-start mb-4">
            <div className="w-1/2 md:w-full">
              <li className="hover:text-white py-2 cursor-pointer">
                Community
              </li>
              <li className="hover:text-white py-2 cursor-pointer">Meetups</li>
            </div>

            <li className="hover:text-white py-2 cursor-pointer w-1/2 md:w-full">
              Site Awards
            </li>
          </ul>
          {/* Support */}
          <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
          <ul className="flex flex-row md:flex-col justify-between items-start">
            <li className="hover:text-white py-2 cursor-pointer w-1/2 md:w-full">
              Contact
            </li>
            <li className="hover:text-white py-2 cursor-pointer w-1/2 md:w-full">
              FAQ
            </li>
          </ul>
        </div>
      </div>
      <div className="px-5 py-6 flex justify-between items-center">
        <h1 className="text-white text-xl">Framer</h1>
        <div className="flex justify-center gap-3 items-center">
          <FaYoutube
            size={20}
            className="text-neutral-700 hover:text-neutral-600 cursor-pointer"
          />
          <FaInstagram
            size={20}
            className="text-neutral-700 hover:text-neutral-600 cursor-pointer"
          />
          <FaLinkedin
            size={20}
            className="text-neutral-700 hover:text-neutral-600 cursor-pointer"
          />
          <FaPatreon
            size={20}
            className="text-neutral-700 hover:text-neutral-600 cursor-pointer"
          />
          <FaTiktok
            size={20}
            className="text-neutral-700 hover:text-neutral-600 cursor-pointer"
          />
        </div>
      </div>
    </footer>
  );
}
