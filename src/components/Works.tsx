"use client";
import {
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  ReactNode,
} from "react";
const datas = [
  {
    date: "Aug 2018",
    title: "Heading1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
  {
    date: "Dec 2021",
    title: "Heading2",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
  {
    date: "Oct 2023",
    title: "Heading3",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam ducimus ex suscipit tenetur praesentium nemo, eveniet rerum, in, voluptatum totam ratione deleniti a odit eos sit cumque quam aspernatur labore.",
  },
];
// Define the type for the props of the Card component

function Card(props: {
  dataImage: string;
  header: ReactNode;
  content: ReactNode;
}) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [mouseLeaveDelay, setMouseLeaveDelay] = useState<NodeJS.Timeout | null>(
    null
  );

  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      setWidth(cardRef.current.offsetWidth);
      setHeight(cardRef.current.offsetHeight);
    }
  }, []);

  const mousePX = mouseX / width;
  const mousePY = mouseY / height;

  const cardStyle = {
    transform: `rotateY(${mousePX * 30}deg) rotateX(${mousePY * -30}deg)`,
  };

  const cardBgTransform = {
    transform: `translateX(${mousePX * -40}px) translateY(${mousePY * -40}px)`,
  };

  const cardBgImage = {
    backgroundImage: `url(${props.dataImage})`,
  };

  const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (cardRef.current) {
      setMouseX(e.pageX - cardRef.current.offsetLeft - width / 2);
      setMouseY(e.pageY - cardRef.current.offsetTop - height / 2);
    }
  };

  const handleMouseEnter = () => {
    if (mouseLeaveDelay) {
      clearTimeout(mouseLeaveDelay);
    }
  };

  const handleMouseLeave = () => {
    setMouseLeaveDelay(
      setTimeout(() => {
        setMouseX(0);
        setMouseY(0);
      }, 1000)
    );
  };

  return (
    <div
      className="card-wrap"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div className="card" style={cardStyle}>
        <div
          className="card-bg"
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        <div className="card-info">
          {props.header}
          {props.content}
        </div>
      </div>
    </div>
  );
}

// Define the type for the props of the App component
const Works = () => {
  return (
    <section className="scroll-smooth my-20 w-full">
      {/* Job flow */}
      <div className="flex flex-col justify-center items-center ">
        <h2>Education & Jobs</h2>
        <div className="timeline w-[80%] h-auto max-w-max mt-7 md:mt-14 relative">
          <ul className="list-none">
            {datas.map((data, index) => (
              <li
                className="px-5 py-3 text-white mb-5 rounded-2xl md:w-1/2 md:relative
                md:odd:float-left md:odd:clear-right md:odd:-translate-x-[30px] md:odd:rounded-[20px] md:odd:rounded-tr-none
                md:even:float-right md:even:clear-left md:even:translate-x-[30px] md:even:rounded-[20px] md:even:rounded-tl-none"
                key={index}
              >
                <div className="timeline-content">
                  <h3 className="date font-light text-xs mb-3 tracking-[3px] md:absolute md:-top-5">
                    {data.date}
                  </h3>
                  <h1 className="font-medium text-2xl leading-8 mb-3">
                    {data.title}
                  </h1>
                  <p className="leading-7 text-sm font-light">{data.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/* Works charts */}
      <div className="flex flex-col justify-center items-center mt-32">
        <h2>Works</h2>
        <div className="container1">
          <Card
            dataImage="https://images.unsplash.com/photo-1479660656269-197ebb83b540?dpr=2&auto=compress,format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb&crop="
            header={<h1>Card One</h1>}
            content={<p>This is a card.</p>}
          />
          <Card
            dataImage="https://images.unsplash.com/photo-1479659929431-4342107adfc1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
            header={<h1>Card Two</h1>}
            content={<p>This is a card.</p>}
          />
          <Card
            dataImage="https://images.unsplash.com/photo-1479644025832-60dabb8be2a1?dpr=2&auto=compress,format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop="
            header={<h1>Card Three</h1>}
            content={<p>This is a card.</p>}
          />
          <Card
            dataImage="https://images.unsplash.com/photo-1479621051492-5a6f9bd9e51a?dpr=2&auto=compress,format&fit=crop&w=1199&h=811&q=80&cs=tinysrgb&crop="
            header={<h1>Card Three</h1>}
            content={<p>This is a card.</p>}
          />
          <Card
            dataImage="https://source.unsplash.com/WEQbe2jBg40/"
            header={<h1>Card Three</h1>}
            content={<p>This is a card.</p>}
          />
          <Card
            dataImage="https://source.unsplash.com/WEQbe2jBg40/"
            header={<h1>Card Three</h1>}
            content={<p>This is a card.</p>}
          />
        </div>
      </div>
    </section>
  );
};

export default Works;
