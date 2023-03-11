// this wraps the page.tsx and other future tsx files under app dir
"use client";

import "../styles/globals.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from "framer-motion";
import BoxTransition from "@/utils/BoxTransition";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body>
        <AnimatePresence>
          <BoxTransition>

            <div className="mx-auto px-6 md:px-12">
              <Header />
              <div className="px-11">
                {children}
              </div>
              <Footer />
            </div>
          </BoxTransition>

        </AnimatePresence>
      </body>
    </html>
  )
}
