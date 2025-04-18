import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_Jakarta_Sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app by Michel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_Jakarta_Sans.className}>
        {children}
      </body>
    </html>
  );
}
