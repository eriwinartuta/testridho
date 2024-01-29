import "./App.css";
import Reaction from "../src/asset/img/iconoir_flash.png";
import Memory from "../src/asset/img/iconoir_brain.png";
import Verbal from "../src/asset/img/iconoir_chat-remove.png";
import Visual from "../src/asset/img/iconoir_eye-empty.png";

function App() {
  const dataObjects = [
    { color: "red", text: "Reaction ", img: Reaction, text2: 80 },
    { color: "yellow", text: "Memory", img: Memory, text2: 92 },
    { color: "green", text: "Verbal", img: Verbal, text2: 61 },
    { color: "blue", text: "Visual", img: Visual, text2: 73 },
  ];

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row w-full md:w-full">
        <div className="flex flex-col text-center bg-gradient-to-b from-indigo-500 to-blue-500 px-4 py-2 w-full rounded-md md:w-1/2">
          <h5 className="mb-2 text-xl text-center font-medium text-white dark:text-neutral-50 mt-5">
            Your Result
          </h5>
          <center>
            <div className="w-36 h-36 bg-gradient-to-t from-indigo-600 to-blue-600 rounded-full flex items-center justify-center text-white text-center">
              <p>
                {" "}
                <span className="text-5xl font-bold">76</span> <br />
                <span style={{ fontSize: 14 }}> of 100%</span>{" "}
              </p>
            </div>
          </center>
          <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50 mt-5">
            Great Result
          </h5>
          <h5
            style={{ fontSize: 11 }}
            className="mb-2 text-medium text-white dark:text-neutral-50"
          >
            Your performance exceeds 65% of the people conducting the test here
          </h5>
        </div>
        <div className="flex flex-col justify-start p-6 w-full md:w-1/2">
          <h5 className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            Summary
          </h5>
          {dataObjects?.map((dataObject, index) => {
            const text = `text-${dataObject.color}-500 text-left font-bold`;
            return (
              <div
                key={index}
                // style={ { backgroundColor: dataObject?.color }}
                className={`flex flex-col bg-${dataObject.color}-100 px-4 py-2 w-full rounded-md mt-3`}
              >
                <div className="grid grid-cols-2 items-center ">
                  <div className="col-span-1 flex items-center">
                    <img src={dataObject?.img} width={20} className="mr-2" />
                    <p
                      className={`text-${dataObject.color}-500 text-left font-bold`}
                    >
                      {dataObject.text}
                    </p>
                  </div>
                  <div className="col-span-1 flex justify-end ">
                    <p className={text}>{dataObject.text2} / 100</p>
                  </div>
                </div>
              </div>
            );
          })}
          <div>
            <button class="flex flex-col items-center justify-center bg-gradient-to-t from-indigo-800 to-blue-800 hover:from-indigo-700 hover:to-blue-700 rounded-full text-white px-4 py-2 w-full mt-3 transition duration-300">
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
