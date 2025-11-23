import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Home() {
  const [rows]: any = await db.query('SELECT * FROM biodata LIMIT 1');
  const user = rows[0];

  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 min-h-[80vh]">
      
      {/* --- BAGIAN KIRI (TEKS) --- */}
      <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
        
        {/* ELEMENT HIJAU (DESKRIPSI) */}
        {/* Saya buat inline-block agar mirip pill tapi muat teks panjang */}
        <div className="inline-block bg-[#66fcf1] text-[#0b0c10] font-bold px-4 py-2 rounded-lg rounded-tl-none shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
           Hello, I'm
        </div>

        {/* NAMA BESAR */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          {user?.nama}
        </h1>

        {/* DESKRIPSI UTAMA */}
        <p className="text-[#c5c6c7] text-lg leading-relaxed border-l-4 border-[#66fcf1] pl-4">
          {user?.deskripsi}
        </p>

        {/* KONTAK INFO */}
        <div className="pt-6 space-y-3 text-[#c5c6c7]">
           <div className="flex items-center justify-center md:justify-start gap-3">
             {/* Icon Email */}
             <svg className="w-5 h-5 text-[#66fcf1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             <span>{user?.email}</span>
           </div>
           <div className="flex items-center justify-center md:justify-start gap-3">
             {/* Icon Phone */}
             <svg className="w-5 h-5 text-[#66fcf1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
             <span>{user?.no_hp}</span>
           </div>
           <div className="flex items-center justify-center md:justify-start gap-3">
             {/* Icon Location */}
             <svg className="w-5 h-5 text-[#66fcf1]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
             <span>Sukabumi, Indonesia</span>
           </div>
        </div>
      </div>

      {/* --- BAGIAN KANAN (FOTO) --- */}
      <div className="w-full md:w-1/2 flex justify-center relative">
        {/* Lingkaran Luar (Border Tebal) */}
        <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-[10px] border-[#1f2833] shadow-2xl overflow-hidden relative z-10">
          <img 
            src={user?.foto_url || "/foto2.jpg"} 
            alt="Profile" 
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition duration-500"
          />
        </div>
        
        {/* Efek Glow di belakang foto */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#66fcf1] blur-[100px] opacity-20 -z-0"></div>
      </div>

    </div>
  );
}