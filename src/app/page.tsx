/**
 * Main page for the app, which displays the links in a list as large buttons.
 */

import configuration from "./configuration.json"
import { getIcon } from "./icon-mapper"

export default function Home() {
    const { bgColor, hoverColor, textColor } = configuration.buttons
    const bgColorClass = bgColor ?? "bg-slate-800"
    const hoverColorClass = hoverColor ?? "hover:bg-slate-700"
    const textColorClass = textColor ?? "text-white"
    const headerTextColorClass = configuration.header.textColor ?? "text-white"
    const headerFontFamily = configuration.header.fontFamily ?? "font-geist-mono"
    const buttonFontFamily = configuration.buttons.fontFamily ?? "font-geist-mono"

    const variableClasses = `${bgColorClass} ${hoverColorClass} ${buttonFontFamily} ${textColorClass}`

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className={`text-4xl font-bold mb-2 ${headerFontFamily} ${headerTextColorClass}`}>{configuration.title}</h1>
            <div className="w-full p-4">
                {configuration.links.map((link) => (
                    <a className={`text-xl text-center block mx-auto my-4 text-white p-2 rounded-md w-full md:w-[500px] hover:bg-slate-700 drop-shadow-lg ${variableClasses}`} href={link.url} key={link.name}>
                        <div className="flex items-center justify-center">{getIcon(link.icon ?? "")} {link.name}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}