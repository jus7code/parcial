"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Dashboard() {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    fetch("/api/quizzes")
      .then((res) => res.json())
      .then((data) => setQuizzes(data));
  }, []);

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-4">Evaluaciones</h1>
      <Link
        href="/dashboard/evaluacion/crear"
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Crear Nueva Evaluación
      </Link>
      <ul className="mt-4 w-full max-w-md">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="p-2 border-b text-center">
            <Link href={`/dashboard/play/${quiz.id}`} className="text-blue-600">
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
