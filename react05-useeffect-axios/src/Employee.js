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
        <li>{employee.id}</li>
      ))}
    </div>
  );
}

export default Employee;
