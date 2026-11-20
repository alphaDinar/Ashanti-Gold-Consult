import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export type LinkType = {
  tag: string;
  icon?: React.ReactNode;
  href: string;
  con?: string;
}

export const adminContact = "+233597838142";
export const adminContactSplit = "+233 59 783 8142";

export const socialLinks: LinkType[] = [
  { tag: "facebook", icon: <FaFacebookF />, href: "" },
  { tag: "instagram", icon: <FaInstagram />, href: "" },
  { tag: "Twitter", icon: <FaXTwitter />, href: "" },
]

export const getWhatsAppLink = () => {
  const message = `https://api.whatsapp.com/send/?phone=${adminContact}&text=Please%20I%20would%20like%20to%20make%20an%20inquiry&type=phone_number&app_absent=0`;
  return message;
}

// const brochure = "/brochure.pdf";
// export const openBrochure = () => {
//   window.open(brochure, "_blank");
// }