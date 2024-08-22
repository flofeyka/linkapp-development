import { cases } from "@/constants/cases";
import { Button } from "@nextui-org/react";
import Slider from "react-slick";
import CaseItem from "./CaseItem";
import Image from "next/image";
import { SLIDER_DEFAULT_SETTINGS } from "@/utils/slider";
import { useRef } from "react";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Cases() {
    const sliderRef = useRef<Slider | null>(null);

    const scrollToPrev = () => sliderRef.current?.slickPrev();
    const scrollToNext = () => sliderRef.current?.slickNext();

    return <div className={"mt-16 "} id="cases">
        <div className={"text-5xl my-7 flex items-center justify-between"}>
            <div >кейсы</div>
            <div className={"flex gap-2 sm:hidden"}>
                <Button onClick={scrollToPrev}><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30}
                    className={"rotate-180"} /> </Button>
                <Button onClick={scrollToNext}><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30} /> </Button>
            </div>
        </div>
        <Slider  ref={sliderRef} {...SLIDER_DEFAULT_SETTINGS}>
            {cases.map((item, index) => <CaseItem link={item.link} projectName={item.projectName} description={item.description} key={index} type={item.type} name={item.name} />)}
        </Slider>
    </div>

}