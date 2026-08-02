export function FiltersSidebar() {
  const selectClass =
    "w-full bg-ink-700 border border-ink-600 rounded-md px-3 py-2 text-sm text-mist-300 cursor-pointer";

  return (
    <aside className="w-full md:w-64 shrink-0 space-y-5 bg-ink-800 border border-ink-600 rounded-lg p-5 h-fit">
      <p className="font-semibold text-sm text-white">Filtros</p>

      <div>
        <label className="block text-xs text-mist-300 mb-1.5">Buscar</label>
        <input type="text" placeholder="Título" className={selectClass} />
      </div>

      <div>
        <label className="block text-xs text-mist-300 mb-1.5">Género</label>
        <select className={selectClass} defaultValue="">
          <option value="">Todos</option>
          <option value="Ciencia ficción">Ciencia ficción</option>
          <option value="Animación">Animación</option>
          <option value="Suspenso">Suspenso</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-mist-300 mb-1.5">Clasificación</label>
        <select className={selectClass} defaultValue="">
          <option value="">Todos</option>
          <option value="ATP">ATP</option>
          <option value="PG-13">PG-13</option>
        </select>
      </div>

      <div>
        <label className="block text-xs text-mist-300 mb-1.5">Formato</label>
        <select className={selectClass} defaultValue="">
          <option value="">Todos</option>
          <option value="2D">2D</option>
          <option value="3D">3D</option>
          <option value="IMAX">IMAX</option>
        </select>
      </div>

      <label className="flex items-center gap-2 text-sm text-mist-300 cursor-pointer">
        <input type="checkbox" className="accent-violet-500 cursor-pointer" />
        Solo con disponibilidad
      </label>
    </aside>
  );
}
