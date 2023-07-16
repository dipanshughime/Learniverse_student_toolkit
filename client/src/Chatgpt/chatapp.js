import { Configuration, OpenAIApi } from 'openai';
import { useState } from 'react';
import '../App.css';

function Chatapp() {


  const configuration = new Configuration({
    apiKey : "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"
  })

  const openai = new OpenAIApi(configuration)

  const [prompt , setprompt] = useState("")
  const [result, setResult] = useState("")
 
  const handelClick = async () =>{

    try{
  
      const response = await openai.createCompletion({
        model : "text-davinci-003",
        prompt : prompt ,
        temperature : 0.5,
        max_tokens : 100

      })
     
      setResult(response.data.choices[0].text)

      


    }catch(error){console.log(error)}

  }

  return (
    <div className="App">
  
   <div className='text'>
    <textarea name="" id="" cols="40" rows="10" onChange={(e) => setprompt(e.target.value)}></textarea>
    <button className='generate' onClick={()=>handelClick()}>Generate</button>
    </div>

    <p className='response'>{result}</p>
      
      
    </div>
  );
}

export default Chatapp;