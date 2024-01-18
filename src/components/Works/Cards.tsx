"use client";
import {
  useState,
  useEffect,
  useRef,
  MouseEventHandler,
  ReactNode,
} from "react";
export default function Card(props: {
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
      className="card-wrap group mx-7 my-4 cursor-pointer z-10"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
    >
      <div
        className="card relative w-[320px] h-[240px] bg-gray-900 bg-opacity-50 
        overflow-hidden "
        style={cardStyle}
      >
        <div
          className="card-bg absolute -top-5 -left-5 w-[120%] h-[120%] p-5 opacity-55 
          bg-no-repeat bg-center bg-cover"
          style={{ ...cardBgTransform, ...cardBgImage }}
        ></div>
        <div className="card-info w-full p-5 absolute bottom-0 text-white">
          <h1 className="mt-2 relative z-10 font-bold text-[30px]">
            {props.header}
          </h1>
          <p className="mt-2 leading-6 opacity-0 relative z-10 text-xs">
            {props.content}
          </p>
        </div>
      </div>
    </div>
  );
}
