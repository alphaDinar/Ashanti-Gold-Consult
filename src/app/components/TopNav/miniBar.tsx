"use client";
import { FC } from "react";
import { IoMdClose } from "react-icons/io";
import { Button } from "@heroui/button";
import Link from "next/link";
import { adminContactSplit, LinkType } from "@/src/firebase/assets";
import { PiPhoneCall } from "react-icons/pi";

type MiniBarProps = {
    socialLinks: LinkType[];
    contactLinks: LinkType[];
    navLinks: LinkType[];
    miniBarToggled: boolean;
    toggleMiniBar: () => void;
};

const MiniBar: FC<MiniBarProps> = ({ socialLinks, contactLinks, navLinks, miniBarToggled, toggleMiniBar }) => {
    return (
        <section className={`hidden z-50 fixed top-0 p-10 flex-col justify-between tab-screen:flex h-screen w-screen bg-primary text-secondary transition-all ${miniBarToggled ? "right-0" : "-right-full "}`}>
            <section className="flex flex-col gap-10">
                <article className="flex flex-col gap-3">
                    {navLinks.map((el) => (
                        <Link href={el.href} key={el.tag} className="uppercase font-semibold text-sm">
                            {el.con}
                        </Link>
                    ))}
                </article>

                <legend className="flex w-full h-[1px] bg-secondary"></legend>

                <Link href={"/"} target="_blank" className="flex gap-2 items-center text-secondary">
                    <span className="text-lg"><PiPhoneCall /></span>
                    <span>{adminContactSplit}</span>
                </Link>
                {/* 
                <article className="flex flex-col gap-1">
                    {contactLinks.map((el) => (
                        <Link href={el.href} key={el.tag} target="_blank" className="flex gap-2 items-center">
                            <span className="text-xl">
                                {el.icon}
                            </span>
                            <span>
                                {el.con}
                            </span>
                        </Link>
                    ))}
                </article>

                <legend className="flex w-full h-[1px] bg-secondary"></legend> */}

                <Button color="secondary" radius="none" className="p-3 flex font-semibold w-max">
                    <span className="p-3">E-BROCHURE</span>
                </Button>

                <span onClick={toggleMiniBar} className="text-3xl absolute top-10 right-10"><IoMdClose /></span>
            </section>



            <article className="flex flex-col gap-3">
                {socialLinks.map((el) => (
                    <Link href={el.href} key={el.tag} target="_blank" className="text-xl">
                        <span className="text-secondary">
                            {el.icon}
                        </span>
                    </Link>
                ))}
            </article>
        </section>
    );
}

export default MiniBar;