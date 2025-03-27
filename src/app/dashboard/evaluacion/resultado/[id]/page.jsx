"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ResultPage() {
  const { id } = useParams();
  const [result, setResult] = useState(null);

  useEffect(() => {
    if (id) {
      fetch(`/api/quizzes/${id}/result`)
        .then((res) => res.json())
        .then((data) => setResult(data));
    }
  }, [id]);

  if (!result) return <div className="p-8">Cargando resultados...</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Resultados de la Evaluación</h1>
      <h2 className="text-xl mt-2">{result.title}</h2>
      <p className="mt-4 text-lg font-semibold">Puntuación: {result.score} / {result.total}</p>
      
      <div className="mt-4">
        {result.answers.map((answer, index) => (
          <div key={index} className="p-4 border-b">
            <h3 className="text-lg font-bold">{answer.question}</h3>
            <p className={`mt-1 ${answer.correct ? "text-green-600" : "text-red-600"}`}>
              Tu respuesta: {answer.selected}
            </p>
            {!answer.correct && (
              <p className="text-green-600">Respuesta correcta: {answer.correctAnswer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
