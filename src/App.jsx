import Sidebar from "./resume/sidebar";
import Resume from "./resume/resume";
import ResumeForm from "./resume/resumeform";
import LabelBottomNavigation from "./resume/side";
function App() {
  return (
    <>
    <nav className="h-10 relative text-black text-2xl text-center ">
          Under marammat..
    </nav>
      <section className="w-[50%] h-[100%] fixed left-0 overflow-auto touch-auto ">
        {/* <Sidebar /> */}
        {/* <ResumeForm /> */}
        <LabelBottomNavigation />
      </section>
      <section className="w-[50%] h-[100%] p-10 fixed bg-black right-0  overflow-auto touch-auto">
        <Resume />
      </section>
    </>
  );
}

export default App;
