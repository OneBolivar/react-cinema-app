import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Ticket, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import { formatCOP, movies } from "@/lib/data";
import { useAuth, useReservations } from "@/lib/store";

const ROWS = ["A", "B", "C", "D", "E", "F", "G", "H"];
const COLS = 10;

// Determinación simplificada de asientos ocupados
function isOccupiedSeat(row: string, col: number) {
  return (row.charCodeAt(0) * 7 + col * 3) % 5 === 0;
}

export const Route = createFileRoute("/asientos/$movieId")({
  validateSearch: (search: Record<string, unknown>) => ({
    date: String(search["date"] ?? ""),
    time: String(search["time"] ?? ""),
    format: String(search["format"] ?? ""),
    complex: String(search["complex"] ?? ""),
  }),
  loader: ({ params }) => {
    const movie = movies.find((m) => m.id === params.movieId);
    if (!movie) throw notFound();
    return movie;
  },
  component: SeatsPage,
  notFoundComponent: () => (
    <div className="p-10 text-center">
      <h1 className="text-xl font-bold text-slate-800">Función no encontrada</h1>
      <Link 
        to="/" 
        className="mt-4 inline-block bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition"
      >
        Volver a la cartelera
      </Link>
    </div>
  ),
});

function SeatsPage() {
  const movie = Route.useLoaderData();
  const search = Route.useSearch();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { add } = useReservations();

  const [selected, setSelected] = useState<string[]>([]);

  const showtime = movie.showtimes.find(
    (s) => s.time === search.time && s.format === search.format && s.complex === search.complex
  ) ?? movie.showtimes[0];

  const total = selected.length * (showtime?.price ?? 0);

  const toggleSeat = (code: string) => {
    setSelected((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  const handleConfirm = () => {
    if (!user) {
      toast.error("Inicia sesión para comprar tus entradas");
      return navigate({ to: "/login" });
    }
    if (selected.length === 0) {
      toast.error("Selecciona al menos un asiento");
      return;
    }

    add({
      movieId: movie.id,
      movieTitle: movie.title,
      date: search.date,
      time: showtime.time,
      format: showtime.format,
      complex: showtime.complex,
      seats: selected.length,
      seatCodes: [...selected].sort(),
      total,
    });

    toast.success("Reserva confirmada con éxito");
    navigate({ to: "/reservas" });
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-6 text-slate-800">
      {/* Botón Volver */}
      <Link
        to="/pelicula/$movieId"
        params={{ movieId: movie.id }}
        className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition"
      >
        <ArrowLeft className="w-4 h-4" /> Volver al detalle
      </Link>

      {/* Encabezado */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">Selecciona tus asientos</h1>
        <p className="text-sm text-slate-500 mt-1">
          {movie.title} • {search.date || "Hoy"} • {showtime?.time} • {showtime?.format} • {showtime?.complex}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Mapa de Asientos */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col items-center">
          {/* Pantalla */}
          <div className="w-3/4 h-2 bg-indigo-500 rounded-full mb-2 shadow-sm" />
          <span className="text-xs uppercase tracking-widest text-slate-400 mb-8 font-semibold">
            Pantalla
          </span>

          {/* Grid de Asientos */}
          <div className="space-y-3 overflow-x-auto w-full flex flex-col items-center pb-4">
            {ROWS.map((row) => (
              <div key={row} className="flex items-center gap-2">
                <span className="w-5 text-center text-xs font-bold text-slate-400">{row}</span>
                {Array.from({ length: COLS }, (_, i) => {
                  const code = `${row}${i + 1}`;
                  const occupied = isOccupiedSeat(row, i + 1);
                  const isSelected = selected.includes(code);

                  return (
                    <button
                      key={code}
                      disabled={occupied}
                      onClick={() => toggleSeat(code)}
                      className={`w-8 h-8 rounded-lg text-xs font-medium transition-all border ${
                        occupied
                          ? "bg-slate-100 border-slate-200 text-slate-300 cursor-not-allowed"
                          : isSelected
                          ? "bg-indigo-600 border-indigo-600 text-white shadow font-semibold scale-105"
                          : "bg-white border-slate-300 text-slate-700 hover:border-indigo-400 hover:bg-indigo-50"
                      }`}
                    >
                      {i + 1}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>

          {/* Leyenda */}
          <div className="flex gap-6 mt-6 text-xs text-slate-600 border-t border-slate-100 pt-4 w-full justify-center">
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded border border-slate-300 bg-white" /> Disponible
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-indigo-600" /> Seleccionado
            </div>
            <div className="flex items-center gap-2">
              <span className="w-4 h-4 rounded bg-slate-100 border border-slate-200" /> Ocupado
            </div>
          </div>
        </div>

        {/* Resumen de la Compra */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-fit space-y-4">
          <h2 className="text-lg font-bold flex items-center gap-2 text-slate-900">
            <Ticket className="w-5 h-5 text-indigo-600" /> Resumen
          </h2>

          <div className="space-y-3 text-sm border-b border-slate-100 pb-4">
            <div className="flex justify-between items-start">
              <span className="text-slate-500">Asientos:</span>
              <span className="font-semibold text-slate-900 text-right max-w-[150px] truncate">
                {selected.length > 0 ? [...selected].sort().join(", ") : "—"}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-500">Precio unitario:</span>
              <span className="font-medium text-slate-700">{formatCOP(showtime?.price ?? 0)}</span>
            </div>
          </div>

          <div className="flex justify-between items-center text-base font-bold text-slate-900">
            <span>Total:</span>
            <span className="text-xl text-indigo-600">{formatCOP(total)}</span>
          </div>

          <button
            onClick={handleConfirm}
            disabled={selected.length === 0}
            className="w-full bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed text-white font-medium py-2.5 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
          >
            <CheckCircle className="w-4 h-4" /> Confirmar compra
          </button>

          {!user && (
            <p className="text-xs text-amber-700 text-center bg-amber-50 p-2.5 rounded-lg border border-amber-200">
              Debes iniciar sesión para completar la compra.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}