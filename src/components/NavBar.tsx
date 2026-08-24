import NavbarMenuItems from '@/data/navbarData'
import type { NavbarMenuItem } from '@/types/navbar'

import { HiMiniTrophy } from "react-icons/hi2";
import { CiSearch } from "react-icons/ci";

const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="flex items-center space-x-4">
          {/* Logo Section */}
          <div className="text-xl font-bold">tourney</div>

          {/* Menu Section */}
          {NavbarMenuItems.map((item: NavbarMenuItem) => (
            <a key={item.id} href={item.link} className="text-white font-bold px-4 py-2 hover:bg-gray-700 rounded">
              {item.name}
            </a>
          ))}
          
          {/* Icons Section */}
          <CiSearch />
          <HiMiniTrophy />

          {/* Mobile Hamburger Section */}

        </div>
      </nav>

      {/* Mobile Section */}
    </>
    
  )
};

export default NavBar;

