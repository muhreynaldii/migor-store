import React from "react";
import Domisili from "../../components/Domisili/Domisili";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

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
          <div className="w-full bg-gray-custom">
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    <table className="min-w-full">
                      <thead className="border-b">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            No
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Nama
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Perioda
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Harga
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Stok
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-4 text-left text-sm font-bold text-gray-900"
                          >
                            Modify
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            1
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Sunco 1 ltr
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            1 Mei - 7 Mei 2022
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Rp 25.000
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            50
                          </td>
                          <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <Link to={"/staff"} className="text-blue-custom">
                              Edit
                            </Link>
                            <span className="text-blue-custom">Hapus</span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            2
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Sunco 1 ltr
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            8 Mei - 14 Mei 2022
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Rp 25.000
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            50
                          </td>
                          <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <Link to={"/staff"} className="text-blue-custom">
                              Edit
                            </Link>
                            <span className="text-blue-custom">Hapus</span>
                          </td>
                        </tr>
                        <tr className="border-b">
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                            3
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Sunco 1 ltr
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            15 Mei - 21 Mei 2022
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            Rp 25.000
                          </td>
                          <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            50
                          </td>
                          <td className="space-x-2 whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900">
                            <Link to={"/staff"} className="text-blue-custom">
                              Edit
                            </Link>
                            <span className="text-blue-custom">Hapus</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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
            <table border={1}>
              <tr>
                <td>No</td>
              </tr>
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
