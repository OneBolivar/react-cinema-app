import type { Showtime } from "../movie";

interface ShowtimeButtonProps {
  showtime: Showtime;
}

export function ShowtimeButton({ showtime }: ShowtimeButtonProps) {
  return (
    <button
      disabled={showtime.isSoldOut}
      className={`text-left border rounded-md px-3 py-2 text-xs transition
        ${showtime.isSoldOut
          ? "border-ink-600 text-mist-300/50 cursor-not-allowed"
          : "border-ink-600 hover:border-violet-500 cursor-pointer"}`}
    >
      <span className="block font-semibold text-sm text-white">{showtime.time}</span>
      <span className="block text-mist-300">
        {showtime.format} · {showtime.roomType} · ${showtime.price.toLocaleString("es-CO")}
      </span>
      <span className="block text-mist-300">
        {showtime.isSoldOut ? "Agotado" : `${showtime.seatsAvailable} sillas`}
      </span>
    </button>
  );
}
