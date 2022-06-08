import React from "react";
import Domisili from "../../components/Domisili/Domisili";
import Header from "../../components/Header/Header";
import Container from "./../../components/Container/Container";

function DataStaff() {
  return (
    <>
      <Header />
      <Container>
        <div
          className="flex flex-col
        items-start bg-white/90 px-7 shadow-lg"
        >
          <Domisili />
          <div className="h-[180px] w-full bg-white">
            <h1>Daftar Transaksi</h1>
            <table>
              <tr>table</tr>
            </table>
          </div>
        </div>
      </Container>
    </>
  );
}

export default DataStaff;
