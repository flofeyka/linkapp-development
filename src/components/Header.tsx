import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
    return <header className={"mb-3 flex w-full justify-between items-center font-semibold "}>
        <Card className="lg:hidden md:hidden h-[7.5vh] w-screen flex justify-center items-end px-5">
            Burger huynya
        </Card>
        <Card className={"min-w-[210px] flex items-center p-4 sm:hidden"}>
            <div className={"flex gap-5 text-[14px]"}>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>кейсы</Link>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>услуги</Link>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>партнеры</Link>
            </div>
        </Card>

        <div className="sm:hidden">
            <Button className={"font-semibold"} size={"lg"}>оставить заявку</Button>
        </div>
    </header>
}