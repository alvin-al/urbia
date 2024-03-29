import { Inter, Fraunces, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({ subsets: ["latin"] });

export const metadata = {
  title: "Urbia",
  description: "Urbia Heritage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.className} `}>{children}</body>
    </html>
  );
}
