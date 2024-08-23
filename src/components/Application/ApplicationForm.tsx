'use client'
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";

export default function ApplicationForm() {
    return <div className="flex flex-col gap-3 sm:gap-2 w-[50%] sm:w-full">
        <div className="flex gap-2 sm:gap-2 sm:flex-col"><Input size="lg" placeholder="Имя" /> <Input size="lg" placeholder="Телефон" /></div>
        <div><Input size="lg" placeholder="Почта" /></div>
        <div><Textarea size="lg" placeholder="Комментарий" /></div>
        <div className="w-[50%] sm:w-full sm:text-xs text-gray-400">В чем заключается задача? В какие сроки?
            Несколько слов о проекте</div>

        <div>
            <Select placeholder="Как с вами лучше связаться?" size="lg">
                <SelectItem key="phone">телефон</SelectItem>
                <SelectItem key="email">почта</SelectItem>
                <SelectItem key="telegram">telegram</SelectItem>
            </Select>
        </div>
        <div>
            <Button size="lg" className="sm:w-full">оставить заявку</Button>
        </div>
    </div>
}