'use client'
import { Button, Input, Modal, ModalContent, Select, SelectItem, Textarea, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useForm } from "react-hook-form";

type Application = {
    name: string;
    email: string;
    phone: string;
    comment: string;
    connect: "phone" | "email" | "telegram";
}

export default function ApplicationForm() {
    const { register, handleSubmit } = useForm<Application>();

    const {onOpen, isOpen, onOpenChange} = useDisclosure();

    const onSubmit = (data: Application) => {
        const sendEmail = async () => {
            await axios.post("https://linkapp-development-backend.onrender.com/send", {...data})
        }

        sendEmail();
        onOpen();
    };

    return <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3 sm:gap-2 w-[50%] sm:w-full">
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent className="text-center p-5">
                {onClose => <div className="flex flex-col gap-3">
                    <div className="text-3xl">Спасибо за вашу обратную связь!</div>
                    <div>Ожидайте ответа.</div>
                    <div><Button onClick={onClose} color="danger">Закрыть</Button></div>
                </div>}
            </ModalContent>

        </Modal>
        <div className="flex gap-2 sm:gap-2 sm:flex-col"><Input {...register("name", { required: true })} size="lg" placeholder="Имя" /> <Input {...register("phone", { required: true })} size="lg" type="phone" placeholder="Телефон" /></div>
        <div><Input {...register("email", { required: true })} size="lg" type="email" placeholder="Почта" /></div>
        <div><Textarea {...register("comment")} size="lg" placeholder="Комментарий" /></div>
        <div className="w-[50%] sm:w-full sm:text-xs text-gray-400">В чем заключается задача? В какие сроки?
            Несколько слов о проекте</div>

        <Select {...register("connect")} defaultSelectedKeys={["phone"]} label="Как с вами лучше связаться?" isRequired>
            <SelectItem key="phone">телефон</SelectItem>
            <SelectItem key="email">почта</SelectItem>
            <SelectItem key="telegram">telegram</SelectItem>
        </Select>
        <div>
            <Button type="submit" size="lg" className="sm:w-full">оставить заявку</Button>
        </div>
    </form>
}