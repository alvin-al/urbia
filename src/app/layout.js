import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Urbia",
  description: "Urbia Heritage",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' className={raleway.className}>

      <body>{children}</body>
    </html>
  );
}
