import { Geist, Geist_Mono ,} from "next/font/google";
import "./globals.css";
import "./index.css";




export const metadata = {
  title: "Güzellik Dünyası – Kozmetik ve Cilt Bakımı",
  description: "Profesyonel kozmetik ürünleri ve cilt bakımı tavsiyeleri. Makyaj, bakım ve güzellik trendlerini keşfedin.",
  openGraph: {
    type: "website",
    url: "https://ornekkozmetik.com",
    title: "Güzellik Dünyası – Kozmetik ve Cilt Bakımı",
    description: "Profesyonel kozmetik ürünleri ve cilt bakımı tavsiyeleri. Makyaj, bakım ve güzellik trendlerini keşfedin.",
    images: [
      "https://opengraph.b-cdn.net/production/images/96d9c978-ae8f-4961-acf6-56acff57b3e9.png?token=Y_tuAU04RM3XjBYiyX6MWX5f_bZwVRGjFYJLkwpGp4g&height=667&width=854&expires=33294746290",
    ],
  },
  twitter: {
    card: "summary_large_image",
    domain: "ornekkozmetik.com",
    url: "https://ornekkozmetik.com",
    title: "Güzellik Dünyası – Kozmetik ve Cilt Bakımı",
    description: "Profesyonel kozmetik ürünleri ve cilt bakımı tavsiyeleri. Makyaj, bakım ve güzellik trendlerini keşfedin.",
    images: [
      "	https://opengraph.b-cdn.net/production/images/96d9c978-ae8f-4961-acf6-56acff57b3e9.png?token=Y_tuAU04RM3XjBYiyX6MWX5f_bZwVRGjFYJLkwpGp4g&height=667&width=854&expires=33294746290",
    ],
  },
};



 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}


const geist = Geist({
  subsets: ['latin'],
})
 
