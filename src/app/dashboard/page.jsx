"use client";
import React from "react";
import Link from "next/link";

export default function Dashboard() {
  return (
    <div className="flex-1 flex flex-col justify-center items-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
        {/* Caja 1 - Asistencia */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Gestión de Asistencia</h2>
          <Link href="/dashboard/asistencia">
            <button className="bg-green-600 hover:bg-green-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Asistencia
            </button>
          </Link>
        </div>

        {/* Caja 2 - Actividades */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Gestión de Actividades</h2>
          <Link href="/dashboard/actividades">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Actividades
            </button>
          </Link>
        </div>

        {/* Caja 3 - Evaluaciones */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Evaluaciones</h2>
          <Link href="/dashboard/evaluacion">
            <button className="bg-yellow-600 hover:bg-yellow-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Evaluaciones
            </button>
          </Link>
        </div>

        {/* Caja 4 - Votaciones */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Votaciones</h2>
          <Link href="/dashboard/votacion">
            <button className="bg-blue-600 hover:bg-blue-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Votaciones
            </button>
          </Link>
        </div>

        {/* Caja 5 - Sorteos */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Sorteos</h2>
          <Link href="/dashboard/sorteos">
            <button className="bg-green-600 hover:bg-green-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Sorteos
            </button>
          </Link>
        </div>

        {/* Caja 6 - Reportes */}
        <div className="bg-neutral-800 p-10 text-center rounded-lg shadow-lg hover:scale-105 transition duration-300">
          <h2 className="text-xl font-bold mb-4">Reportes</h2>
          <Link href="/dashboard/reportes">
            <button className="bg-purple-600 hover:bg-purple-700 transition text-white p-2 rounded-lg mt-4">
              Ir a Reportes
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
