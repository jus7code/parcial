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

import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function PlayQuiz() {
  const router = useRouter();
  const { id } = router.query;
  const [quiz, setQuiz] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (id) {
      fetch(`/api/quizzes/${id}`)
        .then((res) => res.json())
        .then((data) => setQuiz(data));
    }
  }, [id]);

  const handleNext = () => {
    if (selectedOption === quiz.questions[currentIndex].correctOption) {
      setScore(score + 1);
    }
    setSelectedOption(null);
    setCurrentIndex(currentIndex + 1);
  };

  if (!quiz) return <div>Cargando...</div>;
  if (currentIndex >= quiz.questions.length) return <div>Juego terminado. Puntuación: {score}</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">{quiz.title}</h1>
      <h2>{quiz.questions[currentIndex].question}</h2>
      {quiz.questions[currentIndex].options.map((option, index) => (
        <button key={index} className="block border p-2 my-2" onClick={() => setSelectedOption(option)}>
          {option}
        </button>
      ))}
      <button onClick={handleNext} className="bg-blue-500 text-white p-2 rounded">
        Siguiente
      </button>
    </div>
  );
}
