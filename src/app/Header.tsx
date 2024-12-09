/**
 * React component for the header of the page.
 */

import configuration from "../../linkconfig.json"

type HeaderProps = {
    children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
    const { fontFamily, textColor } = configuration.header

    return (
        <h1 className={`text-4xl font-bold mb-2 ${fontFamily} ${textColor}`}>{children}</h1>
    )
}