
import { NavBar, HeroBanner, DateSelector, FiltersSidebar, MovieCard } from "../../components";
import { weekDates, moviesData } from "../../data/movies";

export function HomePage() {
  return (
    <div className="min-h-screen bg-ink-900 text-mist-500">
      <NavBar />
      <HeroBanner />

      <div className="px-6 py-6">
        <DateSelector dates={weekDates} />
      </div>

      <div className="px-6 pb-12 flex flex-col md:flex-row gap-6">
        <FiltersSidebar />

        <main className="flex-1 space-y-5">
          {moviesData.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </main>
      </div>
    </div>
  );
}
