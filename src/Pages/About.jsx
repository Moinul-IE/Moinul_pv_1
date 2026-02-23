import MyImage from '../assets/Image/moinulformal.jpg';
import '../index.css';

export default function About() {
  return (
  <div className="min-h-screen bg-black text-white px-4 sm:px-6 md:px-10 py-12 sm:py-20">
      
      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-1">About Me</h1>
      <p className="text-center text-gray-400 mb-10">
        Get to know me better
      </p>

  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">

        {/* LEFT — Image */}
        <div className="flex justify-center md:justify-start mb-6 md:mb-0">
          <img
            src={MyImage}
            alt="Moinul"
            className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-2xl object-cover shadow-[0_0_50px_rgba(239,68,68,0.6)] border border-white/10"
          />
        </div>
        {/* hand animation */}

        {/* Waving Hand */}
          <div className="w-2 h-2 m-auto -mt-14 flex justify-center md:justify-start">
                <span className='wave text-5xl'>Hi</span>
                <span className="wave text-5xl">👋</span>
             </div>


        {/* RIGHT — Content */}
          <div className="w-full max-w-xl mx-auto md:mx-0 bg-black/70 backdrop-blur-md mb-1 border border-white/10 rounded-xl p-6 md:p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Hi, I’m Moinul 👋
          </h2>

          <p className="text-gray-300 leading-relaxed mb-4">
            I’m a <span className="text-red-400 font-semibold">MERN Stack Developer</span>
            with a Bachelor’s degree in Computer Science. I enjoy building
            modern, responsive, and user-friendly web applications.
          </p>

          <p className="text-gray-300 leading-relaxed mb-6">
            I work mainly with React, Node.js, Express, and MongoDB.
            I also have basic experience with Python, MySQL, Java, and PHP.
            I love learning new technologies and improving my skills every day.
          </p>

          {/* Info */}
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
            <p><span className="text-white font-medium">Name:</span> Moinul</p>
            <p><span className="text-white font-medium">Degree:</span> BSc in CSE</p>
            <p><span className="text-white font-medium">Role:</span> MERN Developer</p>
            <p><span className="text-white font-medium">Location:</span> Malaysia</p>
          </div>

          {/* Button */}
          <div className="mt-8 me-auto text-center">
            <a
              href="/Contact"
              className="inline-block  bg-red-500 hover:bg-red-600 transition px-6 py-2 rounded-lg font-semibold"
            >
              Contact Me
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
