import { getWhatsAppLink } from "@/src/firebase/assets";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import goldStoneB from '../../../public/gold_stone_var.png';

const ContactTag = () => {
    return (
        <section className="fixed bottom-4 right-4 flex sm-screen:bottom-2 sm-screen:right-2 z-[1000]">
            <Link href={"/about-us"} className="
            bg-white/15 
            backdrop-blur-sm
            border border-white/20 
            shadow-lg
            flex
            p-4
            cursor-pointer group w-24 h-20 hover:w-28 transition-all
            ">
                <div className="relative w-full h-full">
                    <Image unoptimized src={goldStoneB} fill alt="" objectFit="contain" className="animate-bounce group-hover:w-24" />
                </div>
            </Link>

            <Link target="_blank" href={getWhatsAppLink()} className=" bg-[#25D366]/90 text-white flex items-center justify-center backdrop-blur-sm
            border border-white/90 
            shadow-lg
            h-20
            flex-col
            p-2
            text-[0.8rem]
            gap-2
            cursor-pointer hover:h-24 transition-height">
                <FaWhatsapp className="text-4xl" />
                <span className="uppercase font-semibold">chat</span>
            </Link>
        </section>
    );
}

export default ContactTag;