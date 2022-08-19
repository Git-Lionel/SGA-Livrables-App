import React, { useState } from "react";

const FilterJira = ({ parsedJiraCsvData, setIsJiraFilterApplied }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const arrangeByComplexity = (
    array,
    minComplexity,
    maxComplexity,
    workPackage,
    cost
  ) => {
    if (minComplexity === "" || maxComplexity === "") return [];

    let arrayFiltered = array.filter(
      (item) =>
        item["Custom field (Story Points)"] >= minComplexity &&
        item["Custom field (Story Points)"] < maxComplexity
    );

    let epicList = [];

    arrayFiltered.forEach((elt) =>
      epicList.push(elt["Custom field (Epic Link)"])
    );

    let epicOccurencesList = epicList.reduce(function (acc, curr) {
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});

    let arrayQtyEpic = [];

    for (const [key, value] of Object.entries(epicOccurencesList)) {
      arrayQtyEpic.push({
        WP: workPackage,
        "Unit Price": cost,
        "P.O.": key,
        "Count of delivery": value,
        "Sum of Unit Price": value * cost,
      });
    }

    return arrayQtyEpic;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let array = JSON.parse(JSON.stringify(parsedJiraCsvData));
    let arrayFiltered = array.filter(
      (item) =>
        item["Status"] === "Done" &&
        new Date(item["Updated"]) >= new Date(inputs["startDate"]) &&
        new Date(item["Updated"]) <= new Date(inputs["endDate"]) &&
        item["Custom field (Epic Link)"] !== null
    );

    let arrayCpx1 = arrangeByComplexity(
      arrayFiltered,
      Number(inputs["minComplexity1"]),
      Number(inputs["maxComplexity1"]),
      inputs["workPackage1"],
      Number(inputs["cost1"])
    );

    let arrayCpx2 = arrangeByComplexity(
      arrayFiltered,
      Number(inputs["minComplexity2"]),
      Number(inputs["maxComplexity2"]),
      inputs["workPackage2"],
      Number(inputs["cost2"])
    );
    let arrayCpx3 = arrangeByComplexity(
      arrayFiltered,
      Number(inputs["minComplexity3"]),
      Number(inputs["maxComplexity3"]),
      inputs["workPackage3"],
      Number(inputs["cost3"])
    );

    let arrayCpxAll = arrayCpx1.concat(arrayCpx2, arrayCpx3);
    console.log(arrayCpxAll);

    if (arrayCpxAll.length > 0) setIsJiraFilterApplied(true);
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date début (&ge;)</label>
          <input
            type="date"
            name="startDate"
            value={inputs.startDate || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Date fin (&le;)</label>
          <input
            type="date"
            name="endDate"
            value={inputs.endDate || ""}
            onChange={handleChange}
          />
        </div>
        <div></div>
        <div></div>

        <div>
          <label>Min Complexité 1 (&ge;)</label>
          <input
            type="number"
            name="minComplexity1"
            value={inputs.minComplexity1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Max Complexité 1 (&lt;)</label>
          <input
            type="number"
            name="maxComplexity1"
            value={inputs.maxComplexity1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Work Package 1</label>
          <input
            type="text"
            name="workPackage1"
            value={inputs.workPackage1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coût 1</label>
          <input
            type="number"
            name="cost1"
            value={inputs.cost1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <label>Min Complexité 2 (&ge;)</label>
          </label>
          <input
            type="number"
            name="minComplexity2"
            value={inputs.minComplexity2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <label>Max Complexité 2 (&lt;)</label>
          </label>
          <input
            type="number"
            name="maxComplexity2"
            value={inputs.maxComplexity2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Work Package 2</label>
          <input
            type="text"
            name="workPackage2"
            value={inputs.workPackage2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coût 2</label>
          <input
            type="number"
            name="cost2"
            value={inputs.cost2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <label>Min Complexité 3 (&ge;)</label>
          </label>
          <input
            type="number"
            name="minComplexity3"
            value={inputs.minComplexity3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            <label>Max Complexité 3 (&lt;)</label>
          </label>
          <input
            type="number"
            name="maxComplexity3"
            value={inputs.maxComplexity3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Work Package 3</label>
          <input
            type="text"
            name="workPackage3"
            value={inputs.workPackage3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Coût 3</label>
          <input
            type="number"
            name="cost3"
            value={inputs.cost3 || ""}
            onChange={handleChange}
          />
        </div>
        <div className="div-submit">
          <input type="submit" value={"Appliquer"} />
        </div>
      </form>
    </div>
  );
};

export default FilterJira;
