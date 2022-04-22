import axios from "axios";
import React, { useEffect, useState } from "react";

function ApiTest2() {
  const [data, setData] = useState("");
  const [date, setDate] = useState("");

  useEffect(
    function () {
      axios
        .get(
          "https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json"
        )
        .then((res) => setData(res.data[date]))
        .catch((err) => console.log(err));
    },
    [data, date]
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto mt-4 ">
          <h2 className="text-center text-white">
            TÜRKİYE GÜNCEL COVID VERİLERİ
          </h2>
          <input
          
            placeholder="GG/AA/YYYY"
            className="form-control mt-3"
            onChange={(e)=>setDate(e.target.value)}
          />
          <table className="table table-striped text-white mt-4">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Test Sayisi</th>
                <th scope="col">Günlük Hasta Sayisi</th>
                <th scope="col">Toplam Hasta Sayisi</th>
                <th scope="col"> Vefat Sayisi</th>
              </tr>
            </thead>
            <tbody>
                <tr className={data===undefined? 'bg-dark': 'bg-light'}>
                    <th scope="row" >1</th>
                    <td >{data===undefined?"Veri Bekleniyor":data.totalTests}</td>
                    <td >{data===undefined?"Veri Bekleniyor":data.patients}</td>
                    <td >{data===undefined?"Veri Bekleniyor":data.totalPatients}</td>
                    <td >{data===undefined?"Veri Bekleniyor":data.deaths}</td>
                </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ApiTest2;
