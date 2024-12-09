import configuration from "./configuration.json"
import { FaXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaReddit } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { SiDuolingo } from "react-icons/si"
import { FaYoutube } from "react-icons/fa"
import { FaSteam } from "react-icons/fa"
import { FaGamepad } from "react-icons/fa"
import { FaHome } from "react-icons/fa"

const getIcon = (slug: string) => {
    switch (slug) {
        case "twitter":
        case "x":
            return <FaXTwitter className="w-8 h-8 mr-3" />
        case "linkedin":
            return <FaLinkedin className="w-8 h-8 mr-3" />
        case "reddit":
            return <FaReddit className="w-8 h-8 mr-3" />
        case "bluesky":
            return <FaBluesky className="w-8 h-8 mr-3" />
        case "github":
            return <FaGithub className="w-8 h-8 mr-3" />
        case "youtube":
            return <FaYoutube className="w-8 h-8 mr-3" />
        case "duolingo":
            return <SiDuolingo className="w-8 h-8 mr-3" />
        case "steam":
            return <FaSteam className="w-8 h-8 mr-3" />
        case "gamepad":
            return <FaGamepad className="w-8 h-8 mr-3" />
        case "home":
            return <FaHome className="w-8 h-8 mr-3" />
        default:
            return <></>
    }
}

export default function Home() {
    const { bgColor } = configuration.buttons
    const bgColorClass = bgColor ?? "bg-slate-800"
    const variableClasses = bgColorClass

    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold font-mono mb-2">{configuration.title}</h1>
            <div className="w-full p-4">
                {configuration.links.map((link) => (
                    <a className={`text-xl text-center font-mono block mx-auto my-4 text-white p-2 rounded-md w-full md:w-[500px] hover:bg-slate-700 drop-shadow-lg ${variableClasses}`} href={link.url} key={link.name}>
                        <div className="flex items-center justify-center">{getIcon(link.icon ?? "")} {link.name}</div>
                    </a>
                ))}
            </div>
        </div>
    )
}