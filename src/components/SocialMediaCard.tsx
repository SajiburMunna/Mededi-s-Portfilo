import Facebook from "@/assets/icon/Facebook";
import Instagram from "@/assets/icon/Instagram";
import Linkdin from "@/assets/icon/Linkdin";
import Link from "next/link";

const SocialInfo = [
  {
    name: "Facebook",
    icon: Facebook,
    link: "facebook.com",
  },
  {
    name: "Instagram",
    icon: Instagram,
    link: "instagram.com",
  },
  {
    name: "LindedIn",
    icon: Linkdin,
    link: "linkedin.com",
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
