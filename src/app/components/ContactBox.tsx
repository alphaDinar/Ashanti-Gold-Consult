"use client";
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
// import { adminContact, sendInquirySMS } from "@/src/external/sms";
import { ReactNode, useState } from "react";
import { SlLocationPin } from "react-icons/sl";
import { MdMailOutline, MdTaskAlt } from "react-icons/md";
import { PiPhoneCall } from "react-icons/pi";
import { LuAlarmClock } from "react-icons/lu";
import Link from "next/link";
import { Select, SelectItem } from "@heroui/select";
import { addToast } from "@heroui/toast";
import { adminContact } from "@/src/firebase/assets";

const ContactBox = () => {
    const channelList: { tag: string, href: string, con: string[], icon: ReactNode }[] = [
        { tag: "call us", href: `tel:${adminContact}`, con: [adminContact, ""], icon: <PiPhoneCall /> },
        { tag: "mail", href: "mailto:sales@villanuevaghana.org", con: ["sales@villanuevaghana.org"], icon: <MdMailOutline /> },
        { tag: "office hours", href: "https://maps.app.goo.gl/e3ety8P9nm65fk7D6", con: ["Mon - Fri : 8:00 - 5:00"], icon: <LuAlarmClock /> },
        { tag: "location", href: "https://maps.app.goo.gl/e3ety8P9nm65fk7D6", con: ["Tema Community 22", "Borteyman"], icon: <SlLocationPin /> },
    ]

    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [selectedPropertyType, setSelectedPropertyType] = useState("");
    const [formLoading, setFormLoading] = useState(false);

    const sendInquiry = async () => {
        setFormLoading(true);
        // const res = await sendInquirySMS(name, phoneNumber, email, country, selectedPropertyType);
        // if (res.ok) {
        //     addToast({
        //         title: "Thank you, will we be in touch soon.",
        //         variant: "solid",
        //         radius: "none",
        //         color: "secondary",
        //         icon: <MdTaskAlt />,
        //     });
        //     setName("");
        //     setPhoneNumber("");
        //     setEmail("");
        //     setCountry("");
        //     setSelectedPropertyType("");
        //     setFormLoading(false);
        // }
    }

    return (
        <section id="contact-us" className="hor grid grid-cols-2 gap-10 tab-screen:grid-cols-1">
            <section className="grid">
                <header>
                    <header>
                        <span className="uppercase text-medium font-semibold text-secondary">Get In Touch</span>
                        <h3 className="font-semibold text-white capitalize">contact us</h3>
                    </header>
                    <span className="text-muted">{"Get in touch to schedule a viewing or speak with our team about owning a home at Villa Nueva."}</span>
                </header>

                <form onSubmit={(e) => {
                    e.preventDefault();
                    sendInquiry();
                }} className="w-full grid gap-3">
                    <section>
                        <Input label="Full Name" isRequired type="text" size="lg" fullWidth className="mb-5 w-full border-b-secondary border-b text-white" variant="underlined" color="secondary"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            classNames={{
                                label:
                                    "text-secondary" +
                                    "group-data-[focus=true]:text-secondary " +
                                    "group-data-[filled-within=true]:!text-secondary",
                                input:
                                    "text-white placeholder:text-secondary",
                            }}
                        />

                        <Input label="Country Of Residence" isRequired type="text" size="lg" fullWidth className="mb-5 w-full border-b-secondary border-b text-white" variant="underlined" color="secondary"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            classNames={{
                                label:
                                    "text-secondary" +
                                    "group-data-[focus=true]:text-secondary " +
                                    "group-data-[filled-within=true]:!text-secondary",
                                input:
                                    "text-white placeholder:text-secondary",
                            }}
                        />

                        <Input label="Phone Number" isRequired type="text" size="lg" fullWidth className="mb-5 w-full border-b-secondary border-b text-white" variant="underlined" color="secondary"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            classNames={{
                                label:
                                    "text-secondary" +
                                    "group-data-[focus=true]:text-secondary " +
                                    "group-data-[filled-within=true]:!text-secondary",
                                input:
                                    "text-white placeholder:text-secondary",
                            }}
                        />

                        <Input label="Email" isRequired type="email" size="lg" fullWidth className="mb-5 w-full border-b-secondary border-b text-white" variant="underlined" color="secondary"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            classNames={{
                                label:
                                    "text-secondary" +
                                    "group-data-[focus=true]:text-secondary " +
                                    "group-data-[filled-within=true]:!text-secondary",
                                input:
                                    "text-white placeholder:text-secondary",
                            }}
                        />

                        {/* <Select label="Selected Preferred Unit" radius="none" isRequired size="lg" fullWidth className="mb-5 w-full border-b-secondary border-b text-white heroui-select" variant="underlined" color="secondary"
                            value={selectedPropertyType} onChange={(e) => setSelectedPropertyType(e.target.value)}
                            classNames={{
                                label:
                                    "text-secondary group-data-[focus=true]:text-secondary group-data-[filled-within=true]:!text-secondary",
                                trigger: "text-white placeholder:text-white", // ensures inner span inherits white
                            }}
                        >
                            {propertyList.map((property) => (
                                <SelectItem key={property.name}>{property.name}</SelectItem>
                            ))}
                        </Select> */}
                    </section>
                    <Button isLoading={formLoading} isDisabled={formLoading} type="submit" radius="none" color="secondary" fullWidth>SUBMIT</Button>
                </form>
            </section >

            <section className="flex flex-col gap-10 mob-screen:gap-5">
                <div className="flex-1 bg-secondary mob-screen:min-h-40 flex">
                    <iframe className="h-full" title="mapBox" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.318333880658!2d-0.08218212496663665!3d5.6670267943144355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf83aa70433ccd%3A0xf90aa9b53510265b!2sVilla%20Nueva%20Ghana!5e0!3m2!1sen!2sgh!4v1769596105454!5m2!1sen!2sgh"
                        width="100%"
                        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
                <section className="grid gap-5">
                    <header>
                        <h3 className="font-semibold text-white capitalize titleFont">{"Contact Channels"}</h3>
                        <span className="text-muted">{"Contact our team through the channels below for enquiries and viewings."}</span>
                    </header>
                    <section className="grid gap-5">
                        <legend className="flex w-full h-[1px] bg-white"></legend>
                        <section className="grid grid-cols-2 gap-3 sm-screen:grid-cols-1">
                            {channelList.map((el) => (
                                <Link href={el.href} key={el.tag} target="_blank" className="flex gap-4">
                                    <Button isIconOnly className="w-20 h-20 text-3xl shrink-0 mob-screen:h-16 mob-screen:w-16" radius="none" color="secondary">
                                        {el.icon}
                                    </Button>
                                    <article className="text-white">
                                        <span className="capitalize text-lg font-semibold mob-screen:text-medium">{el.tag}</span>
                                        <p className="grid">
                                            {el.con.map((line, idx) => (
                                                <span key={idx} className="line-clamp-1 max-w-full block truncate">{line}</span>
                                            ))}
                                        </p>
                                    </article>
                                </Link>
                            ))}
                        </section>
                        <legend className="flex w-full h-[1px] bg-white"></legend>
                    </section>
                </section>
            </section>
        </section >
    );
}

export default ContactBox;