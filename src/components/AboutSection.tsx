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
              We built firstinterview.ai to help candidates prepare for real interviews. Upload your CV, 
              answer questions out loud for 15 minutes, and get honest feedback on what you did well 
              and what to work on.
            </p>
            <p>
              The questions are tailored to your background and role, 
              so the practice feels like a real first-round interview. 
              Whether you are actively job hunting or just want to sharpen your interview skills, 
              this is a low-pressure way to get better. 
              Your practice also helps us improve the quality and accuracy of the AI over time.
            </p>
          </div>

          {/* 
            RIGHT COLUMN 
            - Same body text styling as left column.
          */}
          <div className="flex flex-col gap-8 text-[17px] font-normal leading-[1.6] text-[#555555] sm:text-[18px]">
            <div>
              {/* Increased subheading size (text-[22px]) and made it bold */}
              <h3 className="mb-2 font-display text-[22px] font-semibold text-[#555555] sm:text-[24px]">
                Our Mission
              </h3>
              <p>
                Help candidates walk into their next interview more prepared, 
                more confident, and more aware of how they come across.
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-display text-[22px] font-semibold text-[#555555] sm:text-[24px]">
                Our Vision
              </h3>
              <p>
                Make quality interview practice accessible to everyone, regardless of 
                where they are or what stage of their career they are in.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}