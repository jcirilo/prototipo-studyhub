function PlanningItem({ item }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-[14px] border border-slate-200 bg-slate-50 px-3 py-2">
      <div className="shrink-0">
        <p className="text-xs font-semibold text-slate-700">{item.day}</p>
        <p className="text-[11px] text-slate-500">{item.time}</p>
      </div>

      <div className="min-w-0 text-right">
        <p className="text-sm font-medium text-slate-800">{item.subject}</p>
        <p className="text-[11px] text-slate-500">{item.content}</p>
      </div>
    </div>
  );
}

export default function PlanningCard({ planning }) {
  return (
    <article className="rounded-[18px] border border-slate-300 bg-white p-4 shadow-sm">
      <div className="mb-4">
        <h2 className="text-base font-semibold text-slate-900">
          Planejamento da semana
        </h2>
        <p className="mt-1 text-sm text-slate-600">
          Próximos horários reservados para estudo.
        </p>
      </div>

      <div className="space-y-2">
        {planning.map((item, index) => (
          <PlanningItem key={index} item={item} />
        ))}
      </div>
    </article>
  );
}