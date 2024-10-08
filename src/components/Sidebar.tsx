"use client";

import Link from "next/link";
import React, { useState, useContext } from "react";
import { RxDashboard } from "react-icons/rx";
import { GrSchedules } from "react-icons/gr";
import { BiTask } from "react-icons/bi";
import { GoProjectRoadmap } from "react-icons/go";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import Image from "next/image";
import { SidebarContext } from "./SidebarContext";

const sidebarItems = [
  {
    name: "Dashboard",
    href: "/dashboard/",
    icon: RxDashboard,
  },
  {
    name: "Task",
    href: "/dashboard/",
    icon: BiTask,
  },
  {
    name: "Projects",
    href: "/dashboard/",
    icon: GoProjectRoadmap,
  },
  {
    name: "Schedule",
    href: "/dashboard/",
    icon: GrSchedules,
  },
];

const Sidebar = () => {
  const { isCollapsedSidebar, toggleSidebarCollappseHandle } =
    useContext(SidebarContext);
  const [selectedItem, setSelectedItem] = useState("Dashboard");

  const handleItemClick = (name: string) => {
    setSelectedItem(name);
  };
  return (
    <div className="sidebar__wrapper">
      <button className="btn" onClick={toggleSidebarCollappseHandle}>
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside className="sidebar" data-collapse={isCollapsedSidebar}>
        <div className="sidebar__top">
          <Image
            width={80}
            height={80}
            src="/logo.png"
            className="sidebar__logo"
            alt=""
            style={{ objectFit: "contain" }}
          />
        </div>
        <ul className="sidebar__list">
          {sidebarItems.map(({ name, href, icon: Icon }) => (
            <li
              className="sidebar__item"
              key={name}
              onClick={() => handleItemClick(name)}
            >
              <Link
                href={href}
                className={`sidebar__link ${
                  selectedItem === name ? "selected" : ""
                }`}
              >
                <span
                  className={`sidebar__icon ${
                    selectedItem === name ? "selected" : ""
                  }`}
                >
                  <Icon></Icon>
                </span>
                <span className="sidebar__name">{name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;
