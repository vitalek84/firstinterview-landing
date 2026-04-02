export function ContactSection() {
return (
    <section id="contact" className="w-full bg-[#1A61FF] py-8 text-white sm:py-10">
      
      {/* 
        Changed md:items-end to md:items-center. 
        This is what pulls the email up into the vertical middle!
      */}
      <div className="mx-auto flex max-w-[1380px] flex-col justify-between gap-10 px-4 sm:px-6 md:flex-row md:items-center lg:px-8">
        
        {/* Left Side: Logo & Text */}
        <div className="max-w-[650px]">
          
          {/* Logo Heading: "First" is normal, "Interview" is highly bolded */}
          <h2 className="mb-6 font-display text-[32px] tracking-tight sm:text-[36px]">
            <span className="font-normal">First</span>
            <span className="font-extrabold">Interview</span>
          </h2>
          
          {/* 
            Paragraph: Base text is font-light to make the bold parts pop. 
            Added inline <span> tags for the specific bolded phrases.
          */}
          <p className="text-[16px] font-light leading-[1.6] sm:text-[17px]">
            We built firstinterview.ai to help candidates practice and prepare for real interviews. Free. No credit card. Just 15 minutes.
          </p>

        </div>

        {/* Right Side: Email positioned correctly */}
        <div>
          <a 
            href="mailto:upport@firstinterview.ai" 
            className="text-[16px] font-medium transition-opacity hover:opacity-80 sm:text-[17px]"
          >
            support@firstinterview.ai
          </a>
        </div>

      </div>
    </section>
  )
}

