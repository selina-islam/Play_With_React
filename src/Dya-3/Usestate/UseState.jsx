import React, { useState } from "react";

function UseState() {
  //  practice 1
  // const [money, setMoney]=useState(10)

  // practice 2
       // const [text, setText] = useState("");
        
        // practice 3
        const [count, setCount]= useState(0)


  return (
    <div className="m-8">
      {/* practice 1 */}
      {/* <p>my current balance is : {money}</p> */}
      {/* <button
        className="bg-black p-3 text-white "
        onClick={() => setMoney(money + 100)}
      >
        diposite 100 tk
      </button> */}

      {/* practice 2  */}
      {/* <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type="text"
        placeholder="type here..."
        className="border p-2"
      />
      <p>You typed: {text}</p> */}
                  

                  {/* practice 3 */}
                  <button className="bg-amber-950 text-white px-4 py-1 rounded-md hover:bg-amber-900 hover:translate-y-0.5 transition-all duration-150" onClick={()=> setCount(count+1)}>Click:  { count}</button>

    </div>
  );
}

export default UseState;
