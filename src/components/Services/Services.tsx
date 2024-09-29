import { services, serviceType } from "@/constants/services";
import Image from "next/image";

export default function Services() {
  return (
    <div id="services" className="mt-16 flex flex-col gap-16">
      <div className="flex justify-between sm:flex-col leading-[3.5rem]">
        <div className="text-5xl sm:text-3xl sm:w-full w-[50%] font-semibold">
          <span className="text-primary-400 font-bold sm:min-w-[95vw]">Комплексный подход</span>{" "}
          к решению задач любой сложности от идеи до реализации
        </div>
        <div className="text-2xl sm:text-xl font-semibold text-gray-600 sm:mt-3 sm:w-full w-[30%]">
          Наши технологии - самые актуальные среди конкурентов. Работая с нами,
          вы получите продукт высшего качества
        </div>
      </div>

      <div className="flex gap-4 sm:gap-5 justify-between sm:overflow-x-scroll sm:overflow-y-hidden">
        {services.map((service: serviceType) => (
          <div className="w-full sm:min-w-[82.5vw]" key={service.id}>
            <div className="border-b-1 border-gray-500"><Image className="h-[65px] mb-3" alt="" width={70} height={70} src={`/icons/${service.icon}.svg`}/></div>
            <div className="font-semibold text-4xl mb-3 mt-4">
              {service.title}
            </div>
            <div className="flex flex-col gap-2 text-gray-500 mt-6 sm:mt-3">
              {service.subpoints.map(
                (subpoint: { id: number; title: string }) => {
                  return <div className="sm:text-xl" key={subpoint.id}>{subpoint.title}</div>;
                }
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
