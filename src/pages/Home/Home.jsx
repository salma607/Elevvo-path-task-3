import Sidebar from "../../Component/Shared/Sidebar";
import Reviews from "../../Component/Element/Reviews/Reviews";
import Table from "../../Component/Element/Table/Table";


export default function Home() {
  return (
    <div className="flex flex-col ">
      <Sidebar />
      <main className="flex item-start m-14">
        <Reviews />
      </main>
      <div>
        <Table/>
        </div>
    </div>
  );
}
