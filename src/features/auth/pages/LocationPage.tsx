import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const LocationPage = () => {
    const navigate = useNavigate();

    const [country, setCountry] = useState("");
    const [department, setDepartment] = useState("");
    const [city, setCity] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const departments: Record<string, string[]> = {
        Colombia: [
            "Atlántico",
            "Antioquia",
            "Cundinamarca",
            "Bolívar",
            "Valle del Cauca",
        ],
    };

    const cities: Record<string, string[]> = {
        "Atlántico": [
            "Barranquilla",
            "Soledad",
            "Malambo",
            "Puerto Colombia",
        ],

        Antioquia: [
            "Medellín",
            "Bello",
            "Envigado",
            "Itagüí",
        ],

        Cundinamarca: [
            "Bogotá",
            "Soacha",
            "Chía",
            "Zipaquirá",
        ],

        "Valle del Cauca": [
            "Cali",
            "Palmira",
            "Buenaventura",
            "Tuluá",
        ],

        Bolívar: [
            "Cartagena",
            "Magangué",
            "Turbaco",
        ],
    };

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault();

        setErrorMessage(null);

        if (!country || !department || !city) {
            setErrorMessage("Debes seleccionar todos los campos.");
            return;
        }

        setIsLoading(true);

        try {
            console.log({
                country,
                department,
                city,
            });

            // Cuando exista la vista Movies, cambia esta ruta.
            // navigate("/movies");

            alert("Ubicación guardada correctamente.");
        } catch (error) {
            if (error instanceof Error) {
                setErrorMessage(error.message);
            } else {
                setErrorMessage("Ocurrió un error inesperado.");
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-6">

            <div className="w-full max-w-xl bg-gray-900 border border-gray-700 rounded-3xl shadow-2xl overflow-hidden">

                <div className="bg-red-600 p-8">

                    <h1 className="text-4xl font-bold text-center text-white">
                        🎬 CinemaPass
                    </h1>

                    <p className="text-center text-red-100 mt-2">
                        Selecciona tu ubicación
                    </p>

                </div>

                <form
                    onSubmit={handleSubmit}
                    className="p-8 space-y-6"
                >

                    {errorMessage && (
                        <div className="bg-red-500/20 border border-red-500 text-red-300 rounded-xl p-4 text-center">
                            {errorMessage}
                        </div>
                    )}

                    <div>

                        <label className="block mb-2 font-medium">
                            País
                        </label>

                        <select
                            value={country}
                            onChange={(e) => {
                                setCountry(e.target.value);
                                setDepartment("");
                                setCity("");
                            }}
                            className={`w-full rounded-xl px-4 py-3 border transition ${country
                                    ? "bg-red-600 border-red-400"
                                    : "bg-gray-800 border-gray-600"
                                }`}
                        >
                            <option value="">Selecciona un país</option>
                            <option value="Colombia">🇨🇴 Colombia</option>
                        </select>

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Departamento
                        </label>

                        <select
                            value={department}
                            disabled={!country}
                            onChange={(e) => {
                                setDepartment(e.target.value);
                                setCity("");
                            }}
                            className={`w-full rounded-xl px-4 py-3 border transition ${department
                                    ? "bg-red-600 border-red-400"
                                    : "bg-gray-800 border-gray-600"
                                } disabled:opacity-50`}
                        >
                            <option value="">
                                Selecciona un departamento
                            </option>

                            {country &&
                                departments[country].map((dep) => (
                                    <option
                                        key={dep}
                                        value={dep}
                                    >
                                        {dep}
                                    </option>
                                ))}
                        </select>

                    </div>

                    <div>

                        <label className="block mb-2 font-medium">
                            Ciudad o Municipio
                        </label>

                        <select
                            value={city}
                            disabled={!department}
                            onChange={(e) => setCity(e.target.value)}
                            className={`w-full rounded-xl px-4 py-3 border transition ${city
                                    ? "bg-red-600 border-red-400"
                                    : "bg-gray-800 border-gray-600"
                                } disabled:opacity-50`}
                        >
                            <option value="">
                                Selecciona una ciudad
                            </option>

                            {department &&
                                cities[department].map((item) => (
                                    <option
                                        key={item}
                                        value={item}
                                    >
                                        {item}
                                    </option>
                                ))}
                        </select>

                    </div>

                    {city && (
                        <div className="bg-red-500/10 border border-red-500 rounded-xl p-4">

                            <h3 className="font-semibold text-red-400 mb-2">
                                Ubicación seleccionada
                            </h3>

                            <p>🌎 {country}</p>
                            <p>📍 {department}</p>
                            <p>🏙️ {city}</p>

                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-3 bg-red-600 hover:bg-red-700 rounded-xl font-semibold transition"
                    >
                        {isLoading ? "Cargando..." : "Continuar"}
                    </button>

                </form>

            </div>

        </div>
    );
};