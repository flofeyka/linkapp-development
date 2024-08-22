'use client'

import { partners } from "@/constants/partners";
import { SLIDER_DEFAULT_SETTINGS } from "@/utils/slider";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useRef } from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PartnerItem from "./PartnerItem";

export default function Partners() {

    const sliderRef = useRef<Slider | null>(null);

    const scrollToPrev = () => sliderRef.current?.slickPrev();
    const scrollToNext = () => sliderRef.current?.slickNext();

    return <div className="mt-16" id="partners">
        <div className="text-5xl my-7 flex items-center justify-between">
            <div>партнеры</div>
            <div className={"flex gap-2 sm:hidden"}>
                <Button onClick={scrollToPrev}><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30}
                    className={"rotate-180"} /> </Button>
                <Button onClick={scrollToNext}><Image src={"/icons/arrow.svg"} alt={"Arrow"} width={30} height={30} /> </Button>
            </div>
        </div>
            <Slider className="relative flex gap-2" ref={sliderRef} {...SLIDER_DEFAULT_SETTINGS}>
                {partners.map(partner => <PartnerItem partner={partner}/>)}
            </Slider>

    </div>
}