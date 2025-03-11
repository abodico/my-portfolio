import "./globals.css"
import "@/public/style.css"

export const metadata = {
    title: "Abdalmoamen Abbara",
    description: "Abdalmoamen Abbara's Portfolio",
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
