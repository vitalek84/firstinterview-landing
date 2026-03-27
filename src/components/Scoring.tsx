import React from 'react';

const Scoring = () => {
  const dimensions = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#00C0F5" fillOpacity="0.1"/>
          <path d="M33 27C33 27.5304 32.7893 28.0391 32.4142 28.4142C32.0391 28.7893 31.5304 29 31 29H19L15 33V17C15 16.4696 15.2107 15.9609 15.5858 15.5858C15.9609 15.2107 16.4696 15 17 15H31C31.5304 15 32.0391 15.2107 32.4142 15.5858C32.7893 15.9609 33 16.4696 33 17V27Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Communication",
      desc: "Clarity, conciseness, structure, confidence"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#00C0F5" fillOpacity="0.1"/>
          <path d="M30 28L34 24L30 20" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 20L14 24L18 28" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M26.5 16L21.5 32" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Role-specific",
      desc: "Technical depth, product thinking, or delivery skills"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#00C0F5" fillOpacity="0.1"/>
          <path d="M24 34C29.5228 34 34 29.5228 34 24C34 18.4772 29.5228 14 24 14C18.4772 14 14 18.4772 14 24C14 29.5228 18.4772 34 24 34Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 26C25.1046 26 26 25.1046 26 24C26 22.8954 25.1046 22 24 22C22.8954 22 22 22.8954 22 24C22 25.1046 22.8954 26 24 26Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Comprehension",
      desc: "Do you actually answer the question being asked"
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 10C0 4.47715 4.47715 0 10 0H38C43.5229 0 48 4.47715 48 10V38C48 43.5229 43.5228 48 38 48H10C4.47715 48 0 43.5228 0 38V10Z" fill="#00C0F5" fillOpacity="0.1"/>
          <path d="M31 26C32.49 24.54 34 22.79 34 20.5C34 19.0413 33.4205 17.6424 32.3891 16.6109C31.3576 15.5795 29.9587 15 28.5 15C26.74 15 25.5 15.5 24 17C22.5 15.5 21.26 15 19.5 15C18.0413 15 16.6424 15.5795 15.6109 16.6109C14.5795 17.6424 14 19.0413 14 20.5C14 22.8 15.5 24.55 17 26L24 33L31 26Z" stroke="#00C0F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Behavioral",
      desc: "Ownership, honesty, self-awareness, conflict handling"
    }
  ];

  return (
    <section className="py-24 bg-section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-dark mb-16">
          What You Get Scored On
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dimensions.map((dim, i) => (
            <div key={i} className="bg-white rounded-2xl p-8 shadow-card hover:shadow-xl transition-shadow duration-300 border border-gray-100">
              <div className="mb-6">
                {dim.icon}
              </div>
              <h3 className="font-sans font-medium text-xl text-dark mb-3">
                {dim.title}
              </h3>
              <p className="font-sans text-base text-gray-700 leading-relaxed">
                {dim.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Scoring;
