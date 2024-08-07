import { useContext, useRef } from "react";
import { Context } from "./context";
import ReactToPrint from "react-to-print";
function Show() {
  const { Name, Age } = useContext(Context);
  const componentRef = useRef();
  return (
    <>
      <div>
        <ReactToPrint
          trigger={() => {
           return <button onClick={console.log("not work")} className="h-6 w-40 bg-blue-500 m-auto">Download</button>;
          }}
          content={() => componentRef.current}
        />
        <div ref={componentRef}  className="h-auto w-52 bg-blue-300 m-auto p-2 mt-2">
          <div>{Name}</div>
          <div>{Age}</div>
        </div>
      </div>
    </>
  );
}

export default Show;
