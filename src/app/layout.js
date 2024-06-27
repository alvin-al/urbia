import { Inter, Fraunces, Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "Urbia",
  description: "Urbia Heritage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <body>{children}</body>
    </html>
  );
}
