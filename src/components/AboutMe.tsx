import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className="my-20">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/TranTheDang.jpg"
          alt="about-image"
          width={500}
          height={500}
        />
        <div>
          <h2>About me</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ea
            explicabo eligendi sint cum dolore ex laudantium. Voluptatem est
            nemo neque natus autem esse perferendis, tempore iure alias,
            cupiditate iusto!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
