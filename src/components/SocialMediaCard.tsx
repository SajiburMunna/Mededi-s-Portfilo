import Facebook from "@/assets/icon/Facebook";
import Instagram from "@/assets/icon/Instagram";
import Linkdin from "@/assets/icon/Linkdin";
import Link from "next/link";

const SocialInfo = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "https://www.facebook.com/holamehedi",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "https://www.instagram.com/holamehedi/",
  },
  {
    name: "LindedIn",
    icon: Linkdin,
    link: "https://www.linkedin.com/in/holamehedi/",
  },
];

function SocialMediaCard() {
  return (
    <>
      <div className="flex justify-center gap-7">
        {SocialInfo.map((social) => (
          <a href={social.link} target="_blank">
            <div
              key={social.name}
              className="bg-[#FFC576] w-10 h-10 rounded-sm flex justify-center items-center"
            >
              <social.icon />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default SocialMediaCard;
