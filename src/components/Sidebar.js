import Link from "next/link";
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import { useContext } from "react";
import { SidebarContext } from "../context/SliderContext";
import { useRouter } from "next/router";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

const sidebarItems = [
  {
    name: "Discussion Forum",
    href: "/",
  },
  {
    name: "Market Stories",
    href: "/marketStories",
   
  },
  {
    name: "Sentiment",
    href: "/sentiment",
  },
  {
    name: "Market",
    href: "/market",
  },
  {
    name: "Sector",
    href: "/sector",
  },
  {
    name: "Watchlist",
    href: "/watchlist",
  },
  {
    name: "Events",
    href: "/events",
  },
  {
    name: "News/Interview",
    href: "/news",
  },
];

const Sidebar = () => {
  const router = useRouter();
  const { isCollapsed, toggleSidebarcollapse } = useContext(SidebarContext);

  return (
    <div className={`sidebar__wrapper bg-sky-900 text-white relative ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
      <button className="btn bg-sky-900 text-white absolute top-72 -right-3 h-28 flex items-center justify-end translate-x-1/2 cursor-pointer" onClick={toggleSidebarcollapse}>
        {isCollapsed ? <ArrowRightIcon sx={{fontSize: 36}}/> : <ArrowLeftIcon sx={{fontSize: 36}} />}
      </button>
      <aside className="sidebar w-72 h-screen" data-collapse={isCollapsed}>
        <div className="sidebar__top flex justify-between gap-5 items-center p-4 py-9">
          <div className="personInfo flex flex-row items-center gap-2">
            <PersonRoundedIcon sx={{ fontSize: 36 }}/>
            <p className="sidebar__logo-name">Hello, User</p>
          </div>
          <div>
            <NotificationsIcon sx={{ fontSize: 32 }}/>
          </div>
        </div>
        <hr />
        <ul className="sidebar__list list-style-none p-4 px-6">
          {sidebarItems.map(({ name, href }) => {
            return (
              <li className="sidebar__item p-1" key={name}>
                <Link
                  className={`sidebar__link ${
                    router.pathname === href ? "sidebar__link--active bg-sky-950 p-1" : ""
                  }`}
                  href={href}
                >
                  <span className="sidebar__name">{name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
};

export default Sidebar;

