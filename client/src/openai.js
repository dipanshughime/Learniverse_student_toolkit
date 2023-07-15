const {Configuration,OpenAIApi} = require("openai");

const API_KEY = "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";

 
const configuration = new Configuration ( {
    apiKey: API_KEY, });

    const openai = new OpenAIApi (configuration);

    export async function  sendMessageToOpenApi(message){
        const response = await openai. createCompletion({
            model: "text-davinci-003",
             prompt: message, 
             temperature: 0.7 ,
             max_tokens: 256, 
             top_p: 1, 
             frequency_penalty: 0, 
             presence_penalty: 0
        })
        return response.data.choices[0].text;
    }