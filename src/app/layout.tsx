import { DM_Sans } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket Waves",
  description: "Get events ticket or create an event tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster position="top-center" />
          {children}
      </body>
    </html>
  );
}
