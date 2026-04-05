export default function StatsOverview({ items }) {
  return (
    <>
      {/* Mobile: card único */}
      <article className="rounded-[16px] border border-slate-300 bg-white px-3 py-3 shadow-sm md:hidden">
        <div className="grid grid-cols-3 divide-x divide-slate-200">
          {items.map((item) => (
            <div key={item.title} className="px-2 text-center">
              <p className="text-[10px] text-slate-500">{item.title}</p>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {item.value}
              </h3>
              <p className="mt-1 text-[10px] leading-tight text-slate-500">
                {item.helper}
              </p>
            </div>
          ))}
        </div>
      </article>

      {/* Desktop: cards separados */}
      <div className="hidden grid-cols-1 gap-3 md:grid md:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-[16px] border border-slate-300 bg-white px-4 py-3 shadow-sm"
          >
            <p className="text-xs text-slate-500">{item.title}</p>
            <h3 className="mt-1 text-lg font-semibold text-slate-900">
              {item.value}
            </h3>
            <p className="mt-1 text-[11px] leading-tight text-slate-500">
              {item.helper}
            </p>
          </article>
        ))}
      </div>
    </>
  );
}