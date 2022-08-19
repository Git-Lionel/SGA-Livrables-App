import React, { useEffect, useState } from "react";

const FilterGestaff = ({ parsedGestaffCsvData }) => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let array = JSON.parse(JSON.stringify(parsedGestaffCsvData));

    console.log(array);
    console.log(inputs);
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div>
          <label>P.O. 1</label>
          <input
            type="text"
            name="po1"
            value={inputs.po1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Affaire 1</label>
          <input
            type="text"
            name="code1"
            value={inputs.code1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Taux de production 1 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="taux1"
            value={inputs.taux1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Coût 1 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="cost1"
            value={inputs.cost1 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>P.O. 2</label>
          <input
            type="text"
            name="po2"
            value={inputs.po2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Affaire 2</label>
          <input
            type="text"
            name="code2"
            value={inputs.code2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Taux de production 2 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="taux2"
            value={inputs.taux2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Coût 2 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="cost2"
            value={inputs.cost2 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>P.O. 3</label>
          <input
            type="text"
            name="po3"
            value={inputs.po3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Affaire 3</label>
          <input
            type="text"
            name="code3"
            value={inputs.code3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Taux de production 3 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="taux3"
            value={inputs.taux3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Coût 3 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="cost3"
            value={inputs.cost3 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>P.O. 4</label>
          <input
            type="text"
            name="po4"
            value={inputs.po4 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Affaire 4</label>
          <input
            type="text"
            name="code4"
            value={inputs.code4 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Taux de production 4 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="taux4"
            value={inputs.taux4 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Coût 4 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="cost4"
            value={inputs.cost4 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>P.O. 5</label>
          <input
            type="text"
            name="po5"
            value={inputs.po5 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Code Affaire 5</label>
          <input
            type="text"
            name="code5"
            value={inputs.code5 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Taux de production 5 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="taux5"
            value={inputs.taux5 || ""}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>
            Coût 5 <br />
            (prix / heure)
          </label>
          <input
            type="number"
            name="cost5"
            value={inputs.cost5 || ""}
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

export default FilterGestaff;
