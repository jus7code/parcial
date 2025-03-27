"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [correctOption, setCorrectOption] = useState("");
  const router = useRouter();

  const addQuestion = () => {
    setQuestions([...questions, { question: newQuestion, options, correctOption }]);
    setNewQuestion("");
    setOptions([]);
    setCorrectOption("");
  };

  const saveQuiz = async () => {
    await fetch("/api/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, questions }),
    });
    router.push("/dashboard");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">Crear Evaluación</h1>
      <input
        type="text"
        placeholder="Título"
        className="border p-2 my-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div>
        <input
          type="text"
          placeholder="Nueva Pregunta"
          className="border p-2 my-2"
          value={newQuestion}
          onChange={(e) => setNewQuestion(e.target.value)}
        />
        <button onClick={addQuestion} className="bg-green-500 text-white p-2 rounded">
          Agregar Pregunta
        </button>
      </div>
      <button onClick={saveQuiz} className="bg-blue-500 text-white p-2 rounded mt-4">
        Guardar Evaluación
      </button>
    </div>
  );
}
