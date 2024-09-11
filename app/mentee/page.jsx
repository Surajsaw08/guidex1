"use client";
import React from "react";
import Image from "next/image";
import FlipText from "@/components/magicui/flip-text";
import DotPattern from "@/components/magicui/dot-pattern";
import { cn } from "@/lib/utils";
import { domain, mentors } from "@/constant";
import { useState } from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const [activeCategory, setActiveCategory] = useState("Engineering");
  const [showAll, setShowAll] = useState(false);

  const handleClick = (category) => {
    setActiveCategory(category);
  };

  // this to filter the category of mentor
  const filteredMentors = mentors.filter(
    (candidate) => candidate.field === activeCategory
  );

  // if mentor in that category if greater then 4
  const mentorsToShow = showAll ? filteredMentors : filteredMentors.slice(0, 4);

  const handleAllmentors = () => {
    router.push("/allmentors");
  };

  const handleDomainClick = (domainName) => {
    router.push(`/domain/${domainName}`);
  };

  return (
    <div className="mx-16">
      <main className="flex-1 px-6">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto grid gap-4 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/assests/image/mentee-placeholder.jpg"
              width={650}
              height={410}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              priority
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hello
                  <span>
                    <FlipText
                      word="Yash !"
                      className="text-6xl font-bold text-primary"
                    />
                  </span>
                </h1>

                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Supercharge your career with Guidex and Start Making Progress
                  with Mentorship in all field you want . Get connect with
                  mentor and start your progress journey.Land your dream job,
                  role, and company faster than ever
                </p>
              </div>
            </div>
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>

        <div className="w-full h-0.5 bg-gray-200"></div>

        <section className="w-full py-12 ">
          <div className="flex  items-center justify-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tighter text-primary">
                You are just 3 Step away!{" "}
              </h1>
              <p className="">
                Follow these three simple steps to get started with Mentorship{" "}
              </p>
            </div>
          </div>

          <div className="flex  gap-2 my-20 items-center justify-evenly">
            <div className="border p-14 rounded w-full ">
              <div className="bg-primary p-2 w-12 flex items-center justify-center text-white font-bold rounded-md text-2xl">
                1
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">
                    Find your ideal Mentor
                  </h1>
                  <p>
                    Browse from 1000+ verified mentor and get to choose ideal
                    mentor according to your perference and assperation
                  </p>
                  <button className="border px-4 py-2 rounded-md font-medium">
                    Find your mentor
                  </button>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className="bg-primary p-2 w-12 flex items-center justify-center text-white font-bold rounded-md text-2xl">
                2
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">
                    Book a free Trail session
                  </h1>
                  <p>
                    Browse from 1000+ verified mentor and get to choose ideal
                    mentor according to your perference and assperation
                  </p>
                  <button className="border px-4 py-2 rounded-md font-medium">
                    Book a FREE trail
                  </button>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className="bg-primary p-2 w-12 flex items-center justify-center text-white font-bold rounded-md text-2xl">
                3
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">
                    Start 1:1 mentornship
                  </h1>
                  <p>
                    Browse from 1000+ verified mentor and get to choose ideal
                    mentor according to your perference and assperation
                  </p>
                  <button className="border px-4 py-2 rounded-md font-medium ">
                    Start preparing
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-0.5 bg-gray-200"></div>
        {/* mentors */}

        <section>
          <div className="mx-7 ">
            <div className="container mx-auto p-6 mt-10 mb-10  bg-muted-gray rounded-lg shadow-md border py-20">
              <div className="text-center space-y-4 px-10">
                <h2 className="text-3xl font-semibold sm:text-3xl">
                  100+ Mentors are just trail session away
                </h2>
                <p className="text-lg text-gray-600">
                  Choose your ideal mentor and get started with session
                </p>
              </div>

              <div className="w-full h-0.5 bg-gray-200 mt-5"></div>

              <div className="flex items-center justify-center m-5 border">
                <div className="my-10 flex justify-center w-full">
                  <div className="flex space-x-1.5">
                    <button
                      className={`rounded border px-4 py-2 ${
                        activeCategory === "Engineering"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleClick("Engineering")}
                    >
                      Engineering
                    </button>
                    <button
                      className={`rounded border px-4 py-2 ${
                        activeCategory === "Data Science"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleClick("Data Science")}
                    >
                      Data Science
                    </button>
                    <button
                      className={`rounded border px-4 py-2 ${
                        activeCategory === "Business"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleClick("Business")}
                    >
                      Business
                    </button>
                    <button
                      className={`rounded border px-4 py-2 ${
                        activeCategory === "Product"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleClick("Product")}
                    >
                      Product
                    </button>
                    <button
                      className={`rounded border px-4 py-2 ${
                        activeCategory === "Career"
                          ? "bg-primary text-white"
                          : ""
                      }`}
                      onClick={() => handleClick("Career")}
                    >
                      Career
                    </button>
                  </div>
                </div>
              </div>
              <div className="w-full h-0.5 bg-gray-200 mt-5"></div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 px-12 py-12">
                  {mentorsToShow
                    .filter((candidate) => candidate.field === activeCategory)
                    .map((candidate, index) => (
                      <div
                        key={index}
                        className="bg-gray-50 rounded-lg p-4 shadow border max-w-[280px]"
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
                          <h4 className="text-base font-semibold">
                            Experience
                          </h4>
                          <p className="text-gray-600">
                            {candidate.experience}
                          </p>
                        </div>
                        <div className="mt-5">
                          <button className="border bg-primary text-white px-4 py-2 rounded">
                            Book a session
                          </button>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Show the "Show More" button only if there are more than 4 mentors */}
                {mentors.length > 4 && (
                  <div className="text-center mt-6">
                    <button
                      onClick={() => setShowAll(!showAll)}
                      className="bg-primary text-white px-4 py-2 rounded"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>

              <div className="flex justify-end mr-5">
                <button
                  className="border rounded-md font-medium  px-4 py-2 "
                  onClick={handleAllmentors}
                >
                  See all Mentors
                </button>{" "}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-0.5 bg-gray-200"></div>

        {/* // what we offer */}
        <section className="w-full py-12 ">
          <div className="flex  items-center justify-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-semibold tracking-tighter text-primary">
                No need to Struggle Alone Anymore
              </h1>
              <p className="">Here what we offers</p>
            </div>
          </div>

          <div className="grid grid-cols-3 mt-10 ">
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/video-camera.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">1:1 Live Session</h1>
                  <p>
                    Never question your progress with frequent One on One
                    session.
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/messege.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">
                    Unlimited Chat with Mentor
                  </h1>
                  <p>Doubt? Get the right advice from your mentor via Chat.</p>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/clipboard.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">
                    Task & Curated Resources
                  </h1>
                  <p>Yes! You will be certified for this mentorship program.</p>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/clock.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">Regular Followups</h1>
                  <p>Stay motivated and consistent with regular follow-ups.</p>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/rocket.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">Job Referrals</h1>
                  <p>
                    Get Referrals from mentor community to top product and
                    service based companies.
                  </p>
                </div>
              </div>
            </div>
            <div className="border p-14 rounded w-full ">
              <div className=" p-2 w-12 flex items-center justify-center border rounded-md ">
                <Image
                  src="/assests/icons/certificate.png"
                  width={40}
                  height={40}
                ></Image>
              </div>
              <div className="mt-5">
                <div className="space-y-4">
                  <h1 className="text-2xl font-semibold ">Certified</h1>
                  <p>Yes! You will be certified for this mentorship program.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-0.5 bg-gray-200"></div>

        {/* all domain */}
        <section>
          <div className="mx-7 ">
            <div className="container mx-auto p-6 mt-10 mb-10  bg-muted-gray rounded-lg shadow-md border py-20">
              <div className="text-center space-y-4 px-10">
                <h2 className="text-3xl font-semibold sm:text-3xl">
                  All Domains and Industries are covered
                </h2>
                <p className="text-lg text-gray-600">
                  Our Mentor are loved to guide you in any field you're
                  passionate about
                </p>
              </div>

              <div>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 px-12 py-12">
                  {domain.map((domain, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-lg p-4 shadow border max-w-[280px] flex gap-8 "
                      onClick={() => handleDomainClick(domain.name)}
                    >
                      <div className="border rounded-md">
                        <Image
                          className=""
                          height={40}
                          width={40}
                          src={domain.img}
                        ></Image>
                      </div>
                      <div className>
                        <h1 className="font-semibold">{domain.name}</h1>
                        <p className="font-normal text-gray-600 text-sm">
                          Explore {domain.count}+ mentors
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Show the "Show More" button only if there are more than 4 mentors */}
              </div>
            </div>
          </div>
        </section>

        <div className="w-full h-0.5 bg-gray-200"></div>
      </main>
    </div>
  );
};

export default page;
