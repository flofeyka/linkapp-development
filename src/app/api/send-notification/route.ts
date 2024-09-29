import axios from "axios";
import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const { name, phone, email, comment, connection } = await req.json()
    const text = `
    Данил, здравствуйте!\n
    Поздравляем вас с новым потенциальным клиентом!\n
    Имя: ${name}\n
    Телефон: ${phone}\n
    Email: ${email}\n
    Комментарий: ${comment}\n
    Как связаться: ${connection}\n
    `
    try {
        await axios.post(`https://api.telegram.org/bot${process.env.bot_token}/sendMessage`, {
            chat_id: Number(process.env.chat_id),
            text,
        })
        return NextResponse.json({
            success: true,
            message: "Вы успешно отправили заявку!"
        });
    } catch (e) {
        console.log(e);
        return NextResponse.json({ success: false, message: "Какаяа-то непредвиденная ошибка." });
    }
}