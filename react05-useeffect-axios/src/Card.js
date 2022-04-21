import React from "react";

function Card() {
    const employees = [
        {
          name: "Metallica",
          id: "01",
          img:"https://i.gazeteduvar.com.tr/2/1280/720/storage/files/images/2021/09/17/metallica-dbji_cover.jpg"
        },
        {
          name: "Iron Maiden",
          id: "02",
          img:"https://ar-files.s3.eu-central-1.amazonaws.com/s3fs-public/im.jpeg"
        },
        {
          name: "Linkin Park",
          id: "03",
          img:"https://ar-files.s3.eu-central-1.amazonaws.com/s3fs-public/im.jpeg"
        },
        {
          name: "Muse",
          id: "04",
          img:"https://media.bantmag.com/wp-content/uploads/m/muse1.jpg"
        },
        {
          name: "Ajdar",
          id: "05",
          img:"https://i.haberler.com/haber/2021/02/18/ajdar-kimdir-popstar-ajdar-kac-yasinda-nereli-13937255_3852_amp.jpg"
        },
      ];
    
  return (
    <div className="container">
      <div className="row">
      {employees.map((employee) => (
        
          <div className="card col-md-3 m-2" style={{ }}>
          <img src={employee.img} className="card-img-top" style={{width:"100%",height:"200px"}} alt="..." />
          <div className="card-body">
            <h5 className="card-title">{employee.id}</h5>
            <p className="card-text">
              {employee.name}
            </p>
            
          </div>
            </div>
      ))}
        
       
      </div>
    </div>
  );
}

export default Card;
