
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from '../types';

// IMPORTANT: Assumes API_KEY is set in the environment variables.
const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY environment variable not set.");
}
const ai = new GoogleGenAI({ apiKey: apiKey || '' });

// --- You can edit the chatbot's instructions here ---
const systemInstruction = `
Eres un asistente virtual experto y amable para "Taller Guerrero", un taller mecánico especializado exclusivamente en Direcciones Hidráulicas en Zipaquirá.

Tus objetivos:
1. Convencer al cliente de que somos los mejores expertos en direcciones.
2. Facilitar que nos contacten por WhatsApp.

Información Clave:
- Especialidad: Direcciones hidráulicas, bombas hidráulicas, cremalleras y direcciones electro-asistidas.
- Servicios: Mantenimiento preventivo, reparación de bombas, reconstrucción de cremalleras.
- Ubicación: Zipaquirá, Colombia.
- Horario: L-V 8am-6pm, Sab 8am-1pm.

Instrucciones de comportamiento:
- Sé breve y directo.
- Si preguntan precios, di: "Los precios varían según el daño y el modelo del vehículo. Para una cotización exacta, por favor escríbenos al WhatsApp o visítanos para un diagnóstico."
- Si preguntan por servicios que NO son dirección (ej: frenos, motor), di amablemente: "Somos especialistas exclusivos en Direcciones Hidráulicas para garantizarte la mejor calidad. Para ese servicio te sugerimos buscar un taller general."
- Siempre invita a contactar al WhatsApp al final de la ayuda.
`;
// --- End of editable instructions ---

export const runChat = async (history: ChatMessage[]) => {
  if (!apiKey) {
    return "Error: La clave API de Gemini no está configurada. Por favor, contacte al administrador del sitio.";
  }
  
  const model = 'gemini-2.5-flash';

  const formattedHistory = history.map(msg => ({
    role: msg.role,
    parts: [{ text: msg.text }]
  }));

  // The last message is the new prompt
  const currentPrompt = formattedHistory.pop();
  if (!currentPrompt) {
    return "Error: No hay mensaje para enviar.";
  }

  try {
    const response = await ai.models.generateContent({
      model: model,
      contents: {
        role: currentPrompt.role,
        parts: currentPrompt.parts,
      },
      systemInstruction: systemInstruction,
    });
    
    return response.text;
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return "Lo siento, estoy teniendo problemas para conectarme en este momento. Por favor, intenta de nuevo más tarde.";
  }
};
