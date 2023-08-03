'use client'

import React from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";

function CustomLink({href, title, className = ""}) {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className={`h-[1px] inline-block w-0 bg-dark absolute left-0 -bottom-0.5 group-hover:w-full 
            transition-[width] ease duration-300 ${usePathname() === href ? 'w-full' : 'w-0'}`}>
                &nbsp;
            </span>
        </Link>
    )
}

export default CustomLink;