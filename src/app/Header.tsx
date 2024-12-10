/**
 * React component for the header of the page.
 */
type HeaderProps = {
    children: React.ReactNode
}

export default function Header({ children }: HeaderProps) {
    return (
        <h1 className={`text-4xl font-bold mb-2`}>{children}</h1>
    )
}