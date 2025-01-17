/* eslint-disable @next/next/no-img-element */

/**
 * Main page for the app, which displays the links in a list as large buttons.
 * 
 * To prevent incurring extra costs on Vercel, we do not use the Next <Image> tag here, though the <img> tag can be swapped out as necessary.
 */

import configuration from "../../linkconfig.json"
import LinkButton from "./LinkButton"
import Header from "./Header"

export default function Home() {
    const { fontFamily, textColor } = configuration

    return(
        <div className={`flex flex-col items-center justify-center h-screen ${fontFamily} ${textColor}`}>
            {configuration.logo && <img src={configuration.logo} alt="Logo" className="max-w-32 max-h-32 my-2" />}
            <Header>{configuration.title}</Header>
            <p className="text-center text-sm">{configuration.description}</p>
            <div className="w-full p-4">
                {configuration.links.map((link) => (
                    <LinkButton url={link.url} icon={link.icon} name={link.name} key={link.name} />
                ))}
            </div>
        </div>
    )
}