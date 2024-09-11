// "use client";
// import { quantum } from "ldrs";
// quantum.register();

// const Loading = () => {
//   return (
//     <div className="flex justify-center items-center h-screen w-screen">
//       <l-quantum size="185" speed="1.75" color="blue"></l-quantum>
//     </div>
//   );
// };

// export default Loading;

"use client";
import { quantum } from "ldrs"; // Importing normally, assuming quantum is exported this way
import { useEffect } from "react";

const Loading = () => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      quantum &&
      typeof quantum.register === "function"
    ) {
      quantum.register(); // Ensure register exists before calling it
    }
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <l-quantum size="185" speed="1.75" color="blue"></l-quantum>
    </div>
  );
};

export default Loading;
