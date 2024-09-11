import { mentors } from "@/constant";
import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <div className="mx-7 ">
          <div className="container mx-auto p-6 mt-10 mb-10  bg-muted-gray rounded-lg shadow-md border py-20">
            <div className="text-center space-y-4 px-10">
              <h2 className="text-3xl font-bold sm:text-3xl">
                Explore All Mentors from GuideX
              </h2>
            </div>

            {/* <div className="flex items-center justify-center m-5 border"></div> */}
            <div className="w-full h-0.5 bg-gray-200 mt-5"></div>

            <div>
              <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 px-12 py-12 ">
                {mentors.map((candidate, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-lg p-4 shadow border max-w-[280px] mt-10"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <img
                        className="w-24 h-24 rounded-full object-cover"
                        alt="Mentor Avatar"
                        src={candidate.image}
                      />
                      <div>
                        <h3 className="text-base font-semibold">
                          {candidate.name}
                        </h3>
                        <p className="text-gray-500 text-base">
                          {candidate.domain}
                        </p>
                      </div>
                    </div>
                    <div className="border-t border-gray-300 my-4"></div>
                    <div className="space-y-2">
                      <h4 className="text-base font-semibold">Experience</h4>
                      <p className="text-gray-600">{candidate.experience}</p>
                    </div>
                    <div className="mt-5">
                      <button className="border bg-primary text-white px-4 py-2 rounded">
                        Book a session
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
