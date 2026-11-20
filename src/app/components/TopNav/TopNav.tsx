'use client';
import Link from 'next/link';
import { useState } from 'react';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { PiPhoneCall } from 'react-icons/pi';
import { adminContactSplit, LinkType, socialLinks } from '@/src/firebase/assets';
import { IoIosMenu } from 'react-icons/io';
import MiniBar from './miniBar';

const TopNav = () => {
  const [navToggled, setNavToggled] = useState(false);

  const toggleNav = () => {
    navToggled ? setNavToggled(false) : setNavToggled(true);
  }

  const navLinks: LinkType[] = [
    { tag: "home", href: "/", con: "home" },
    { tag: "about us", href: "/#about-us", con: "about us" },
    { tag: "contact us", href: "", con: "contact us" },
  ]


  return (
    <section id='hor' className='py-5'>
      <section className='grid grid-cols-3 md-screen:hidden'>
        <nav className='text-white flex gap-5'>
          {navLinks.map((item) => (
            <Link href={item.href} key={item.con} className='capitalize'>{item.con}</Link>
          ))}
        </nav>

        <h3 className='logoTitle mx-auto text-xl'>ASHANTI GOLD CONSULT</h3>

        <section className='flex items-center gap-6'>
          <nav className='ml-auto flex gap-5'>
            <Link href={"/"}><FaFacebookF /></Link>
            <Link href={"/"}><FaInstagram /></Link>
            <Link href={"/"}><FaXTwitter /></Link>
          </nav>
          <div className='h-4 w-[2px] bg-secondary'></div>

          <Link href={"/"} target="_blank" className="flex gap-2 items-center text-white">
            <span className="text-lg"><PiPhoneCall /></span>
            <span>{adminContactSplit}</span>
          </Link>
        </section>
      </section>

      <section className='hidden justify-between items-center md-screen:flex'>
        <h3 className='logoTitle text-lg'>ASHANTI GOLD</h3>
        <IoIosMenu onClick={toggleNav} className='text-3xl' />
      </section>

      <MiniBar
        socialLinks={socialLinks}
        contactLinks={[]}
        navLinks={navLinks}
        miniBarToggled={navToggled}
        toggleMiniBar={toggleNav}
      />
    </section>
  );
}

export default TopNav;