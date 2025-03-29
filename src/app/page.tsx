


// import Navbar from "@/components/navbar";

// import astronaut from "../../public/svg/astronaut.svg";
// import Image from "next/image";

// function Page() {
//   return (
//     <>
//       <Navbar />

//       <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
//         {/* Astronaut Image */}
//         <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
//           <Image
//             src={astronaut}
//             className="max-w-[300px] lg:max-w-[400px] animate-float"
//             alt="Astronaut exploring knowledge"
//           />
//         </div>

//         {/* Text Content */}
//         <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6">
//           <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
//             🚀 Find Your <span className="text-blue-500">Next Opportunity</span>{" "}
//             & Elevate Your Career!
//           </h1>

//           <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
//             Explore top job listings, connect with leading companies, and take
//             the next step in your professional journey—all in one place!
//           </p>

//           {/* CTA Button */}
//           <div className="mt-6">
//             <button className="px-4 py-2 bg-greenish-500 hover:bg-greenish-300 cursor-pointer border text-white text-center font-semibold rounded-lg transition-colors hover:text-black hover:bg-white">
//               Start Applying Now
//             </button>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Page;

import Navbar from "@/components/navbar";
import astronaut from "../../public/svg/astronaut.svg";
import Image from "next/image";

function HomePage() {
  return (
    <>
      <Navbar />

      <section className="h-screen flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-6 lg:px-20 bg-gradient-to-b from-gray-900 to-black">
        {/* Astronaut Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <Image
            src={astronaut}
            className="max-w-[300px] lg:max-w-[400px] animate-float"
            alt="Astronaut representing exploration of knowledge"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0 space-y-6">
          <h1 className="text-3xl lg:text-5xl font-bold text-white leading-tight">
            Empower Your Exam Journey
          </h1>

          <p className="text-gray-300 text-lg lg:text-xl leading-relaxed">
            Our platform bridges the gap between institutions and students. Institutions can easily create and manage exams, while students can register and take these exams with confidence.
          </p>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-colors">
              Create Exam (Institutions)
            </button>
            <button className="px-4 py-2 bg-green-600 hover:bg-green-500 text-white font-semibold rounded-lg transition-colors">
              Register &amp; Take Exam (Students)
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default HomePage;

