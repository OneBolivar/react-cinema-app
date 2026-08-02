
interface DateOption {
  label: string;
  day: number;
  month: string;
  active?: boolean;
  isoDate?: string;
}

interface DateSelectorProps {
  dates: DateOption[];
}

export function DateSelector({ dates }: DateSelectorProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {dates.map((d) => (
        <button
          key={d.isoDate ?? `${d.day}-${d.month}`}
          className={`shrink-0 w-16 rounded-lg border px-2 py-3 text-center transition cursor-pointer
            ${d.active
              ? "bg-violet-500 border-violet-500 text-white"
              : "border-ink-600 text-mist-300 hover:border-violet-500 hover:text-white"}`}
        >
          <span className="block text-xs">{d.label}</span>
          <span className="block text-lg font-semibold text-white">{d.day}</span>
          <span className="block text-[10px]">{d.month}</span>
        </button>
      ))}
    </div>
  );
}
