"use client";
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Anjali Verma",
    body: "The platform has truly transformed my career. The mentors are knowledgeable and always willing to help.",
    img: "/assests/image/user-1.png",
    username: "AnjaliVerma@gmail.com",
  },
  {
    name: "Rajesh Mehta",
    body: "I had an amazing experience with GuideX. The mentors provided invaluable guidance and support.",
    img: "/assests/image/user-2.png",
    username: "RajeshMehta@gmail.com",
  },
  {
    name: "Simran Kaur",
    body: "The site is user-friendly, and the mentors are top-notch. I've learned so much in a short time.",
    img: "/assests/image/user-3.png",
    username: "SimranKaur@gmail.com",
  },
  {
    name: "Amitabh Singh",
    body: "GuideX connected me with mentors who genuinely cared about my growth. Highly recommend this platform.",
    img: "/assests/image/user-4.png",
    username: "AmitabhSingh@gmail.com",
  },
  {
    name: "Rajesh Mehta",
    body: "I had an amazing experience with GuideX. The mentors provided invaluable guidance and support.",
    img: "/assests/image/user-2.png",
    username: "RajeshMehta@gmail.com",
  },
  {
    name: "Simran Kaur",
    body: "The site is user-friendly, and the mentors are top-notch. I've learned so much in a short time.",
    img: "/assests/image/user-3.png",
    username: "SimranKaur@gmail.com",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

const Testimonial = () => {
  // useEffect(() => {
  //   // Any client-only setup logic goes here
  // }, []);

  return (
    <div className="mx-8">
      <div className="container mx-auto p-6 mt-10 mb-10 bg-muted-gray rounded-lg shadow-md border py-20">
        <div className="text-center space-y-4">
          <div className="inline-block rounded-lg bg-gray-200 px-3 py-1 text-sm">
            What Our Mentees Say
          </div>
          <h2 className="text-3xl font-bold sm:text-5xl">
            Hear From Our Satisfied Mentees
          </h2>
          <p className="text-lg text-gray-600">
            Hear from our satisfied Mentees about their experiences with our
            products and services.
          </p>
        </div>

        {/* card */}
        <div className="mt-10">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          {/* <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
