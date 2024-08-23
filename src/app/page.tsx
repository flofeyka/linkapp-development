
import Image from "next/image";
import { Card } from "@nextui-org/card";
import { Button, Input, Select, SelectItem, Textarea } from "@nextui-org/react";
import Header from "@/components/Header";

import Cases from "@/components/Cases/Cases";
import Partners from "@/components/Partners/Partners";
import ApplicationForm from "@/components/Application/ApplicationForm";

export default function Home() {

    return <div className={"px-[90px] sm:p-0 pt-7"}>
        <Header />
        <main>
            <Card className={"p-10 sm:p-4 h-full "}>
                <div className="flex w-full sm:flex-col">
                    <div className={"relative h-full lg:min-h-[65vh] sm:h-full w-full flex flex-col justify-between "}>
                        <div className={"text-5xl md:max-w-[100%] sm:text-3xl max-w-[75%] sm:max-w-[100%] leading-[3.5rem]"}>
                            Успех начинается здесь: <span className={"text-primary-400 font-semibold"}>программный код</span>, созданный
                            для ваших
                            идей
                            и результатов
                        </div>

                        <div className={"flex gap-3 sm:gap-1 h-full sm:my-3 relative sm:items-center items-end md:mt-3"}>
                            <div
                                className={"w-[15vw] sm:w-[100%] md:w-[50%] md:h-[15vh] h-[20vh] sm:h-[15vh] sm:p-3 rounded-2xl p-5 bg-[#303238] gap-2 flex flex-col justify-between hover:mb-3 transition-all"}>
                                <div className={"text-5xl sm:text-3xl"}>50+</div>

                                <div className={"text-gray-400"}>выполненных кейсов</div>
                            </div>
                            <div
                                className={"w-[15vw] sm:w-[50%] md:w-[50%] h-[20vh] md:h-[15vh] sm:h-[15vh] sm:p-3 rounded-2xl p-5 bg-[#303238] gap-2 flex flex-col justify-between hover:mb-3 transition-all"}>
                                <div className={"text-5xl sm:text-3xl"}>2+</div>

                                <div className={"text-gray-400"}>года опыта работы</div>
                            </div>
                        </div>

                    </div>
                    <div className="relative md:hidden">
                        <video className="rounded-3xl object-cover relative w-full sm:h-[37.5vh]" loop={true} muted={true} playsInline={true} autoPlay={true} src="/bg-landing.mov" />
                    </div>
                </div>
            </Card>

            <div className="sm:px-4">
                <Cases/>
                <Partners/>

                <div className="mt-16" id="application">
                    <div className="bg-[#202126] w-full p-7 sm:p-4 rounded-3xl flex sm:flex-col justify-between">
                        <div className="text-5xl max-w-[40%] font-semibold sm:mb-3 sm:text-4xl sm:max-w-[100%]"><span className="text-primary-400">оставьте заявку</span>, чтобы обсудить проект</div>
                        <ApplicationForm/>
                    </div>
                </div>
                <div className="flex w-full justify-end mt-3 ">
                    <Card className="p-3 hover:text-primary-400 hover:transition-all">Тюмень</Card>
                </div>
            </div>

        </main>
    </div>
}
