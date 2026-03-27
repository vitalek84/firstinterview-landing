import React from 'react';

const Roles = () => {
  const roles = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 36L44 24L32 12" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 12L4 24L16 36" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Software Engineers",
      desc: "Frontend, Backend, Fullstack, Mobile, QA"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H40C42.2091 20 44 18.2091 44 16V8C44 5.79086 42.2091 4 40 4Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 28H8C5.79086 28 4 29.7909 4 32V40C4 42.2091 5.79086 44 8 44H40C42.2091 44 44 42.2091 44 40V32C44 29.7909 42.2091 28 40 28Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12H12.02" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 36H12.02" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "DevOps Engineers",
      desc: "Cloud, Infrastructure, SRE, Platform Engineering"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 16C33.9411 16 42 13.3137 42 10C42 6.68629 33.9411 4 24 4C14.0589 4 6 6.68629 6 10C6 13.3137 14.0589 16 24 16Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 10V38C6 39.5913 7.89642 41.1174 11.2721 42.2426C14.6477 43.3679 19.2261 44 24 44C28.7739 44 33.3523 43.3679 36.7279 42.2426C40.1036 41.1174 42 39.5913 42 38V10" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 24C6 25.5913 7.89642 27.1174 11.2721 28.2426C14.6477 29.3679 19.2261 30 24 30C28.7739 30 33.3523 29.3679 36.7279 28.2426C40.1036 27.1174 42 25.5913 42 24" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data & AI Experts",
      desc: "Data Engineers, Data Scientists, ML/AI Engineers"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 28C30.4 26 31.4 24.6 33 23C35 21.2 36 18.6 36 16C36 12.8174 34.7357 9.76516 32.4853 7.51472C30.2348 5.26428 27.1826 4 24 4C20.8174 4 17.7652 5.26428 15.5147 7.51472C13.2643 9.76516 12 12.8174 12 16C12 18 12.4 20.4 15 23C16.4 24.4 17.6 26 18 28" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 36H30" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 44H28" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Product Managers",
      desc: "Product Managers, Product Owners"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 4H18C16.8954 4 16 4.89543 16 6V10C16 11.1046 16.8954 12 18 12H30C31.1046 12 32 11.1046 32 10V6C32 4.89543 31.1046 4 30 4Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 8H36C37.0609 8 38.0783 8.42143 38.8284 9.17157C39.5786 9.92172 40 10.9391 40 12V40C40 41.0609 39.5786 42.0783 38.8284 42.8284C38.0783 43.5786 37.0609 44 36 44H12C10.9391 44 9.92172 43.5786 9.17157 42.8284C8.42143 42.0783 8 41.0609 8 40V12C8 10.9391 8.42143 9.92172 9.17157 9.17157C9.92172 8.42143 10.9391 8 12 8H16" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 28L22 32L30 24" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Project Managers",
      desc: "Project Managers, Scrum Masters, Agile Coaches"
    }
  ];

  return (
    <section id="roles" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-dark mb-16">
          Roles Supported
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {roles.map((role, i) => (
            <div key={i} className="flex flex-col items-center text-center w-full sm:w-[280px] p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-accent-transparent flex items-center justify-center mb-6">
                {role.icon}
              </div>
              <h3 className="font-sans font-medium text-lg text-dark mb-3">
                {role.title}
              </h3>
              <p className="font-sans text-base text-gray-500 leading-relaxed">
                {role.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roles;
