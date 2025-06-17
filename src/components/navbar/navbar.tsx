'use client'
import Link from "next/link";
import Links from "./links/links";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { LanguageSwitcher } from "./language-switcher";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current && 
        buttonRef.current && 
        !menuRef.current.contains(event.target as Node) && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="h-16 bg-white border-b border-gray-100 shadow-sm relative z-50">
      <div className="mx-auto h-full flex items-center justify-between px-4 sm:px-6">
        <div className="flex items-center space-x-4">
          <Image src="/visa.ico" alt="logo" width={32} height={32} />
          <Link 
            href="/" 
            className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            AU-500-visa-dashboard
          </Link>
        </div>
        
        {/* 桌面端导航 */}
        <div className="hidden md:flex items-center space-x-4">
          <Links />
          <LanguageSwitcher />
        </div>

        {/* 移动端汉堡菜单按钮 */}
        <div className="md:hidden flex items-center space-x-2">
          <LanguageSwitcher />
          <button 
            ref={buttonRef}
            className="p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* 移动端下拉菜单 */}
      <div 
        ref={menuRef}
        className={`md:hidden absolute w-full bg-white border-b border-gray-100 shadow-sm transition-all duration-300 ease-in-out z-50 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          top: isOpen ? '4rem' : '-100%',
        }}
      >
        <div className="px-4 py-4">
          <Links />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
