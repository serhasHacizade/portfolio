import React from 'react'
import Link from 'next/link'
import {FaGithub, FaLinkedinIn, FaFacebook} from "react-icons/fa"

const socials = [
    {icon: <FaGithub />, path: "https://github.com/serhasHacizade"},
    {icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/eren-felek-b3b28523a/"},
    {icon: <FaFacebook />, path: "https://www.facebook.com/Eren.felek.70"},
]


const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
        {
            socials.map((item, index) => {
                return (
                    <Link target="_blank" key={index} href={item.path} className={iconStyles}>{item.icon}</Link>
                )
            })
        }
    </div>
  )
}

export default Socials