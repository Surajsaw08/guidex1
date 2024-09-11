import React from "react";

import { BorderBeam } from "@/components/magicui/border-beam";

const Mentorcard = () => {
  const candidates = [
    {
      name: "Er. Priya Sharma",
      career: "Data Scientist",
      experience:
        "Priya has over 8 years of experience in the data science field, specializing in machine learning and big data analytics. She is highly regarded as a top mentor on GuideX.",
      image: "/assests/image/user-1.png",
    },
    {
      name: "Er. Rohan Kumar",
      career: "Cybersecurity Expert",
      experience:
        "Rohan has over 12 years of experience in cybersecurity, protecting critical infrastructures and securing sensitive data. He is a sought-after mentor on GuideX.",
      image: "/assests/image/user-2.png",
    },
    {
      name: "Er. Ayesha Singh",
      career: "Product Manager",
      experience:
        "Ayesha has over 7 years of experience in product management, successfully leading product development for several high-profile companies. She is a leading mentor on GuideX.",
      image: "/assests/image/user-3.png",
    },
    {
      name: "Er. Vikram Patel",
      career: "AI Specialist",
      experience:
        "Vikram has over 9 years of experience in artificial intelligence, focusing on developing cutting-edge AI solutions. He is an expert mentor on GuideX.",
      image: "/assests/image/user-4.png",
    },
  ];

  return (
    <div className="mx-7 ">
      <div className="container mx-auto p-6 mt-10 mb-10  bg-muted-gray rounded-lg shadow-md border py-20">
        <div className="text-center space-y-4 px-10">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
            Meet Our Top Mentors
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Experienced Mentors to Guide Your Journey
          </h2>
          <p className="text-lg text-gray-600">
            Our mentors come from diverse backgrounds and have a wealth of
            experience to share. Get to know some of our top mentors and how
            they can help you achieve your goals.
          </p>
        </div>

        {/* mentor card */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 px-12 py-12">
          {candidates.map((candidate, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-4 shadow border max-w-[280px] "
            >
              <div className="flex flex-row items-center gap-2">
                <img
                  className="w-24 h-24 rounded-full object-cover"
                  alt="Mentor Avatar"
                  src={candidate.image}
                />
                <div>
                  <h3 className="text-base font-semibold">{candidate.name}</h3>
                  <p className="text-gray-500 text-base ">{candidate.career}</p>
                </div>
              </div>
              <div className="border-t border-gray-300 my-4"></div>
              <div className="space-y-2">
                <h4 className="text-base font-semibold">Experience</h4>
                <p className="text-gray-600">{candidate.experience}</p>
              </div>
              <BorderBeam size={290} duration={12} delay={9} />
            </div>
          ))}

          {/* .. */}
        </div>
      </div>
    </div>
  );
};

export default Mentorcard;
