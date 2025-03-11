import "./globals.css"
import "@/public/style.css"
import tabLogo from "@/public/tabLogo.png"

export const metadata = {
    title: "Abdalmoamen Abbara",
    description: "Abdalmoamen Abbara's Portfolio",
    icons: {
        icon: tabLogo.src,
    },
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
