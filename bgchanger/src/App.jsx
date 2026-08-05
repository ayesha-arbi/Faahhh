import { useState } from 'react'


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200" style={
        { backgroundColor: color }
      }>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-ig bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "red" }}>RED</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "blue" }} onClick={() => setColor("blue")}>BLUE</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "green" }}>GREEN</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "purple" }}>PURPLE</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "pink" }}>PINK</button>
            <button className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{ backgroundColor: "brown" }}>BROWN</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
