'use client'

import { Button, Card } from "@nextui-org/react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [menu, setMenu] = useState<boolean>(false);

    const handleClose = () => setMenu(false);
    const handleOpen = () => setMenu(true);

    return <header className={"mb-3 flex w-full justify-between items-center font-semibold "}>
        <Card className="lg:hidden md:hidden h-[7.5vh] w-screen flex justify-center items-end px-5 ">
            {!menu && <button onClick={() => setMenu(!menu)}
                className="group flex items-center justify-center w-6 h-full rounded-small tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2"
                type="button" aria-pressed="false"><span
                    className="sr-only">open navigation menu</span><span
                        className="w-full h-full pointer-events-none flex flex-col items-center justify-center text-inherit group-data-[pressed=true]:opacity-70 transition-opacity before:content-[''] before:block before:h-px before:w-6 before:bg-current before:transition-transform before:duration-150 before:-translate-y-1 before:rotate-0 group-data-[open=true]:before:translate-y-px group-data-[open=true]:before:rotate-45 after:content-[''] after:block after:h-px after:w-6 after:bg-current after:transition-transform after:duration-150 after:translate-y-1 after:rotate-0 group-data-[open=true]:after:translate-y-0 group-data-[open=true]:after:-rotate-45"></span>
            </button>}
        </Card>
        <AnimatePresence>
            {menu && (
                <motion.div initial={{ height: 0 }} exit={{ height: 0 }} animate={{ height: "100vh" }}
                    className="menu-opened bg-[#18181B] h-screen z-[9999999] fixed top-0 w-screen left-0 flex flex-col px-7 p-5 overflow-hidden text-xl gap-2 ">
                    <div onClick={handleClose} className="absolute top-[2vh] right-[15px]"><Image src="/icons/close.svg" alt="close" height={27.5} width={27.5} /></div>
                    <div className="text-center mt-[5vh] flex flex-col text-2xl gap-5">
                        <Link onClick={handleClose} href="#cases">кейсы</Link>
                        <Link onClick={handleClose} href="#services">услуги</Link>
                        <Link onClick={handleClose} href="#partners">партнеры</Link>

                        <Link href="#application" className="mt-10">
                            <Button onClick={handleClose} className={"font-semibold"} size={"lg"}>оставить заявку</Button>
                        </Link>
                    </div>
                </motion.div>
            )
            }
        </AnimatePresence>

        <Card className={"min-w-[210px] flex items-center p-4 sm:hidden"}>
            <div className={"flex gap-5 text-[14px]"}>
                <Link href="#cases" className={"hover:text-primary-400 transition-all"}>кейсы</Link>
                <Link href="#services" className={"hover:text-primary-400 transition-all"}>услуги</Link>
                <Link href="#partners" className={"hover:text-primary-400 transition-all"}>партнеры</Link>
            </div>
        </Card>

        <div className="sm:hidden">
            <Link href="#application">
                <Button className={"font-semibold"} size={"lg"}>оставить заявку</Button>
            </Link>
        </div>
    </header>
}