import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import FilterJira from "../components/FilterJira/Index";
import FilterGestaff from "../components/FilterGestaff/Index";

const Home = () => {
  const [parsedJiraCsvData, setParsedJiraCsvData] = useState([]);
  const [parsedGestaffCsvData, setParsedGestaffCsvData] = useState([]);
  const [isJiraCsvCreated, setIsJiraCsvCreated] = useState(false);
  const [isJiraFilterApplied, setIsJiraFilterApplied] = useState(false);
  const [isGestaffCsvCreated, setIsGestaffCsvCreated] = useState(false);

  const parseFile = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setParsedJiraCsvData(results.data);
      },
    });
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      if (acceptedFiles.length) {
        parseFile(acceptedFiles[0]);
        setIsJiraCsvCreated(true);
        setIsJiraFilterApplied(false);
        if (isJiraCsvCreated && isJiraFilterApplied) {
          setIsGestaffCsvCreated(true);
          setIsJiraFilterApplied(true);
        } else {
          setIsGestaffCsvCreated(false);
        }
      }
    },
    [isJiraCsvCreated, isJiraFilterApplied]
  );

  // useEffect(() => {
  //   console.log(parsedJiraCsvData);
  //   if (parsedJiraCsvData.length > 0) {
  //     console.log(typeof parsedJiraCsvData[0]["Updated"]);
  //     console.log(parsedJiraCsvData[0]["Updated"]);
  //   }
  // });

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject,
  } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.ms-excel": [".csv"],
    },
  });

  return (
    <div className="home-page">
      <div className="dropzone-container">
        <div
          {...getRootProps({
            className: `dropzone 
          ${isDragAccept && "dropzoneAccept"} 
          ${isDragReject && "dropzoneReject"}`,
          })}
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Déposer le fichier ici ...</p>
          ) : (
            <div>
              <p>Fichier CSV JIRA:</p>
              <p>
                Glisser-déposer, <br /> ou bien cliquer pour sélectionner
              </p>
            </div>
          )}
        </div>
        {isJiraFilterApplied && (
          <div
            {...getRootProps({
              className: `dropzone 
          ${isDragAccept && "dropzoneAccept"} 
          ${isDragReject && "dropzoneReject"}`,
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p>Déposer le fichier ici ...</p>
            ) : (
              <div>
                <p>Fichier CSV GESTAFF:</p>
                <p>
                  Glisser-déposer, <br /> ou bien cliquer pour sélectionner
                </p>
              </div>
            )}
          </div>
        )}
      </div>
      {isJiraCsvCreated && (
        <FilterJira
          parsedJiraCsvData={parsedJiraCsvData}
          setIsJiraFilterApplied={setIsJiraFilterApplied}
        />
      )}
      {isGestaffCsvCreated && (
        <FilterGestaff parsedGestaffCsvData={parsedGestaffCsvData} />
      )}
    </div>
  );
};

export default Home;
