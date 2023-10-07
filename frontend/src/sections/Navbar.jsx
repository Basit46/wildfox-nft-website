import React, { useEffect, useRef } from "react";
import logo from "../assets/logo.svg";
import { Link as ScrollLink } from "react-scroll";
import gsap from "gsap";
import { FaBars } from "react-icons/fa";

const Navbar = ({ isOpen, setIsOpen }) => {
  const navItems = useRef([]);

  useEffect(() => {
    navItems.current.forEach((item) =>
      gsap.fromTo(item, { yPercent: 100 }, { yPercent: 0, duration: 0.5 })
    );
  }, []);
  return (
    <nav
      id="nav"
      className="w-full bg-[#fbbf2d] px-[27px] py-[24px] flex justify-between items-center"
    >
      <img
        ref={(e) => navItems.current.push(e)}
        src={logo}
        className="w-[250px] h-[72.05px] z-[5]"
        alt="logo"
      />

      <ul
        className={`fixed z-[4] ${
          isOpen ? "top-0" : "top-[-130%]"
        } left-0 bottom-0 duration-500 w-full xmd:w-fit h-[100vh] xmd:h-fit bg-[#f0ecd6] xmd:bg-transparent xmd:static flex flex-col xmd:flex-row justify-center xmd:justify-normal gap-[45px] items-center`}
      >
        <li ref={(e) => navItems.current.push(e)}>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="about"
            duration={1000}
            smooth="true"
          >
            ABOUT
          </ScrollLink>
        </li>
        <li ref={(e) => navItems.current.push(e)}>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="roadmap"
            duration={1000}
            smooth="true"
          >
            ROADMAP
          </ScrollLink>
        </li>
        <li ref={(e) => navItems.current.push(e)}>
          <ScrollLink
            onClick={() => setIsOpen(false)}
            to="team"
            duration={1000}
            smooth="true"
          >
            TEAM
          </ScrollLink>
        </li>
        <li ref={(e) => navItems.current.push(e)}>
          <a
            onClick={() => setIsOpen(false)}
            href="https://twitter.com/Basit0282"
            target="blank"
          >
            FOLLOW US
          </a>
        </li>
      </ul>

      <div className="xmd:hidden mr-[5px] sm:mr-[40px] flex-1 flex justify-end">
        <FaBars
          onClick={() => setIsOpen((prev) => !prev)}
          className="text-[25px] z-[5] cursor-pointer"
        />
      </div>

      <button
        ref={(e) => navItems.current.push(e)}
        onClick={() => alert("Mint coming soon")}
        className="h-fit z-[5] bg-white border-black border-[3px] py-[16px] px-[34px] flex items-center gap-[8px] rounded-[8px]"
      >
        <p className="text-[14px] font-bold leading-[20px]">MINT NFT</p>{" "}
        <Arrow />
      </button>
    </nav>
  );
};

export default Navbar;

const Arrow = () => {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2516 10C12.3327 7.66942 13.6633 6.19835 16 5.95041L16 4.04959C13.6796 3.80165 12.3327 2.33058 12.2516 4.1814e-07L10.1421 0.495868C10.2882 2.19835 11.3267 3.58678 12.641 4.04959L-2.60101e-07 4.04959L-1.77013e-07 5.95041L12.641 5.95041C11.9757 6.16529 11.424 6.61157 10.9535 7.2562C10.4829 7.90083 10.2233 8.66116 10.1421 9.50413L12.2516 10Z"
        fill="#131315"
      />
    </svg>
  );
};
