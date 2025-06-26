'use client';
import { useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Menu() {
    const [active, setActiveAction] = useState("#home");
    return (
        <div className="relaive">
            <Sidebar active={active} setActiveAction={setActiveAction}></Sidebar>
            <Navbar active={active} setActiveAction={setActiveAction}></Navbar>
        </div>
    );
}