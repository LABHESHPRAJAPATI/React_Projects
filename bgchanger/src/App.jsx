import { useState } from "react"



function App() {
  const [color, setcolor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("red")}}
            style={{ backgroundColor: "red" }}>red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("blue")}}
            style={{ backgroundColor: "blue" }}>blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("black")}}
            style={{ backgroundColor: "black" }}>black</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("yellow")}}
            style={{ backgroundColor: "yellow" }}>yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("pink")}}
            style={{ backgroundColor: "pink" }}>pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("orange")}}
            style={{ backgroundColor: "orange" }}>orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("lawngreen")}}
            style={{ backgroundColor: "lawngreen" }}>lawngreen</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("green")}}
            style={{ backgroundColor: "green" }}>green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("grey")}}
            style={{ backgroundColor: "grey" }}>grey</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("blueviolet")}}
            style={{ backgroundColor: "blueviolet" }}>blueviolet</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("palevioletred")}}
            style={{ backgroundColor: "palevioletred" }}>palevioletred</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor(" #FF59AA")}}
            style={{ backgroundColor: "#FF59AA" }}>Wild Strawberry</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("#126B82")}}
            style={{ backgroundColor: "#126B82" }}>Dark Aqua</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
          onClick={()=>{setcolor("#74071B")}}
            style={{ backgroundColor: "#74071B" }}>Maroon</button>

        </div>

      </div>
    </div>
  )
}

export default App
