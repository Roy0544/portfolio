
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} h-full antialiased`}
    >
      <body className={`${jakarta.className} min-h-full flex flex-col font-sans`}>{children}</body>
    </html>
  );
}
