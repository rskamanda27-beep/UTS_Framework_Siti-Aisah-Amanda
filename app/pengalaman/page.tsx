import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pengalaman() {
  // Ambil data pengalaman (Urutkan dari yang terbaru/id terbesar)
  const [pengalaman]: any = await db.query('SELECT * FROM pengalaman ORDER BY id DESC');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#66fcf1] mb-10 border-b border-gray-800 pb-4 tracking-wide">
        PENGALAMAN KERJA
      </h1>

      <div className="relative border-l-2 border-[#1f2833] ml-3 md:ml-6 space-y-12">
        {pengalaman.map((item: any) => (
          <div key={item.id} className="relative pl-8 md:pl-12 group">
            
            {/* Dot Timeline (Titik Bulat) */}
            <div className="absolute -left-[9px] top-0 w-5 h-5 bg-[#0b0c10] border-4 border-[#66fcf1] rounded-full group-hover:bg-[#66fcf1] transition-colors duration-300"></div>
            
            {/* Judul Posisi */}
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-[#66fcf1] transition-colors">
              {item.posisi}
            </h3>
            
            {/* Perusahaan & Durasi */}
            <div className="flex flex-col md:flex-row md:items-center text-sm font-mono text-[#c5c6c7] mb-4 gap-1 md:gap-3">
              <span className="font-bold">{item.perusahaan}</span>
              <span className="hidden md:block text-[#66fcf1]">•</span>
              <span className="text-[#66fcf1]">{item.durasi}</span>
            </div>
            
            {/* Deskripsi (Card Box) */}
            <div className="bg-[#1f2833] p-6 rounded-lg text-[#c5c6c7] leading-relaxed shadow-md border border-transparent hover:border-[#66fcf1]/30 transition-all">
              {item.deskripsi}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}