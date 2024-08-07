// import { useState } from 'react';
// import Test from "./component/test";
// import Show from "./component/show";
import Resume from "./resume/resume";
import ResumeForm from "./resume/resumeform";
function App() {
  return (
    <>
      <section className="w-[50%] h-[100%] fixed bg-red-600 left-0 z-10 top-0 overflow-hidden">
        <ResumeForm />
      </section>
      <section className="w-[50%] h-[100%] fixed scroll-auto bg-black right-0 z-10 top-0 overflow-hidden">
        <Resume />
      </section>
    </>
  );
}

export default App;
