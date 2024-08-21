import { Button, Card } from "@nextui-org/react";
import Link from "next/link";

export default function Header() {
    return <header className={"mb-3 flex w-full justify-between items-center font-semibold"}>
        <Card className={"min-w-[210px] flex items-center p-4"}>
            <div className={"flex gap-5 text-[14px]"}>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>кейсы</Link>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>услуги</Link>
                <Link href="/" className={"hover:text-primary-400 transition-all"}>партнеры</Link>
            </div>
        </Card>

        <div>
            <Button className={"font-semibold"} size={"lg"}>оставить заявку</Button>
        </div>
    </header>
}