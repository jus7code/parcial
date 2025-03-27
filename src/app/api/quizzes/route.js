import { NextResponse } from "next/server";
import { prisma } from "@/lib/db"; // Asegúrate de que Prisma está configurado

export async function POST(req) {
  try {
    const body = await req.json();
    const { titulo, descripcion, preguntas } = body;

    if (!titulo || !preguntas || preguntas.length === 0) {
      return NextResponse.json(
        { error: "Faltan datos obligatorios" },
        { status: 400 }
      );
    }

    // Crear la evaluación con preguntas y opciones
    const evaluacion = await prisma.evaluacion.create({
      data: {
        titulo,
        descripcion,
        preguntas: {
          create: preguntas.map((pregunta) => ({
            enunciado: pregunta.enunciado,
            opciones: {
              create: pregunta.opciones.map((opcion) => ({
                texto: opcion.texto,
                esCorrecta: opcion.texto === pregunta.correctOption, // Marca la opción correcta
              })),
            },
          })),
        },
      },
      include: { preguntas: { include: { opciones: true } } }, // Incluir preguntas y opciones creadas
    });

    return NextResponse.json(evaluacion, { status: 201 });
  } catch (error) {
    console.error("Error al crear la evaluación:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
