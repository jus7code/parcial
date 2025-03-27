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
    <div className="p-8">
      <h1 className="text-3xl font-bold">Evaluaciones</h1>
      <Link href="/dashboard/create" className="bg-blue-500 text-white p-2 rounded">
        Crear Nueva Evaluación
      </Link>
      <ul className="mt-4">
        {quizzes.map((quiz) => (
          <li key={quiz.id} className="p-2 border-b">
            <Link href={`/dashboard/play/${quiz.id}`} className="text-blue-600">
              {quiz.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
