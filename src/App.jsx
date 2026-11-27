function NavBar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 md:px-20 h-20 flex items-center justify-between">
        <a href="/" className="text-2xl font-bold text-[#26231E] tracking-tight">
          hh.
        </a>

        <div className="flex items-center space-x-3">
          <button className="px-8 py-2.5 rounded-full border border-[#75716B] text-[#26231E] text-sm font-medium hover:bg-gray-50">
            Log in
          </button>
          <button className="px-8 py-2.5 rounded-full bg-[#26231E] text-white text-sm font-medium hover:bg-black/80">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="w-full bg-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          <div className="lg:col-span-4 text-center lg:text-right space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#26231E] leading-tight">
              Stay <br className="hidden lg:inline" />
              Informed, <br />
              Stay Inspired
            </h1>
            <p className="text-sm md:text-base text-[#75716B] leading-relaxed">
              Discover a World of Knowledge at Your Fingertips. Your Daily Dose of Inspiration and Information.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-center">
            <img
              src="/img/26-03-20 Stu-2 Day 2-01003.jpg"
              alt="Author with a cat"
              className="w-full max-w-[340px] h-[440px] rounded-2xl object-cover object-top"
            />
          </div>

          <div className="lg:col-span-4 text-left space-y-3">
            <span className="text-xs font-medium text-[#75716B] uppercase tracking-wider">
              -Author
            </span>
            <h2 className="text-2xl font-bold text-[#26231E]">
              Tiwat S.
            </h2>
            <div className="text-sm text-[#75716B] space-y-4 leading-relaxed">
              <p>
              I am a photographer who captures moments through unconventional methods and creates visual art. Beyond photography, I am passionate about exploring and learning new things, even in completely different fields.
              </p>
              <p>
              Currently, I’m interested in programming, so I’m learning how to code at TechUp.

              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <NavBar />
      <main>
        <HeroSection />
      </main>
    </div>
  );
}

export default App;
