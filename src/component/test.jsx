import { useContext } from "react";
import { Context } from "./context";

function Test() {
  const { Name, Age, setName, setAge } = useContext(Context);
  return (
    <>
      <div className="h-52 w-52 bg-blue-300 m-auto p-2 mt-2">
        <label> name </label>
        <input
          className="border-b outline-none bg-transparent"
          onChange={(e) => setName(e.target.value)}
          type="name"
        />
        <label> age </label>
        <input
          className="border-b outline-none bg-transparent"
          onChange={(e) => setAge(e.target.value)}
          type="age"
        />
      </div>
    </>
  );
}

export default Test;
