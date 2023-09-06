import React from 'react'
import logo from "../../images/logo.svg";
import SocialIcon from './SocialIcon';
import Instagram from "../../images/instagram.svg";
import LinkedIn from "../../images/linkedin.svg";

import YouTube from "../../images/youtube.svg";
import LinkToButton from './LinkToButton';

const Footer = () => {
  const social = [
    {
      link: "@sjsuml",
      url: "https://www.instagram.com/sjsuml/",
      icon: Instagram,
    },
    {
      link: "ML@SJSU",
      url: "https://www.linkedin.com/company/sjsumlclub/",
      icon: LinkedIn,
    },
    {
      link: "ML at SJSU",
      url: "https://www.youtube.com/channel/UCmC0mWgwdG9J8F7X1xjAcGg",
      icon: YouTube,
    }
  ]
  return (
    <div className="w-full bg-[#263238] text-white py-8 space-y-6 flex flex-col gap-4">
      <div className="flex sm:flex-col items-center justify-center gap-24 sm:gap-12">
        <div className="text-left flex flex-col gap-2">
          <div >
            <img className="h-14" src={logo} alt="logo" />
          </div>
          <p className="text-sm ml-2 font-semitbold">Room BBC 326, San Jose State University<br /> 1 Washington Sq, San Jose, CA 95192</p>
          <div className="mt-6 ml-2">
            <LinkToButton url="mailto:sjsumlclub@gmail.com" text="Contact Us" />
          </div>
        </div>
        <div className="text-left">
          <p className="text-2xl font-black mb-4">Connect With Us</p>
          {social.map((social) => (
            <SocialIcon link={social.link} url={social.url} icon={social.icon} />
          ))}
        </div>

        <LinkToButton url="https://discord.gg/dQdSnpt3u8" text="Join Us on Discord" />
      </div>


      <p>Machine Learning at SJSU &copy; {new Date().getFullYear()}</p>
    </div>
  )
}

export default Footer