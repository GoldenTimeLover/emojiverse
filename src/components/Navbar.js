import React from "react";
import Button from "./Button";

import logo1 from "../logo1.png";
import logo2 from "../logo2.png";
import logo3 from "../logo3.png";
const Navbar = ({ toggleShowSubmitModal, toggleAboutModal }) => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const [currMoji, setCurrMoji] = React.useState('🌍');

  React.useState(() => {
    const interval = setInterval(() => {
      const emojis = ['🌍', '🌎', '🌏'];
      setCurrMoji( emojis[Math.floor((Date.now() / 100) % emojis.length)]);
    }, 400);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-800    mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
              href=""
            >
              <div className="text-xl">

              <span>EM</span><span id="emoji">{currMoji}</span><span>JIVERSE</span>
              </div>
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars">👀</i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Button onClick={toggleShowSubmitModal}>
                  Submit Product 😊
                </Button>
              </li>
              <li className="nav-item">
                <Button onClick={toggleAboutModal}>About ❓</Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
