"use client";
import React from "react";
import { useRouter } from "next/navigation";

const Nav = () => {
  const router = useRouter();

  const handleHome = () => {
    router.push("/");
  };

  const navigation = [
    { id: 1, title: "Webinar", url: "#webinar" },
    { id: 2, title: "Book a session", url: "#book a session" },
    { id: 3, title: "Mentors", url: "#mentors" },
    { id: 4, title: "Contact", url: "#contact" },
  ];

  return (
    <div className="fixed top-0 left-0 w-full px-20 z-50 border-b border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm bg-n-8/90 backdrop-blur-sm">
      <div className="flex items-center px-4 lg:px-7.5 xl:px-5 py-1">
        <button onClick={handleHome}>
          <span className="block text-3xl font-bold text-n-1 xl:mr-8">
            GuideX
          </span>
        </button>

        <nav className="flex mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            {navigation.map((item) => (
              // Hide "Become a Mentor" link if on the mentee page
              <a
                href={item.url}
                key={item.id}
                className="block font-code text-2xl uppercase text-n-1 transition-colors hover:text-color-1 px-6 py-6 lg:text-xs lg:font-semibold lg:leading-5 xl:px-12"
              >
                {item.title}
              </a>
            ))}
          </div>
        </nav>

        <button className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Nav;
