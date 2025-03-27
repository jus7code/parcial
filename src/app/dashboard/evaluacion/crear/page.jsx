"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateQuiz() {
  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState("");
  const [options, setOptions] = useState([]);
  const [newOption, setNewOption] = useState("");
  const [correctOption, setCorrectOption] = useState(null);
  const router = useRouter();

  const addOption = () => {
    if (newOption.trim() && options.length < 4) {
      setOptions([...options, newOption]);
      setNewOption("");
    }
  };

  const selectCorrectOption = (index) => {
    setCorrectOption(index);
  };

  const addQuestion = () => {
    if (!newQuestion.trim() || options.length < 2 || correctOption === null)
      return;

    setQuestions([
      ...questions,
      { question: newQuestion, options, correctOption: options[correctOption] },
    ]);

    setNewQuestion("");
    setOptions([]);
    setCorrectOption(null);
  };

  const saveQuiz = async () => {
    await fetch("/api/quizzes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, questions }),
    });
  };

  return (
    <div className="flex justify-center items-center min-h-screen ">
      <div className=" shadow-md rounded-lg p-8 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-6">
          Crear Evaluación
        </h1>

        {/* Campo para el título */}
        <input
          type="text"
          placeholder="Título de la evaluación"
          className="border w-full p-2 my-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        {/* Agregar Pregunta */}
        <div className="my-4">
          <input
            type="text"
            placeholder="Nueva Pregunta"
            className="border w-full p-2 rounded"
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
          />

          {/* Agregar Opciones */}
          <div className="mt-4">
            <input
              type="text"
              placeholder="Nueva Opción"
              className="border w-full p-2 rounded"
              value={newOption}
              onChange={(e) => setNewOption(e.target.value)}
            />
            <button
              onClick={addOption}
              className="bg-gray-500 text-white p-2 rounded mt-2 w-full"
            >
              Agregar Opción
            </button>

            {/* Mostrar Opciones */}
            <div className="mt-4">
              {options.map((option, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 border rounded my-1"
                >
                  <span>{option}</span>
                  <button
                    className={`p-1 rounded ${
                      correctOption === index
                        ? "bg-green-500 text-white"
                        : "bg-gray-300"
                    }`}
                    onClick={() => selectCorrectOption(index)}
                  >
                    ✔
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={addQuestion}
            className="bg-green-500 text-white p-2 rounded mt-4 w-full"
          >
            Guardar Pregunta
          </button>
        </div>

        <button
          onClick={saveQuiz}
          className="bg-blue-500 text-white p-2 rounded w-full mt-4"
        >
          Guardar Evaluación
        </button>
      </div>
    </div>
  );
}
