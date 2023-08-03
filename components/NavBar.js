'use client'

import React from 'react';
import Logo from "@/components/Logo";
import CustomLink from "@/components/CustomLink";
import {DribbbleIcon, GithubIcon, LinkedInIcon, PinterestIcon, TwitterIcon} from "@/components/Icons";
import {motion} from "framer-motion";

function NavBar() {
    const navLinks = [
        {icon: <TwitterIcon/>, href: "https://twitter.com"},
        {icon: <GithubIcon/>, href: "https://twitter.com"},
        {icon: <LinkedInIcon/>, href: "https://twitter.com"},
        {icon: <PinterestIcon/>, href: "https://twitter.com"},
        {icon: <DribbbleIcon/>, href: "https://twitter.com"},
    ]

    return (
        <header className={"w-full px-32 py-8 font-medium flex items-center justify-between"}>
            <nav>
                <CustomLink href={"/"} title={'Home'} className={'mr-4'}/>
                <CustomLink href={"/about"} title={'About'} className={'mx-4'}/>
                <CustomLink href={"/projects"} title={'Projects'} className={'mx-4'}/>
                <CustomLink href={"/articles"} title={'Articles'} className={'ml-4'}/>
            </nav>
            <nav className={"flex items-center justify-center flex-wrap gap-3"}>
                {navLinks.map((nav, index) => (
                    <motion.a
                        key={index}
                        whileHover={{y: -2}}
                        whileTap={{scale: 0.9}}
                        className={"w-6"}
                        href={nav.href} target={"_blank"}>
                        {nav.icon}
                    </motion.a>
                ))}
            </nav>
            <div className={"absolute left-[50%] top-2 translate-x-[-50%]"}>
                <Logo/>
            </div>
        </header>
    )
}

export default NavBar;