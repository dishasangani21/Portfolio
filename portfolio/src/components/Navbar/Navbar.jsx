import React, { useState } from "react";
import "./navbar.css";
import { RiMenu3Line } from "react-icons/ri";
import { RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <nav className=" gradient__back">
        <div className="nav__container">
          <motion.div
            className="nav__logo"
            animate={{ x: [-200, 0] }}
            transition={{ duration: 2 }}
          >
            <h2>Di</h2>
            <span>sha</span>
          </motion.div>
          <motion.div
            className="nav__right"
            animate={{ x: [200, 0] }}
            transition={{ duration: 2 }}
          >
            <div className="nav__links">
              <ul>
                <li>
                  <Link
                    to="/"
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    onClick={() => {
                      setToggleMenu(false);
                    }}
                  >
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
          </motion.div>
          <div className="nav__menu-container">
            {toggleMenu ? (
              <RiCloseLine
                color="#fff"
                size={27}
                onClick={() => {
                  setToggleMenu(false);
                }}
              />
            ) : (
              <RiMenu3Line
                color="#fff"
                size={27}
                onClick={() => {
                  setToggleMenu(true);
                }}
              />
            )}

            {toggleMenu && (
              <div className="nav__menu-links">
                <ul>
                  <li>
                    <Link
                      to="/"
                      onClick={() => {
                        setToggleMenu(false);
                      }}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      onClick={() => {
                        setToggleMenu(false);
                      }}
                    >
                      Projects
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
