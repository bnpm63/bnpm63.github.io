import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center py-20">
      <div className="mx-10 w-full max-w-screen-xl justify-center">
        {/* Navigation Bar */}
        <div className="bg-neutral-900 opacity-90 py-4 px-6 rounded-lg flex justify-center items-center w-full max-w-5xl mx-auto fixed top-5 left-0 right-0 z-50">
          <nav className="flex w-full justify-around px-4 sm:px-6 md:px-10 lg:px-20">
            <a href="#home" className="text-neutral-400 hover:text-white text-sm">
              Home
            </a>
            <a href="#about" className="text-neutral-400 hover:text-white text-sm">
              About
            </a>
            <a href="#projects" className="text-neutral-400 hover:text-white text-sm">
              Projects
            </a>
            <a href="#contact" className="text-neutral-400 hover:text-white text-sm">
              Contact
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="mt-10 text-center">
          <h1 className="text-4xl font-semibold text-white">Hi, I'm Benjamin</h1>
        </div>
      </div>
    </div>
  );
}
