'use client';

import Image from "next/image";
import { Card } from "@nextui-org/card";
import Link from "next/link";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import { cases } from "@/constants/cases";
import CaseItem from "@/components/Cases/CaseItem";
import Header from "@/components/Header";
import { motion } from "framer-motion";

export default function Home() {
    return <div className={"px-[90px] pt-7"}>
        <Header />
        <main>
            <Card className={"p-10 h-full "}>
                <div className="flex w-full">
                    <div className={"relative h-full min-h-[65vh] w-full flex flex-col justify-between"}>
                        <div className={"text-5xl max-w-[75%] leading-[3.5rem]"}>
                            Успех начинается здесь: <span className={"text-primary-400 font-semibold"}>программный код</span>, созданный
                            для ваших
                            идей
                            и результатов
                        </div>

                        <div className={"flex gap-3 h-full relative items-end"}>
                            <div
                                className={"w-[15vw] h-[20vh] rounded-2xl p-5 bg-[#303238] gap-2 flex flex-col justify-between hover:mb-3 transition-all"}>
                                <div className={"text-5xl"}>50+</div>

                                <div className={"text-gray-400"}>выполненных кейсов</div>
                            </div>
                            <div
                                className={"w-[15vw] h-[20vh] rounded-2xl p-5 bg-[#303238] gap-2 flex flex-col justify-between hover:mb-3 transition-all"}>
                                <div className={"text-5xl"}>2+</div>

                                <div className={"text-gray-400"}>года опыта работы</div>
                            </div>
                        </div>

                    </div>
                    <div className="relative ">
                        <video className="rounded-3xl object-cover relative w-full" loop={true} muted={true} playsInline={true} autoPlay={true} src="/bg-landing.mov" />
                    </div>
                </div>
            </Card>

            <div className={"mt-16 "}>
                <div className={"text-5xl my-7 flex items-center justify-between"}>
                    <div>кейсы</div>
                    <div className={"flex gap-2"}>
                        <Button><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30}
                            className={"rotate-180"} /> </Button>
                        <Button><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30} /> </Button>
                    </div>
                </div>
                {/* <div className={"flex gap-3 flex-wrap "}>
                    {cases.map((item, index) => <CaseItem projectName={item.projectName} description={item.description} key={index} type={item.type} name={item.name} />)}

                </div> */}

            </div>

            <div className="mt-16">
                <div className="text-5xl my-7 flex items-center justify-between">
                    <div>партнеры</div>
                </div>
                <div className="max-w-[400px]">
                    <div className="relative overflow-hidden rounded-t-3xl">
                        <img src="/partners/veronikafofanova.jpg" className="transition-all hover:scale-110 grayscale hover:grayscale-0  w-full" alt="Danil Bashirov partner" />
                    </div>
                    <div className="bg-[#202126] p-3 min-h-[125px] rounded-b-3xl relative">
                        <div className="text-3xl font-sans font-semibold">Фофанова Вероника</div>
                        <div className="text-gray-600 font-semibold text-lg">Founder & Ambassador</div>
                    </div>

                </div>
            </div>

            <div className="mt-16">
                <div className="bg-[#202126] w-full p-7 rounded-3xl flex justify-between">
                    <div className="text-5xl max-w-[40%] font-semibold"><span className="text-primary-400">оставьте заявку</span>, чтобы обсудить проект</div>
                    <div className="flex flex-col gap-3 w-[50%]">
                        <div className="flex gap-2"><Input size="lg" placeholder="Имя" /> <Input size="lg" placeholder="Телефон" /></div>
                        <div><Input size="lg" placeholder="Почта" /></div>
                        <div><Textarea size="lg" placeholder="Комментарий" /></div>
                        <div className="w-[50%] text-gray-400">В чем заключается задача? В какие сроки?
                            Несколько слов о проекте</div>

                        <div>
                            <Select placeholder="Как с вами лучше связаться?" size="lg">
                                <SelectItem key="phone">телефон</SelectItem>
                                <SelectItem key="email">почта</SelectItem>
                                <SelectItem key="telegram">telegram</SelectItem>
                            </Select>
                        </div>
                        <div>
                            <Button size="lg">оставить заявку</Button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <footer>Footer</footer>
    </div>
}
