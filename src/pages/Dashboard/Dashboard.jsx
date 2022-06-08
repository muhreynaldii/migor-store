import React from "react";
import Domisili from "../../components/Domisili/Domisili";
import Header from "../../components/Header/Header";

function Dashboard() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div className="mb-2 space-x-4">
          <Domisili />
        </div>
        <div
          className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
        >
          <h1 className="text base py-5 font-bold">Daftar Minyak & Perioda</h1>
          <div className="h-[180px] w-full bg-gray-custom">
            <table>
              <tr>table</tr>
            </table>
          </div>
          <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
            Tambah
          </button>
        </div>
        <div
          className="container mx-auto my-10 flex
        flex-col items-start bg-white/90 px-7 shadow-lg"
        >
          <h1 className="text base py-5 font-bold">User</h1>
          <div className="bg-grey-custom h-[180px] w-full">
            <table>
              <tr>table</tr>
            </table>
          </div>
          <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
            Tambah
          </button>
        </div>
      </main>
    </>
  );
}

export default Dashboard;
