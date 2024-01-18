import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
const index = () => {
  return (
    <footer className="m-10">
      <div></div>
      <div className="px-2 md:px-20">
        <hr />
      </div>
      <div className="flex flex-row justify-between p-2 md:px-20">
        <p>© Dyno Tran 2024 </p>
        <div className="flex flex-row gap-4">
          <a href="https://www.facebook.com/dynotran999/">
            <FaFacebookSquare className="size-6" />
          </a>

          <a href="https://github.com/tranthedang">
            <FaGithubSquare className="size-6" />
          </a>
          <a href="https://www.linkedin.com/in/dynotran999/">
            <FaLinkedin className="size-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default index;
