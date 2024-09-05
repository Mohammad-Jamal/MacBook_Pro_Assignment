import GalleryWidget from "./components/GalleryWidget";
import TabsWidget from "./components/TabsWidget";

function App() {
  return (
    <>
      <div className="*:p-0 p-5 pb-[1.36rem] *:box-border flex w-full scroll-smooth bg-[#28292F]">
        {/* left side to be empty */}
        <div className=" hidden md:flex md:w-1/2"></div>
        {/* right side part for widgets */}
        <div className="w-full  md:w-1/2 lg:w-1/3 space-y-8 sm:space-y-14">
          <TabsWidget />
          <GalleryWidget />
        </div>
      </div>
    </>
  );
}

export default App;
