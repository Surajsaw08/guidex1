"use client";

import Image from "next/image";
import Mentorcard from "./Mentorcard";

import Contact from "./Contact";
import { useRouter } from "next/navigation";
import { CoolMode } from "@/components/magicui/cool-mode";
import FlipText from "@/components/magicui/flip-text";
import { cn } from "@/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import Testimonial from "./Testimonial.jsx";
const Homepage = () => {
  const router = useRouter();

  const handleMentor = () => {
    router.push("/mentor");
  };

  const handlementee = () => {
    router.push("/mentee");
  };
  return (
    <div className="mx-8">
      <main className="flex-1 px-6">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container mx-auto grid gap-4 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/assests/image/placeholder.jpg"
              width={650}
              height={410}
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              priority
            />
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Unlock Your Potential with{" "}
                  <span>
                    <FlipText
                      word="GuideX"
                      className="text-6xl font-bold text-primary"
                    />
                  </span>
                </h1>

                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Connect with experienced mentors, achieve your career goals,
                  and grow your skills.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <CoolMode>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    onClick={handleMentor}
                  >
                    Become a Mentor
                  </button>
                </CoolMode>
                <CoolMode>
                  <button
                    className="inline-flex h-10 items-center justify-center rounded-md  bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                    href="#"
                    onClick={handlementee}
                  >
                    Find a Mentor
                  </button>
                </CoolMode>
              </div>
            </div>
          </div>
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]"
            )}
          />
        </section>

        {/* <Particles
          className="absolute inset-0"
          quantity={100}
          ease={80}
          color="black"
          refresh
        /> */}

        <section className="w-full py-12 md:py-24 lg:py-32 rounded-3xl  bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Mentor Profiles
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Find the Perfect Mentor for You
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our directory of experienced mentors across various
                  industries. Find the right mentor to guide you on your career
                  journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <img
                src="/assests/image/mentor_profile.jpg"
                width="550"
                height="310"
                alt="Mentor Profiles"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Diverse Expertise</h3>
                      <p className="text-muted-foreground">
                        Our mentors come from a wide range of industries and
                        backgrounds, ensuring you find the right guidance.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">
                        Personalized Matching
                      </h3>
                      <p className="text-muted-foreground">
                        Our platform uses advanced algorithms to match you with
                        mentors based on your specific needs and goals.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold">Flexible Scheduling</h3>
                      <p className="text-muted-foreground">
                        Book mentoring sessions at your convenience, with
                        options for in-person, virtual, or hybrid meetings.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Mentorcard></Mentorcard>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Homepage;
