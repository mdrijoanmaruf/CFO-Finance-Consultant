import { categories } from "./insightsData";

interface Props {
  active: string;
  onSelect: (cat: string) => void;
}

export default function CategoryFilterBar({ active, onSelect }: Props) {
  return (
    <section className="relative py-6 lg:py-8 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex gap-2 flex-wrap">
          {categories.map((cat) => {
            const isActive = active === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => onSelect(cat)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all duration-300 border ${
                  isActive
                    ? "bg-[#c8a96e]/15 border-[#c8a96e]/40 text-[#c8a96e]"
                    : "bg-white/[0.02] border-white/[0.07] text-white/60 hover:bg-white/[0.06] hover:border-[#c8a96e]/20 hover:text-white"
                }`}
              >
                {isActive && (
                  <span
                    className="inline-block w-1.5 h-1.5 rounded-full"
                    style={{ background: "#c8a96e" }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
