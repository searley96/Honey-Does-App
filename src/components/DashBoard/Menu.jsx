import React from "react";
import "./Menu.css";
import Logo from "../img/Logo.webp";
import {
  MdCleaningServices,
  GiVacuumCleaner,
  IoHomeOutline,
  TbHistory,
  FaTasks,
} from "react-icons/fa";

function Menu() {
  return (
    <menu>
      <img src={Logo} alt=" " />

      <ul id="mainMenu">
        <Icon icon={<MdCleaningServices />} />
        <Icon icon={<GiVacuumCleaner />} />
        <Icon icon={<IoHomeOutline />} />
        <Icon icon={<TbHistory />} />
        <Icon icon={<FaTasks />} />
      </ul>

      <ul className="lastMenu">
        <Icon icon={<BsClockHistory />} />
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
