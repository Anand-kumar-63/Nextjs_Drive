import SideBar from "@/components/SideBar";
import NavBar from "@/components/NavBar";
const structureLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-screen">
      <NavBar />
      <section className="text-4xl flex flex-row w-[100%] h-[92%] bg-white">
        <SideBar />
        {children}
      </section>
    </div>
  );
};
export default structureLayout;
