import React from "react";

const page = () => {
  return (
    <main
      id="scroll"
      className="w-full h-[100vh] flex flex-col overflow-y-scroll
       snap-mandatory snap-y"
    >
      <div
        className="min-w-[100vw] min-h-[100vh] flex justify-center items-center
        text-9xl text-black bg-green-400 snap-start"
      >
        1
      </div>
      <div
        className="min-w-[100vw] min-h-[100vh] flex justify-center items-center
        text-9xl text-black bg-blue-400 snap-start"
      >
        2
      </div>
      <div
        className="min-w-[100vw] min-h-[100vh] flex justify-center items-center
        text-9xl text-black bg-yellow-400 snap-start"
      >
        3
      </div>
      <div
        className="min-w-[100vw] min-h-[100vh] flex justify-center items-center
        text-9xl text-black bg-red-400 snap-start"
      >
        4
      </div>
    </main>
  );
};

export default page;
