/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";


/*************  ✨ Windsurf Command ⭐  *************/
/**
 * MobileMenu component renders a full-screen overlay menu that slides into view
 * when isMenuOpen is true. It contains navigation links to different sections
 * of the page and a button to close the menu. The menu's visibility and
 * interactivity are controlled by the isMenuOpen state. The setIsMenuOpen
 * function is used to update the menu's open/closed state.
 *
 * @param {boolean} isMenuOpen - Determines if the menu is open or closed.
 * @param {function} setIsMenuOpen - Function to update the isMenuOpen state.
 */

/*******  2b532dd2-38b0-4495-8f47-0c632006fa60  *******/


function MobileMenu({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={` fixed w-full top-0 left-0 bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center transition-all duration-300 gap-15 ease-in-out ${
        isMenuOpen
          ? "h-screen opacity-100 pointer-events-auto"
          : "h-0 opacity-0 pointer-events-none"
      } `}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      <a
        onClick={() => setIsMenuOpen(false)}
        href="#home"
        className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300 
            ${
              isMenuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
            }
            `}
      >
        Home
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#about"
        className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
      >
        About
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#projects"
        className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
      >
        Projects
      </a>
      <a
        onClick={() => setIsMenuOpen(false)}
        href="#contact"
        className={` text-2xl font-semibold text-white my-4 transform transition-transform duration-300  ${
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        } `}
      >
        Contact
      </a>
    </div>
  );
}

export default MobileMenu;
