import { useState } from "react"
import { requestToGroqAI } from "./utils/groq"


function App() {
  const [data, setData] = useState("")
  const handleSubmit = async() => {
      const ai = await requestToGroqAI(content.value)
      setData(ai)
  }
  return (
    <div className="flex flex-col min-h-[100vh] justify-center items-center w-full">
      <h1 className="text-4xl text-white">GROQ Test</h1>
      <form className="flex flex-col gap-4 py-4">
        <input
         className="py-2 px-4 text-md rounded-md text-black" type="text"
         placeholder="What do you want?"
         id="content" />
        <button onClick={handleSubmit} type="button" className="bg-indigo-500 rounded-md py-2 px-4 font-bold text-white">Send</button>
      </form>
      <div>{data}</div>
    </div>
  )
}

export default App
