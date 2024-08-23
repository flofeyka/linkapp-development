import Image from "next/image";

export default function PartnerItem({partner}: {partner: any}) {
    return <div onClick={() => window.open(partner.link)} className="cursor-pointer p-3 w-[100%] relative sm:w-[100%] sm:p-0 sm:relative sm:min-h-[400px] ">
    <div className="relative overflow-hidden rounded-t-3xl">
        <Image width={400} height={450} src={`/partners/${partner.img}`} className="transition-all max-h-[450px] w-full h-[450px] hover:scale-110 grayscale hover:grayscale-0 object-cover sm:max-h-[300px]" alt="partner" />
    </div>
    <div className="bg-[#202126] p-3 relative min-h-[150px] max-h-[150px] sm:h-[150px] rounded-b-3xl ">
        <div className="text-3xl font-sans font-semibold">{partner.name.lastName} {partner.name.firstName}</div>
        <div className="text-gray-600 font-semibold text-lg">{partner.post}</div>
    </div>

</div>
} 