import { db } from "@/lib/db";

export const revalidate = 0;

export default async function Keahlian() {
  const [skills]: any = await db.query('SELECT * FROM keahlian');

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-[#66fcf1] mb-8 border-b border-gray-800 pb-4 tracking-wide">
        KEAHLIAN & KOMPETENSI
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {skills.map((item: any) => (
          <div key={item.id} className="group bg-[#1f2833] p-5 rounded-lg border border-transparent hover:border-[#66fcf1] transition-all duration-300 flex items-center hover:shadow-lg hover:shadow-[#66fcf1]/10 cursor-default">
            
            {/* Titik Neon Kecil */}
            <div className="w-2 h-2 bg-[#66fcf1] rounded-full mr-4 group-hover:shadow-[0_0_8px_#66fcf1] transition-shadow"></div>
            
            {/* Nama Skill */}
            <span className="text-lg text-white font-medium group-hover:text-[#66fcf1] transition-colors">
              {item.skill_nama}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}