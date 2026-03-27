import React, { useState } from 'react';
import { 
  CheckCircle2, 
  ChevronDown,
  ArrowRight,
  Play
} from 'lucide-react';
import HowItWorks from './components/HowItWorks';
import Scoring from './components/Scoring';
import Roles from './components/Roles';

// --- Components ---

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <a href="#" className="font-sans text-3xl font-normal tracking-tighter text-primary">
            FirstInterview<span className="text-accent">.ai</span>
          </a>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="font-sans font-medium text-dark hover:text-primary transition-colors">How It Works</a>
          <a href="#roles" className="font-sans font-medium text-dark hover:text-primary transition-colors">Roles Supported</a>
          <a href="#about" className="font-sans font-medium text-dark hover:text-primary transition-colors">About</a>
          <a href="#faq" className="font-sans font-medium text-dark hover:text-primary transition-colors">FAQ</a>
          <a href="#contact" className="font-sans font-medium text-dark hover:text-primary transition-colors">Contact</a>
          <button className="bg-primary hover:bg-primary-hover text-white font-sans font-semibold py-2.5 px-6 rounded-lg transition-all shadow-btn hover:shadow-lg transform hover:-translate-y-0.5">
            Start Practicing
          </button>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    {/* Background matching Rectangle 97022 */}
    <div 
      className="absolute inset-0 -z-10"
      style={{
        background: 'linear-gradient(180deg, #FEFFFF 0%, #F0F6FF 100%)',
        transform: 'rotate(-180deg)'
      }}
    />
    
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
      <h1 className="font-display font-extrabold text-5xl md:text-6xl lg:text-[69px] leading-[1.1] tracking-tight text-dark-secondary mb-6 max-w-4xl mx-auto">
        Practice your first interview.
      </h1>
      <p className="font-sans text-xl md:text-2xl lg:text-[28px] text-dark-secondary mb-10 max-w-3xl mx-auto">
        A 15-minute AI mock interview tailored to your CV
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
        {[
          "Tailored to your CV",
          "Real-time feedback",
          "Role-specific questions"
        ].map((text, i) => (
          <div key={i} className="flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-accent" />
            <span className="font-sans text-lg text-dark-secondary">{text}</span>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center">
        <button className="group relative inline-flex items-center justify-center gap-3 bg-primary hover:bg-primary-hover text-white font-sans font-semibold text-lg py-4 px-10 rounded-xl transition-all shadow-btn hover:shadow-xl transform hover:-translate-y-1 overflow-hidden">
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
          <span className="relative">Start Practicing FREE</span>
          <Play className="w-5 h-5 relative fill-current" />
        </button>
        <p className="mt-4 font-sans font-medium text-sm text-gray-600">
          Free. No credit card. Just 15 minutes.
        </p>
      </div>
    </div>
    
    {/* Decorative background elements */}
    <div className="absolute top-1/2 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
    <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3"></div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-section-gradient">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-dark mb-16">
        About Us
      </h2>
      <div className="grid md:grid-cols-2 gap-16 items-start">
        <div className="space-y-6">
          <p className="font-display text-xl text-gray-500 leading-relaxed">
            We are building intelligent tools that help hiring teams work smarter, faster, and more efficiently. Our AI-powered platform is designed to support HR professionals by automating the early stages of candidate screening and with that, reducing manual workload and allowing teams to focus on what truly matters: people.
          </p>
          <p className="font-display text-xl text-gray-500 leading-relaxed">
            By combining advanced artificial intelligence with practical HR workflows, we streamline the process of reviewing applications, identifying top candidates, and ensuring a consistent and fair initial evaluation. Our solution saves time, reduces operational costs, and improves the overall hiring experience for both recruiters and applicants.
          </p>
        </div>
        <div className="space-y-10">
          <div>
            <h3 className="font-display font-bold text-2xl text-dark mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-primary" />
              </div>
              Our Mission
            </h3>
            <p className="font-display text-xl text-gray-500 leading-relaxed">
              Our mission is to empower HR teams with intelligent technology that simplifies recruitment without losing the human touch. We aim to eliminate repetitive tasks, reduce bias in early screening, and enable faster, data-driven hiring decisions.
            </p>
          </div>
          <div>
            <h3 className="font-display font-bold text-2xl text-dark mb-4 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-accent" />
              </div>
              Our Vision
            </h3>
            <p className="font-display text-xl text-gray-500 leading-relaxed">
              We envision a future where recruitment is seamless, efficient, and accessible—where AI and human expertise work together to unlock potential. Our goal is to become a trusted partner for organizations worldwide, transforming how companies discover, evaluate, and connect with talent.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-display font-medium text-lg text-dark group-hover:text-primary transition-colors">
          {question}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}
      >
        <p className="font-sans text-gray-600 leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "How long does it take?",
      a: "The entire process takes just 15 minutes. You'll get immediate feedback right after you finish."
    },
    {
      q: "Do I need to prepare?",
      a: "No special preparation is needed. Just bring your authentic self and be ready to discuss your past experiences as you would in a real interview."
    },
    {
      q: "Is it really free?",
      a: "Yes! Your first mock interview is completely free. No credit card required."
    },
    {
      q: "Why do you need my LinkedIn or GitHub?",
      a: "We use this information to tailor the AI's questions specifically to your background, making the mock interview as realistic and relevant as possible."
    },
    {
      q: "What happens to my data?",
      a: "Your data is secure and private. We only use it to generate your interview and scorecard, and we never share it with third parties without your consent."
    },
    {
      q: "Will I get my results?",
      a: "Yes, immediately after the interview concludes, you will receive a detailed scorecard breaking down your performance across multiple dimensions."
    },
    {
      q: "What roles are supported?",
      a: "We currently support Software Engineering, DevOps, Data & AI, Product Management, and Project Management roles."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display font-bold text-4xl md:text-5xl text-center text-dark mb-16">
          Frequently Asked Questions
        </h2>
        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-primary pt-20 pb-6">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <a href="#" className="font-sans text-4xl font-normal tracking-tighter text-white block mb-6">
            FirstInterview
          </a>
          <p className="font-display font-bold text-xl text-white/90 leading-relaxed max-w-xl">
            We are building intelligent tools that help hiring teams work smarter, faster, and more efficiently. Our AI-powered platform is designed to support HR professionals by automating the early stages of candidate screening.
          </p>
        </div>
        <div className="flex md:justify-end items-start">
          <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20">
            <h4 className="font-display font-semibold text-white mb-2">Get in touch</h4>
            <a href="mailto:support@firstinterview.com" className="font-display font-semibold text-xl text-white hover:text-accent transition-colors">
              support@firstinterview.com
            </a>
          </div>
        </div>
      </div>
    </div>
    
    <div className="bg-dark-footer py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-4 text-sm font-display text-white/80">
          <span>firstinterview.ai</span>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <span className="text-gray-500">|</span>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
        <div className="text-sm font-display text-gray-400">
          Powered by Remgu
        </div>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Scoring />
        <Roles />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
