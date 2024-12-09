import configuration from "./configuration.json"
import { FaXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"
import { FaReddit } from "react-icons/fa"
import { FaBluesky } from "react-icons/fa6"
import { FaGithub } from "react-icons/fa"
import { SiDuolingo } from "react-icons/si"
import { FaYoutube } from "react-icons/fa"
import { FaSteam } from "react-icons/fa"

const getIcon = (slug: string) => {
    switch (slug) {
        case "x":
            return <FaXTwitter className="w-8 h-8 mr-2" />
        case "linkedin":
            return <FaLinkedin className="w-8 h-8 mr-2" />
        case "reddit":
            return <FaReddit className="w-8 h-8 mr-2" />
        case "bluesky":
            return <FaBluesky className="w-8 h-8 mr-2" />
        case "github":
            return <FaGithub className="w-8 h-8 mr-2" />
        case "youtube":
            return <FaYoutube className="w-8 h-8 mr-2" />
        case "duolingo":
            return <SiDuolingo className="w-8 h-8 mr-2" />
        case "steam":
            return <FaSteam className="w-8 h-8 mr-2" />
        default:
            return <></>
    }
}

export default function Home() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold font-mono mb-2">{configuration.title}</h1>
            <div className="w-full p-4">
                {configuration.links.map((link) => (
                    <a className="text-xl text-center font-mono block mx-auto my-4 bg-slate-800 hover:bg-slate-700 text-white p-2 rounded-md w-full md:w-[500px]" href={link.url} key={link.name}><div className="flex items-center justify-center">{getIcon(link.icon ?? "")} {link.name}</div></a>
                ))}
            </div>
        </div>
    )
}