/**
 * Main page for the app, which displays the links in a list as large buttons.
 */

import configuration from "../../linkconfig.json"
import LinkButton from "./LinkButton"
import Header from "./Header"

export default function Home() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <Header>{configuration.title}</Header>
            <div className="w-full p-4">
                {configuration.links.map((link) => (
                    <LinkButton url={link.url} icon={link.icon} name={link.name} key={link.name} />
                ))}
            </div>
        </div>
    )
}