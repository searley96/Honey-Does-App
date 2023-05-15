import React, { useEffect } from "react";
import "./Menu.css";
//import Logo from "../img/Logo.webp";
import {
  MdAccountCircle,
  MdAssignment,
  MdExitToApp,
  MdLogin,
  MdCleaningServices,
  MdOutlineMarkUnreadChatAlt,
  MdLockClock,
} from "react-icons/md";

function Menu() {
  useEffect(() => {
    const mainMenuLi = document
      .getElementById("mainMenu")
      .querySelectorAll("li");

    function changeActive() {
      mainMenuLi.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");
    }

    mainMenuLi.forEach((n) => n.addEventListener("click", changeActive));
  }, []);
  return (
    <menu>
      <img src={""} alt=" " />

      <ul id="mainMenu">
        <Icon icon={<MdCleaningServices />} />
        <Icon icon={<MdAccountCircle />} />
        <Icon icon={<MdAssignment />} />
        <Icon icon={<MdLogin />} />
        <Icon icon={<MdExitToApp />} />
        <Icon icon={<MdOutlineMarkUnreadChatAlt />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<MdLockClock />} />
      </ul>
    </menu>
  );
}

const Icon = ({ icon }) => (
  <li>
    <a href="#">{icon}</a>
  </li>
);

export default Menu;
