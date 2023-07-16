const {Configuration,OpenAIApi} = require("openai");

const API_KEY = "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";

 
const configuration = new Configuration ( {
    apiKey: API_KEY, });

const openai = new OpenAIApi (configuration);
export async function  sendMessageToOpenApi(message){
        const response = await openai.createCompletion({
            model:"text-davinci-003",
             prompt: message, 
             temperature: 0.9 ,
             max_tokens: 256, 
             top_p: 1, 
             frequency_penalty: 0, 
             presence_penalty: 0
        })
        return response.data.choices[0].text;
}