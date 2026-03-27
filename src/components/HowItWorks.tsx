import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#E6F9FF"/>
          <path d="M55 45V51.6667C55 52.5507 54.6488 53.3986 54.0237 54.0237C53.3986 54.6488 52.5507 55 51.6667 55H28.3333C27.4493 55 26.6014 54.6488 25.9763 54.0237C25.3512 53.3986 25 52.5507 25 51.6667V45" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M48.3333 33.3333L40 25L31.6667 33.3333" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 25V45" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Step 1: Sign up and upload your CV",
      desc: "Enter your email, link your LinkedIn and/or GitHub"
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#E6F9FF"/>
          <path d="M40 23.3333C38.6739 23.3333 37.4021 23.8601 36.4645 24.7978C35.5268 25.7355 35 27.0072 35 28.3333V40C35 41.3261 35.5268 42.5978 36.4645 43.5355C37.4021 44.4732 38.6739 45 40 45C41.3261 45 42.5979 44.4732 43.5355 43.5355C44.4732 42.5978 45 41.3261 45 40V28.3333C45 27.0072 44.4732 25.7355 43.5355 24.7978C42.5979 23.8601 41.3261 23.3333 40 23.3333Z" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M51.6666 36.6667V40C51.6666 43.0942 50.4375 46.0617 48.2496 48.2496C46.0616 50.4375 43.0942 51.6667 40 51.6667C36.9058 51.6667 33.9383 50.4375 31.7504 48.2496C29.5625 46.0617 28.3333 43.0942 28.3333 40V36.6667" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M40 51.6667V56.6667" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Step 2: Do the interview",
      desc: "Answer out loud for 15 minutes. Questions tailored"
    },
    {
      icon: (
        <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40C0 17.9086 17.9086 0 40 0C62.0914 0 80 17.9086 80 40C80 62.0914 62.0914 80 40 80C17.9086 80 0 62.0914 0 40Z" fill="#E6F9FF"/>
          <path d="M56.6667 41.6667V30C56.6667 29.116 56.3155 28.2681 55.6904 27.643C55.0653 27.0179 54.2174 26.6667 53.3334 26.6667H26.6667C25.7827 26.6667 24.9348 27.0179 24.3097 27.643C23.6846 28.2681 23.3334 29.116 23.3334 30V50C23.3334 51.8334 24.8334 53.3334 26.6667 53.3334H40" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M56.6667 31.6667L41.7167 41.1667C41.2022 41.4891 40.6072 41.66 40 41.66C39.3928 41.66 38.7979 41.4891 38.2834 41.1667L23.3334 31.6667" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M46.6666 51.6666L50 55L56.6666 48.3333" stroke="#00C0F5" strokeWidth="3.33333" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Step 3: Get your scorecard",
      desc: "Scored on 4 dimensions out of 10 with specific feedback"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-dark mb-16">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-10 left-[15%] right-[15%] h-0.5 bg-accent-light -z-10"></div>
          
          {steps.map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center group">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm">
                {step.icon}
              </div>
              <h3 className="font-display font-medium text-2xl text-dark mb-4">
                {step.title}
              </h3>
              <p className="font-display text-base text-gray-700 max-w-xs">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
