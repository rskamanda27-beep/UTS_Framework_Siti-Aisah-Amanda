import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { db } from "@/lib/db";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CV Aisah",
  description: "CV Web UTS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-[#0b0c10] text-white min-h-screen`}>

        <header className="fixed top-0 left-0 w-full bg-[#0b0c10]/90 backdrop-blur-sm z-50 border-b border-gray-800">
          <div className="container mx-auto px-6 py-6 flex justify-between items-center">
            

            <div className="font-bold text-xl tracking-wider text-[#66fcf1]">
              CV.
            </div>

            {/* Menu Navigasi */}
            <nav className="hidden md:flex space-x-8 text-sm font-medium">
              <Link href="/" className="hover:text-[#66fcf1] transition uppercase tracking-wide">Biodata</Link>
              <Link href="/pendidikan" className="hover:text-[#66fcf1] transition uppercase tracking-wide">Pendidikan</Link>
              <Link href="/keahlian" className="hover:text-[#66fcf1] transition uppercase tracking-wide">Keahlian</Link>
              <Link href="/pengalaman" className="hover:text-[#66fcf1] transition uppercase tracking-wide">Pengalaman</Link>
            </nav>
          </div>
        </header>

        {/* --- KONTEN HALAMAN --- */}
        <main className="container mx-auto px-6 pt-32 pb-12">
          {children}
        </main>

      </body>
    </html>
  );
}