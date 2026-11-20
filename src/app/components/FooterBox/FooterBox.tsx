import { adminContact, adminContactSplit, LinkType, socialLinks } from "@/src/firebase/assets";
import Image from "next/image";
import Link from "next/link";
import { MdMailOutline } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";

const FooterBox = () => {
  const logo = "/logoTrans.png";

  const contactLinks: LinkType[] = [
    { tag: "phone", icon: <PiPhoneCall />, href: `tel:${adminContact}`, con: adminContactSplit },
    { tag: "mail", icon: <MdMailOutline />, href: "mailto:info@ashantigoldconsult.com", con: "info@ashantigoldconsult.com" },
    { tag: "location", icon: <SlLocationPin />, href: "", con: "Konongo, Ghana" }
  ]

  const navLinks: { title: string, links: { tag: string, href: string }[] }[] = [
    {
      title: "quick links", links: [
        { tag: "home", href: "/" },
        { tag: "about us", href: "/#about-us" },
        { tag: "contact us", href: "/#contact-us" },
      ]
    },
    {
      title: "others", links: [
        { tag: "privacy policy", href: "/" },
        { tag: "fAQ", href: "/" },
      ]
    },
  ]

  return (
    <section id="hor" className="box py-10 bg-secondary gap-10 grid sm-screen:gap-7 text-primary">
      <section className="grid grid-cols-[2fr_5fr] gap-20 tab-screen:grid-cols-1 sm-screen:gap-10">
        <section className="grid gap-5">
          <section className="grid">
            <span className="logoTitle text-primary font-semibold text-xl">Ashanti Gold Consult</span>
            {/* <div className="grid p-4 w-20 h-20 bg-primary rounded-full">
              <article className="relative">
                <Image unoptimized alt="" src={logo} fill objectFit="contain" />
              </article>
            </div> */}
            <small className="text-[0.9rem]">{"Where dreams become reality—own and live in an exceptional community offering world-class amenities and modern comfort."}</small>
          </section>

          <article className="flex gap-5">
            {socialLinks.map((el) => (
              <Link href={el.href} key={el.tag} target="_blank" className="text-xl">
                <span className="text-primary">
                  {el.icon}
                </span>
              </Link>
            ))}
          </article>
        </section>

        <section className="grid grid-cols-3 sm-screen:grid-cols-1 sm-screen:gap-10">
          {navLinks.map((el) => (
            <section key={el.title} className="flex flex-col gap-5 sm-screen:gap-1">
              <span className="font-extrabold text-primary uppercase">{el.title}</span>
              <article className="flex flex-col capitalize">
                {el.links.map((child_el) => (
                  <Link key={child_el.tag} href={child_el.href}>{child_el.tag}</Link>
                ))}
              </article>
            </section>
          ))}


          <section className="flex flex-col gap-5 sm-screen:gap-1">
            <span className="font-extrabold text-primary uppercase titleFont">contact us</span>
            <article className="flex flex-col capitalize">
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
          </section>
        </section>
      </section>

      {/* <legend className="w-full h-1 bg-primary flex sm-screen:h-[2px]"></legend>

      <Link href={"https://www.globytesolutions.com/"} target="_blank" className="font-semibold text-primary">Powered By Globyte Solutions</Link>
     */}
    </section>
  );
}

export default FooterBox;