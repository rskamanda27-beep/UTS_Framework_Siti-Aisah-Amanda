import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Pendidikan() {
  const [pendidikan]: any = await db.query('SELECT * FROM pendidikan');

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up">
      {/* Judul Halaman */}
      <h1 className="text-3xl font-bold text-[#66fcf1] mb-8 border-b border-gray-800 pb-4 tracking-wide">
        RIWAYAT PENDIDIKAN
      </h1>

      <div className="grid gap-6">
        {pendidikan.map((item: any) => (
          <div key={item.id} className="bg-[#1f2833] p-6 rounded-xl border-l-4 border-[#66fcf1] shadow-lg hover:shadow-[#66fcf1]/10 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-2">
              <h2 className="text-2xl font-bold text-white">{item.institusi}</h2>
              
              {/* Tahun (Badge) */}
              <span className="bg-[#0b0c10] text-[#66fcf1] px-4 py-1 rounded-full text-xs font-mono border border-[#66fcf1]/30 mt-2 md:mt-0">
                {item.tahun}
              </span>
            </div>
            <p className="text-xl text-[#c5c6c7] font-medium">{item.gelar}</p>
          </div>
        ))}
      </div>
    </div>
  );
}