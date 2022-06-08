import React from "react";

function Dashboard() {
  return (
    <>
      <button className="h-[44px] w-screen bg-orange-custom text-center text-white">
        Logout
      </button>
      <h1 className="pt-11 text-center text-2xl font-bold">Migor Store</h1>
      <h2 className="text-center text-xl">Toko migor online bersubsidi</h2>
      <div>
        <button></button>
      </div>
      <div
        className="container mx-auto flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
      >
        <h1 className="text base py-5 font-bold">Daftar Minyak & Perioda</h1>
        <div className="h-[180px] w-full bg-grey-custom">
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
        <div className="h-[180px] w-full bg-grey-custom">
          <table>
            <tr>table</tr>
          </table>
        </div>
        <button className="my-5 self-end rounded-sm bg-blue-custom py-2 px-3 text-white">
          Tambah
        </button>
      </div>
    </>
  );
}

export default Dashboard;
