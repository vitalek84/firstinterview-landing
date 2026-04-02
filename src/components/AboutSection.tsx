export function AboutSection() {
  return (
    <section id="about" className="w-full bg-[#F7F9FC] py-16 sm:py-20 lg:py-24">
      {/* 1. Added a full-width background wrapper (bg-[#F8F9FA] or similar light shade) */}
      
      {/* 2. Constrained inner content for better reading width */}
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        
        {/* Adjusted H2 size to match the bold, clean look of the design */}
        <h2 className="text-center font-display text-[32px] font-bold leading-none text-fi-ink sm:text-[40px] lg:text-[44px]">
          About Us
        </h2>

        {/* Increased gap between columns for more breathing room */}
        <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          
          {/* 
            LEFT COLUMN 
            - Removed text-xl & font-display. 
            - Set text to ~17px/18px with a softer gray color for readability.
          */}
          <div className="flex flex-col gap-6 text-[17px] font-normal leading-[1.6] text-[#555555] sm:text-[18px]">
            <p>
              We are building intelligent tools that help hiring teams work smarter, faster, and more
              efficiently. Our AI-powered platform is designed to support HR professionals by automating
              the early stages of candidate screening and with that, reducing manual workload and
              allowing teams to focus on what truly matters: people.
            </p>
            <p>
              By combining advanced artificial intelligence with practical HR workflows, we streamline
              the process of reviewing applications, identifying top candidates, and ensuring a
              consistent and fair initial evaluation. Our solution saves time, reduces operational
              costs, and improves the overall hiring experience for both recruiters and applicants.
            </p>
          </div>

          {/* 
            RIGHT COLUMN 
            - Same body text styling as left column.
          */}
          <div className="flex flex-col gap-8 text-[17px] font-normal leading-[1.6] text-[#555555] sm:text-[18px]">
            <div>
              {/* Increased subheading size (text-[22px]) and made it bold */}
              <h3 className="mb-2 font-display text-[22px] font-semibold text-fi-ink sm:text-[24px]">
                Our Mission
              </h3>
              <p>
                Our mission is to empower HR teams with intelligent technology that simplifies
                recruitment without losing the human touch. We aim to eliminate repetitive tasks,
                reduce bias in early screening, and enable faster, data-driven hiring decisions.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-[22px] font-semibold text-fi-ink sm:text-[24px]">
                Our Vision
              </h3>
              <p>
                We envision a future where recruitment is seamless, efficient, and accessible—where AI
                and human expertise work together to unlock potential. Our goal is to become a trusted
                partner for organizations worldwide, transforming how companies discover, evaluate, and
                connect with talent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}