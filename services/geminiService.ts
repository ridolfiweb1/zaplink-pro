
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const suggestMessage = async (context: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Sugira UMA mensagem curta e profissional de saudação para WhatsApp baseada neste contexto: "${context}". A resposta deve ser apenas o texto da mensagem, sem aspas ou explicações extras. Seja criativo e diferente a cada geração. Se não houver contexto, forneça uma saudação padrão amigável como "Olá! Gostaria de saber mais sobre seus serviços."`,
      config: {
        temperature: 1.0,
        maxOutputTokens: 100,
      },
    });

    return response.text || "Olá! Gostaria de mais informações.";
  } catch (error) {
    console.error("Gemini suggestion error:", error);
    return "Olá! Gostaria de falar com você.";
  }
};
