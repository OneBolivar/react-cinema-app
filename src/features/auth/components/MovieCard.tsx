
import type { Movie } from "../movie";
import { ShowtimeButton } from "./ShowtimeButton";

interface MovieCardProps {
  movie: Movie;
}

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <div className="border border-ink-600 rounded-lg p-5 bg-ink-800">
      <div className="flex gap-4">
        <div className="relative shrink-0">
          {movie.isPremiere && (
            <span className="absolute top-1.5 left-1.5 bg-violet-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-sm">
              ESTRENO
            </span>
          )}
          <img src={movie.posterUrl} alt={movie.title} className="w-28 rounded-md object-cover" />
        </div>

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-lg text-white">{movie.title}</h3>
            <span className="text-xs text-gold-400">★ {movie.rating}</span>
            <span className="text-[10px] border border-ink-600 rounded px-1.5 py-0.5 text-mist-300">
              {movie.ageRating}
            </span>
          </div>

          <p className="text-sm text-violet-300 mb-1">{movie.genres.join(" · ")}</p>
          <p className="text-xs text-mist-300 mb-1">{movie.duration} min</p>
          <p className="text-xs text-mist-300 mb-1">{movie.director}</p>
          <p className="text-xs text-mist-300 mb-3">
            {movie.languages.join(", ")}
            {movie.isSubtitled && " · Subtitulada"}
            {movie.isDubbed && " / Doblada"}
          </p>

          <div className="flex gap-2">
            {movie.formats.map((format) => (
              <span key={format} className="text-[10px] bg-ink-700 border border-ink-600 rounded px-2 py-0.5 text-mist-300">
                {format}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-[10px] tracking-widest text-mist-300 mt-4 mb-2">HORARIOS</p>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-4">
        {movie.showtimes.map((showtime) => (
          <ShowtimeButton key={showtime.id} showtime={showtime} />
        ))}
      </div>

      <div className="flex gap-3">
        <button className="border border-ink-600 text-sm px-4 py-2 rounded-md hover:border-violet-500 hover:text-white transition text-mist-300 cursor-pointer">
          Ver detalle
        </button>
        <button className="bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium px-4 py-2 rounded-md transition cursor-pointer">
          Comprar
        </button>
      </div>
    </div>
  );
}
