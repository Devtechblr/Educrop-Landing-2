import React from 'react';
import { FaTruck, FaHeadphones } from 'react-icons/fa6';

/**
 * Custom Warranty Shield Icon with crossed service tools inside,
 * matching the reference screenshot design.
 */
function WarrantyShieldIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      {/* Solid Shield Body */}
      <path d="M12 2L4 5V11.5C4 16.5 7.4 21.2 12 22.5C16.6 21.2 20 16.5 20 11.5V5L12 2Z" />
      {/* Crossed Wrench / Tool Cutout Lines */}
      <path
        d="M8.8 8.8L15.2 15.2M15.2 8.8L8.8 15.2"
        stroke="#ffffff"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
      <circle cx="12" cy="12" r="1.2" fill="#ffffff" />
    </svg>
  );
}

const SUPPORT_CARDS = [
  {
    id: 'pan-india-delivery',
    icon: FaTruck,
    isCustomIcon: false,
    title: 'Pan India delivery & service',
    description: 'Seamless start, complimentary expert guidance',
  },
  {
    id: 'customer-support-365',
    icon: FaHeadphones,
    isCustomIcon: false,
    title: '365 days customer support',
    description: 'Uninterrupted support, every single day',
  },
  {
    id: 'on-site-warranty',
    icon: WarrantyShieldIcon,
    isCustomIcon: true,
    title: 'Three year on-site warranty',
    description: 'Ensuring peace of mind with every purchase',
  },
];

export default function SupportSection() {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24 border-t border-slate-100 select-none overflow-hidden">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] lg:text-[40px] font-extrabold text-[#111c38] tracking-tight leading-[1.2]">
            Support beyond software that<br />
            only we provide
          </h2>
        </div>

        {/* 3 Cards in a Single Row on Desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {SUPPORT_CARDS.map((card) => {
            const IconComponent = card.icon;
            return (
              <div
                key={card.id}
                className="group relative bg-white rounded-[24px] sm:rounded-[28px] p-8 sm:p-10 flex flex-col items-center justify-center text-center shadow-[0_10px_35px_-8px_rgba(15,23,42,0.06)] border border-slate-100 hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.12)] hover:border-sky-100 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Circular light-blue background with dark navy-blue icon */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#e8f3fe] flex items-center justify-center mb-6 text-[#14234b] group-hover:scale-105 group-hover:bg-[#dbeafe] transition-all duration-300 shadow-sm">
                  <IconComponent className="w-6 h-6 sm:w-7 sm:h-7 text-[#14234b]" />
                </div>

                {/* Bold Centered Title */}
                <h3 className="text-[18px] sm:text-[20px] font-bold text-[#14234b] tracking-tight mb-2.5">
                  {card.title}
                </h3>

                {/* Muted Blue/Grey Centered Description */}
                <p className="text-[13.5px] sm:text-[14.5px] text-[#5a6578] leading-relaxed max-w-[280px]">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
