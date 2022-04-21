import React from "react";

function Employee() {
  const employees = [
    {
      name: "Berkay",
      id: "01",
    },
    {
      name: "Alper",
      id: "02",
    },
    {
      name: "Yasemin",
      id: "03",
    },
    {
      name: "Furkan",
      id: "04",
    },
    {
      name: "Belinay",
      id: "05",
    },
  ];

  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h1>{`Name:${employee.name} ID:${employee.id}`}</h1>
        </div>
      ))}
    </div>
  );
}

export default Employee;
