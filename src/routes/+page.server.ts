import { OPENAI_API_KEY } from "$env/static/private"

import { OpenAI } from 'openai';
const openai = new OpenAI({
  apiKey: OPENAI_API_KEY
});
export default openai;

const completion = await openai.chat.completions.create({
  model: "gpt-4o-mini",
  messages: [
      { role: "system", content: "You are a helpful assistant." },
      {
          role: "user",
          content: "Write a haiku about recursion in programming.",
      },
  ],
});

console.log(completion.choices[0].message);