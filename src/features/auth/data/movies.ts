import type { Movie } from "../movie";

export const moviesData: Movie[] = [
  {
    id: "orbita-cero",
    title: "Órbita Cero",
    rating: 4.6,
    ageRating: "PG-13",
    genres: ["Ciencia ficción", "Suspenso"],
    duration: 132,
    director: "Ana Sofía Restrepo",
    languages: ["Inglés", "Español"],
    isSubtitled: true,
    isDubbed: true,
    formats: ["2D", "3D", "IMAX"],
    posterUrl: "https://stockcake.com/es/i/explorador-espacial-ne%C3%B3n_1667002_1208860",
    isPremiere: true,
    showtimes: [
      { id: "s1", time: "13:20", format: "2D", roomType: "Premium", price: 18000, seatsAvailable: 42, isSoldOut: false },
      { id: "s2", time: "15:40", format: "3D", roomType: "Standard", price: 21500, seatsAvailable: 8, isSoldOut: false },
      { id: "s3", time: "18:10", format: "IMAX", roomType: "XD", price: 25000, seatsAvailable: 0, isSoldOut: true },
      { id: "s4", time: "20:30", format: "2D", roomType: "Premium", price: 28500, seatsAvailable: 25, isSoldOut: false },
      { id: "s5", time: "22:45", format: "3D", roomType: "Standard", price: 32000, seatsAvailable: 61, isSoldOut: false },
    ],
  },
  {
    id: "ballena-de-papel",
    title: "Ballena de Papel",
    rating: 4.8,
    ageRating: "ATP",
    genres: ["Animación", "Familiar", "Aventura"],
    duration: 98,
    director: "Marcos Iriarte",
    languages: ["Español"],
    isSubtitled: false,
    isDubbed: true,
    formats: ["2D", "3D"],
    posterUrl: "https://id-preview--31f091c6-20f2-43ba-9521-52f8ba312b3b.lovable.app/assets/poster-2-0P6LAv-a.jpg",
    isPremiere: false,
    showtimes: [
      { id: "s6", time: "12:00", format: "2D", roomType: "Standard", price: 14000, seatsAvailable: 55, isSoldOut: false },
      { id: "s7", time: "16:15", format: "3D", roomType: "Standard", price: 17000, seatsAvailable: 30, isSoldOut: false },
    ],
  },
];


export const weekDates = [
  { label: "Dom", day: 2, month: "Ago", active: true },
  { label: "Lun", day: 3, month: "Ago", active: false },
  { label: "Mar", day: 4, month: "Ago", active: false },
  { label: "Mié", day: 5, month: "Ago", active: false },
  { label: "Jue", day: 6, month: "Ago", active: false },
  { label: "Vie", day: 7, month: "Ago", active: false },
  { label: "Sáb", day: 8, month: "Ago", active: false },
];
