import configuration from "./configuration.json"

export default function Home() {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold font-mono">{configuration.title}</h1>
            <ul>
                {configuration.links.map((link) => (
                    <a className="text-lg text-center font-mono block my-4 bg-slate-900 text-white p-2 rounded-md w-[500px]" href={link.url} key={link.name}>{link.name}</a>
                ))}
            </ul>
        </div>
    )
}
