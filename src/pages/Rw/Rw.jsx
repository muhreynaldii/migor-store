import React from "react";
import Header from "./../../components/Header/Header";
import user from "../../assets/images/user.png";

function Rw() {
  return (
    <>
      <Header />
      <main className="container mx-auto">
        <div
          className="mt-10 flex
        h-[249px] flex-row items-start bg-white/90 px-7 shadow-xl"
        >
          <div className="flex w-1/4 flex-col items-center self-center">
            <img src={user} alt="user" className="w-[160px] p-2" />
            <h1 className="text-center text-base">Dani</h1>
          </div>
          <div className="flex w-3/4 flex-col items-start">
            <label htmlFor="alamat" className="py-2">
              Masukkan alamat rumah anda
            </label>
            <div className="mb-2 space-x-4">
              <button className="rounded-md bg-gray-custom py-2 px-3">
                Kecamatan
              </button>
              <button className="rounded-md bg-gray-custom py-2 px-3">
                Kelurahan
              </button>
            </div>
            <input
              type="text"
              name="alamat"
              id="alamat"
              className="h-[101px] w-full rounded-sm bg-gray-custom"
            />
            <button className="mt-2 rounded-md bg-green-custom py-2 px-3 text-white">
              Masuk
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default Rw;
