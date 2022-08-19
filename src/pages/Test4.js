import React from "react";
import { readFile, utils, writeFile } from "xlsx";

// **************** Test librairie excel **************************//

const Test4 = () => {
  const handleClick = () => {
    alert("coucou");

    // Reading our test file
    const file = readFile("./BL.xlsx");
    // Sample data set
    let student_data = [
      {
        Student: "Nikhil",
        Age: 22,
        Branch: "ISE",
        Marks: 70,
      },
      {
        Student: "Amitha",
        Age: 21,
        Branch: "EC",
        Marks: 80,
      },
    ];

    const ws = utils.json_to_sheet(student_data);

    utils.book_append_sheet(file, ws, "Sheet3");

    // Writing to our file
    writeFile(file, "./test.xlsx");
  };

  return (
    <>
      <button onClick={handleClick}>Click</button>
    </>
  );
};

export default Test4;
