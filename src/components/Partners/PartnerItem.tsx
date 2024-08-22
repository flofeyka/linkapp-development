import Image from "next/image";

export default function PartnerItem({partner}: {partner: any}) {
    return <div onClick={() => window.open(partner.link)} className="cursor-pointer max-w-[400px] w-[400px] sm:w-[95%] sm:relative sm:min-h-[400px] ml-2">
    <div className="relative overflow-hidden rounded-t-3xl">
        <Image width={400} height={500} src={`/partners/${partner.img}`} className="transition-all hover:scale-110 grayscale hover:grayscale-0 object-cover max-h-[400px] sm:max-h-[300px]" alt="partner" />
    </div>
    <div className="bg-[#202126] p-3 min-h-[125px] sm:h-[150px] rounded-b-3xl ">
        <div className="text-3xl font-sans font-semibold">{partner.name.lastName} {partner.name.firstName}</div>
        <div className="text-gray-600 font-semibold text-lg">{partner.post}</div>
    </div>

</div>
} 