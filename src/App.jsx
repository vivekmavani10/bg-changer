import { useState } from "react";

function App() {
  const [color, setColor] = useState('olive');

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 p-4 md:p-6 lg:p-8">
          <div className="bg-white rounded-full px-5 flex flex-wrap justify-center gap-4">
            <button className="bg-red-700 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('red') }}>Red</button>
            <button className="bg-green-700 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('green') }}>Green</button>
            <button className="bg-pink-300 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('pink') }}>Pink</button>
            <button className="bg-yellow-300 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('yellow') }}>Yellow</button>
            <button className="bg-blue-700 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('blue') }}>Blue</button>
            <button className="bg-purple-800 text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('purple') }}>Purple</button>
            <button className="bg-black text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" onClick={() => { setColor('black') }}>Black</button>
            <button className="text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" style={{ backgroundColor: 'teal' }} onClick={() => { setColor('teal') }}>Teal</button>
            <button className="text-black mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" style={{ backgroundColor: 'aqua' }} onClick={() => { setColor('aqua') }}>Aqua</button>
            <button className="text-white mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" style={{ backgroundColor: 'grey' }} onClick={() => { setColor('grey') }}>Grey</button>
            <button className="text-black mt-2 mb-2 rounded-full px-4 sm:px-6 md:px-8" style={{ backgroundColor: 'lavender' }} onClick={() => { setColor('lavender') }}>Lavender</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;