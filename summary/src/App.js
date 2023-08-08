
function App() {
  return (
    <div className="w-full h-screen flex  md:items-center items-start justify-center font-Hanken">
       <div className="flex md:flex-row flex-col gap-x-5 md:gap-y-0 gap-y-5 md:w-[45rem] w-full h-[30rem]">
        <div className="bg-CobaltBlue bg-opacity-90 md:w-[50%] w-full  md:gap-y-0 gap-y-5 text-white md:rounded-lg rounded-none flex flex-col items-center justify-around ">
          <h1 className="text-gray-300 text-xl">Your Results</h1>
          <div className="flex flex-col  cursor-pointer items-center bg-CobaltBlue p-14 text-xl shadow-md shadow-blue-500 rounded-full">
            <span>76</span>
            <span>of 100</span>
          </div>
          <h1 className="text-3xl">Great</h1>
          <p className="text-center w-[70%]">
            You scored higher than 65% of the people  who took this test.
          </p>
        </div>
        <div className="md:w-[50%] w-[90%] shadow-md rounded-lg flex flex-col gap-y-4 items-start justify-start p-5">
          <h1 className="text-2xl border-b border-purple-500">Summary</h1>
          <ul className="w-full my-10 flex flex-col gap-y-5">
            <li className="bg-LightRed w-full flex items-center justify-around py-2 rounded-md bg-opacity-40 text-red-500">
              <div>
                <span>
                  Reaction
                </span>
              </div>
              <div>
                <span className="text-black">
                  80/100
                </span>
              </div>
            </li>
            <li className="bg-OrangeyYellow w-full flex items-center justify-around py-2 rounded-md bg-opacity-40 text-yellow-500">
              <div>
                <span>
                  Memory
                </span>
              </div>
              <div>
                <span className="text-black">
                  80/100
                </span>
              </div>
            </li>
            <li className="bg-GreenTeal w-full flex items-center justify-around py-2 rounded-md bg-opacity-40 text-green-500">
              <div>
                <span>
                  Verbal
                </span>
              </div>
              <div>
                <span className="text-black">
                  80/100
                </span>
              </div>
            </li>
            <li className="bg-CobaltBlue w-full flex items-center justify-around py-2 rounded-md bg-opacity-40 text-blue-500">
              <div>
                <span>
                  Visual
                </span>
              </div>
              <div>
                <span className="text-black">
                  80/100
                </span>
              </div>
            </li>
          </ul>
          <button className="bg-gray-700 text-white w-full py-3 rounded-2xl hover:bg-opacity-40   hover:text-black font-bold transition-all duration-300">Continue</button>
        </div>
       </div>
    </div>
  );
}

export default App;
