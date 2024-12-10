/**
 * React component for an individual link button.
 */

import configuration from "../../linkconfig.json"

type LinkButtonProps = {
    url: string
    name: string
    icon: string
}
import { getIcon } from "./icon-mapper"

export default function LinkButton({ url, icon, name }: LinkButtonProps) {
    const { bgColor, hoverColor, fontFamily, textColor } = configuration.buttons

    return (
        <a target="_blank" className={`text-xl text-center block mx-auto my-4 text-white p-2 rounded-md w-full md:w-[500px] drop-shadow-lg ${bgColor} ${hoverColor} ${fontFamily} ${textColor}`} href={url}>
            <div className="flex items-center justify-center">{getIcon(icon ?? "")} {name}</div>
        </a>
    )
}