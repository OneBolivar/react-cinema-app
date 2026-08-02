export interface Showtime {//Representa un horario/función específica de una película
  id: string;
  time: string;         
  format: "2D" | "3D" | "IMAX";
  roomType: "Standard" | "Premium" | "XD";
  price: number;
  seatsAvailable: number;
  totalSeats?: number;
  isSoldOut: boolean;
}

export interface Movie {// Representa una película completa
  id: string;
  title: string;
  rating: number;         
  ageRating: string;       
  genres: string[];//array porque puede contener varios valores del mismo tipo        
  duration: number;        
  director: string;
  languages: string[];
  isSubtitled: boolean;
  isDubbed: boolean;
  formats: ("2D" | "3D" | "IMAX")[];
  posterUrl: string;
  isPremiere: boolean;
  showtimes: Showtime[];
}