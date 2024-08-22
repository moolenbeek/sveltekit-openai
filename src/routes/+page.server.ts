import { OPENAI_API_KEY } from "$env/static/private";
import type { PageServerLoad } from "./$types";

import { OpenAI } from "openai";
const openai = new OpenAI({
	apiKey: OPENAI_API_KEY
});
export default openai;

const lat = "45.424721";
const lon = "-75.695000";
const date = Date();

const completion = await openai.chat.completions.create({
	model: "gpt-4o-mini",
	messages: [
		{ role: "system", content: "You are a helpful assistant." },
		{
			role: "user",
			content: `In one simple sentence what should I wear today? latitude = ${lat} longitude = ${lon} date = ${date}`
		}
	]
});

console.log(completion.choices[0].message);

export const load: PageServerLoad = async () => {
	return {
		serverMessage: completion.choices[0].message
	};
};
