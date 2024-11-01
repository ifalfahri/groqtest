import { Groq } from "groq-sdk"

const GROQ_API = import.meta.env.VITE_GROQ_API_KEY;

const groq = new Groq({ 
    apiKey: GROQ_API,
    dangerouslyAllowBrowser: true,
 });

 export const requestToGroqAI = async(content) => {
    const reply = await groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content
            }
        ],
        model: "llama-3.2-3b-preview",
    });
    return reply.choices[0].message.content;
 }
