import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { ClerkProvider } from "@clerk/nextjs";
import {Inter} from "next/font/google";
import { shadesOfPurple } from "@clerk/themes";
import Header from "@/components/Header.jsx";
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "ProjectX",
  description: "Project management app better than jira",
};

export default function RootLayout({ children }) {
  return (

  <ClerkProvider appearance={{baseTheme:shadesOfPurple}}>
    <html lang="en">
      <body className={`${inter.className} dotted-background`} >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
            <Header/>
          <main className="min-h-screen">{children}</main>
          <footer className="container mx-auto px-4 text-center text-gray-200">
            <p>Made with love by Kartik</p>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  </ClerkProvider>

  
  );
}
