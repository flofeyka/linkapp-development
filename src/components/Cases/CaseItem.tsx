'use client';

import {useState} from "react";


export default function CaseItem({type, name, description, projectName, link}: {
    type: string;
    name: string;
    description: string;
    projectName: string;
    link: string;
}) {
    const [opened, setOpened] = useState<boolean>(false);

    return <div onClick={() => window.open(link)} className={"bg-[#303238] cursor-pointer w-[28vw] sm:w-[95%] ml-2 rounded-[35px] min-h-[55vh] sm:min-h-[50vh] p-5"} onMouseLeave={() => setOpened(false)} onMouseEnter={() => setOpened(true)}>
        {opened ? <div >
            <div className={"text-[15px] text-gray-500 mb-3"}>{projectName}</div>
            <div className={"text-2xl sm:text-xl"}>
                {description}
            </div>
        </div> : <div  >
            <div className={"text-xs text-gray-500 mb-3"}>{type}</div>
            <div className={"text-2xl font-semibold"}>{name}</div>
        </div>
        }

    </div>
}