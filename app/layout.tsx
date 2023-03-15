// this wraps the page.tsx and other future tsx files under app dir
"use client";

import "../styles/globals.css"
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { AnimatePresence } from "framer-motion";
import BoxTransition from "@/utils/BoxTransition";

// console.log(process.env.NEXT_PUBLIC_GA4_TRACKING_ID);

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

            <div className="mx-auto px-2 md:px-11">
              <Header />
              <div className="md:px-12">
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
