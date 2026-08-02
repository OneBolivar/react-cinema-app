export function NavBar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-ink-600 bg-ink-850">
      <div className="flex items-center gap-2">
        <div className="w-7 h-7 bg-violet-500 rounded-md flex items-center justify-center text-xs font-bold text-white">▤</div>
        <span className="font-bold tracking-wide text-white">RIWI<span className="text-violet-400">FILMS</span></span>
      </div>

      <nav className="hidden md:flex items-center gap-6 text-sm">
        <a href="#" className="text-mist-500 hover:text-white transition cursor-pointer font-medium">Cartelera</a>
        <a href="#" className="text-mist-500 hover:text-white transition cursor-pointer">Mis reservas</a>
      </nav>

      <div className="flex items-center gap-3">
        <button className="border border-ink-600 text-sm px-3 py-1.5 rounded-full text-mist-300 hover:text-white hover:border-mist-300 transition cursor-pointer">Cali</button>
        <button className="bg-violet-500 hover:bg-violet-600 text-white text-sm font-medium px-4 py-1.5 rounded-md cursor-pointer transition">
          Ingresar
        </button>
      </div>
    </header>
  );
}
