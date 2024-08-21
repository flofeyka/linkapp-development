'use client';

import {useState} from "react";

export default function CaseItem({type, name, description, projectName}: {
    type: string;
    name: string;
    description: string,
    projectName: string
}) {
    const [opened, setOpened] = useState<boolean>(false);

    return <div className={"bg-[#303238] w-[25vw] rounded-2xl min-h-[50vh] p-5"}>
        {opened ? <div onClick={() => setOpened(false)}>
            <div className={"text-[15px] text-gray-500 mb-3"}>{projectName}</div>
            <div className={"text-2xl"}>
                {description}
            </div>
        </div> : <div onClick={() => setOpened(true)}>
            <div className={"text-xs text-gray-500 mb-3"}>{type}</div>
            <div className={"text-2xl font-semibold"}>{name}</div>
        </div>
        }

    </div>
}