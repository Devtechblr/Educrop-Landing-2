import React from 'react';
import EducropLogo from './EducropLogo';
import { FaLinkedin, FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

/**
 * Demo Contact Configuration (Easily editable for future replacement)
 */
export const CONTACT_DETAILS = {
  customerSupportEmail: 'support@educrop.example',
  salesPartnershipsEmail: 'contact@educrop.example',
  phone: '+91 00000 00000',
  phoneHref: 'tel:+910000000000',
  workingHours: 'IST 8 AM – 8 PM Everyday',
};

/**
 * Navigation Columns Data
 */
const COMPANY_LINKS = [
  { label: 'About Us', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'Careers', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];

const RESOURCES_LINKS = [
  { label: 'Technical Blog', href: '#' },
  { label: 'Case Study', href: '#' },
  { label: 'Product Policy', href: '#' },
  { label: 'Brochure', href: '#' },
  { label: 'Warranty Policy', href: '#' },
  { label: 'Product Blog', href: '#' },
  { label: 'E-Waste Management', href: '#' },
];

const OFFICES_LIST = [
  { label: 'Bengaluru', href: '#' },
  { label: 'Singapore', href: '#' },
  { label: 'Manila', href: '#' },
  { label: 'Dubai', href: '#' },
  { label: 'Delaware', href: '#' },
];

const SOCIAL_LINKS = [
  { name: 'LinkedIn', icon: FaLinkedin, href: 'https://linkedin.com' },
  { name: 'Facebook', icon: FaFacebook, href: 'https://facebook.com' },
  { name: 'Instagram', icon: FaInstagram, href: 'https://instagram.com' },
  { name: 'YouTube', icon: FaYoutube, href: 'https://youtube.com' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white text-[#475569] border-t border-[#e2e8f0] relative z-10">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 lg:pt-20">
        
        {/* 4 Main Footer Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 xl:gap-14">
          
          {/* Column 1 – Company */}
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b] tracking-tight mb-5">
              Company
            </h3>
            <ul className="space-y-0">
              {COMPANY_LINKS.map((item, index) => (
                <li
                  key={item.label}
                  className={index < COMPANY_LINKS.length - 1 ? 'border-b border-[#e9edf2]' : ''}
                >
                  <a
                    href={item.href}
                    className="block py-2.5 text-[14px] text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 – Resources */}
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b] tracking-tight mb-5">
              Resources
            </h3>
            <ul className="space-y-0">
              {RESOURCES_LINKS.map((item, index) => (
                <li
                  key={item.label}
                  className={index < RESOURCES_LINKS.length - 1 ? 'border-b border-[#e9edf2]' : ''}
                >
                  <a
                    href={item.href}
                    className="block py-2.5 text-[14px] text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Offices */}
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b] tracking-tight mb-5">
              Offices
            </h3>
            <ul className="space-y-0">
              {OFFICES_LIST.map((item, index) => (
                <li
                  key={item.label}
                  className={index < OFFICES_LIST.length - 1 ? 'border-b border-[#e9edf2]' : ''}
                >
                  <a
                    href={item.href}
                    className="block py-2.5 text-[14px] text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact */}
          <div>
            <h3 className="text-[16px] sm:text-[17px] font-bold text-[#14234b] tracking-tight mb-5">
              Contact
            </h3>

            {/* Email Group */}
            <div className="mb-5">
              <span className="block text-[14px] font-bold text-[#14234b] mb-2">
                Email
              </span>
              <div className="space-y-2.5 text-[14px]">
                <div>
                  <span className="block text-xs font-medium text-[#64748b]">
                    Customer support
                  </span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.customerSupportEmail}`}
                    className="text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal break-words"
                  >
                    {CONTACT_DETAILS.customerSupportEmail}
                  </a>
                </div>
                <div>
                  <span className="block text-xs font-medium text-[#64748b]">
                    Sales &amp; Partnerships
                  </span>
                  <a
                    href={`mailto:${CONTACT_DETAILS.salesPartnershipsEmail}`}
                    className="text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal break-words"
                  >
                    {CONTACT_DETAILS.salesPartnershipsEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone Group */}
            <div>
              <span className="block text-[14px] font-bold text-[#14234b] mb-1">
                Phone
              </span>
              <div className="text-[14px]">
                <a
                  href={CONTACT_DETAILS.phoneHref}
                  className="text-[#475569] hover:text-[#0284c7] transition-colors duration-150 font-normal"
                >
                  {CONTACT_DETAILS.phone}
                </a>
                <p className="text-xs text-[#64748b] mt-0.5">
                  ({CONTACT_DETAILS.workingHours})
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom Footer Section */}
        <div className="border-t border-[#e2e8f0] mt-12 sm:mt-16 pt-6 sm:pt-8 pb-8 sm:pb-10">
          <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-4 sm:gap-6">
            
            {/* Bottom-Left: Educrop Logo */}
            <div className="flex items-center justify-center md:justify-start">
              <EducropLogo className="w-7 h-7" textClassName="text-xl font-bold text-[#14234b]" />
            </div>

            {/* Centred Copyright Text */}
            <div className="text-center justify-self-center">
              <p className="text-xs sm:text-[13px] text-[#64748b] font-normal tracking-tight">
                &copy; Copyright 2026, Educrop. All Rights Reserved.
              </p>
            </div>

            {/* Bottom-Right: Social Media Icons */}
            <div className="flex items-center justify-center md:justify-end gap-5">
              {SOCIAL_LINKS.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Educrop on ${social.name}`}
                    className="text-[#14234b] hover:text-[#0284c7] transition-colors duration-150 p-1"
                  >
                    <IconComponent className="w-[18px] h-[18px]" />
                  </a>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
