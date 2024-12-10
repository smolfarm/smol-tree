/**
 * Code that handles mapping simple icon names to their corresponding React icons.
 */

import { FaXTwitter, 
    FaLinkedin, 
    FaReddit, 
    FaBluesky, 
    FaGithub,
    FaSteam, 
    FaHackerNews,
    FaInstagram,
    FaGamepad } from "react-icons/fa6"
import { FaHome } from "react-icons/fa"
import { SiDuolingo, 
    SiDiscord,
    SiCashapp, 
    SiNpm,
    SiRarible,
    SiSubstack,
    SiTumblr,
    SiUbisoft,
    SiWikipedia,
    SiLastdotfm,
    SiAppstore,
    SiApple,
    SiAndroid,
    SiFarcaster,
    SiFacebook,
    SiGitlab,
    SiReact,
    SiPatreon,
    SiGofundme,
    SiThreads,
    SiWordpress,
    SiLeetcode,
    SiYoutube,
    SiSpotify,
    SiTwitch,
    SiGoogledrive,
    SiMedium,
    SiOpensea  } from "react-icons/si"

const iconClasses = "w-8 h-8 mr-3"

/**
 * Maps a simple icon name to its corresponding React icon. 
 * 
 * @param slug - The name of the icon.
 * @returns The corresponding React icon.
 */
export function getIcon(slug: string) {
    switch (slug) {
        case "android":
            return <SiAndroid className={iconClasses} />
        case "apple":
            return <SiApple className={iconClasses} />
        case "appstore":
            return <SiAppstore className={iconClasses} />
        case "bluesky":
            return <FaBluesky className={iconClasses} />
        case "cashapp":
            return <SiCashapp className={iconClasses} />
        case "discord":
            return <SiDiscord className={iconClasses} />
        case "duolingo":
            return <SiDuolingo className={iconClasses} />
        case "facebook":
            return <SiFacebook className={iconClasses} />
        case "farcaster":
            return <SiFarcaster className={iconClasses} />
        case "gamepad":
            return <FaGamepad className={iconClasses} />
        case "github":
            return <FaGithub className={iconClasses} />
        case "gitlab":
            return <SiGitlab className={iconClasses} />
        case "gofundme":
            return <SiGofundme className={iconClasses} />
        case "googledrive":
            return <SiGoogledrive className={iconClasses} />
        case "hackernews":
            return <FaHackerNews className={iconClasses} />
        case "home":
            return <FaHome className={iconClasses} />
        case "instagram":
            return <FaInstagram className={iconClasses} />
        case "lastfm":
            return <SiLastdotfm className={iconClasses} />
        case "leetcode":
            return <SiLeetcode className={iconClasses} />
        case "linkedin":
            return <FaLinkedin className={iconClasses} />
        case "medium":
            return <SiMedium className={iconClasses} />
        case "npm":
            return <SiNpm className={iconClasses} />
        case "opensea":
            return <SiOpensea className={iconClasses} />
        case "patreon":
            return <SiPatreon className={iconClasses} />
        case "rarible":
            return <SiRarible className={iconClasses} />
        case "react":
            return <SiReact className={iconClasses} />
        case "reddit":
            return <FaReddit className={iconClasses} />
        case "spotify":
            return <SiSpotify className={iconClasses} />
        case "steam":
            return <FaSteam className={iconClasses} />
        case "substack":
            return <SiSubstack className={iconClasses} />
        case "threads":
            return <SiThreads className={iconClasses} />
        case "tumblr":
            return <SiTumblr className={iconClasses} />
        case "twitch":
            return <SiTwitch className={iconClasses} />
        case "twitter":
        case "x":
            return <FaXTwitter className={iconClasses} />
        case "ubisoft":
            return <SiUbisoft className={iconClasses} />
        case "wikipedia":
            return <SiWikipedia className={iconClasses} />
        case "wordpress":
            return <SiWordpress className={iconClasses} />
        case "youtube":
            return <SiYoutube className={iconClasses} />
        default:
            return <></>
    }
}