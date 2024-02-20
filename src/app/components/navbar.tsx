import Link from "next/link";
import React from "react";
import './navbar.css';

export default function Navbar() {
    return<>
    <header className="navBar">
        <Link className="navlink" href="./">Till startsidan</Link>
    </header>
    </>
}