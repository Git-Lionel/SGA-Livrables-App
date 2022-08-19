import React, { useState, useCallback, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import Papa from "papaparse";
import FilterJira from "../components/FilterJira/Index";
import FilterGestaff from "../components/FilterGestaff/Index";

const Home = () => {
  const [parsedJiraCsvData, setParsedJiraCsvData] = useState([]);
  const [parsedGestaffCsvData, setParsedGestaffCsvData] = useState([]);
  const [isJiraFilterApplied, setIsJiraFilterApplied] = useState(false);

  const parseFileJira = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setParsedJiraCsvData(results.data);
      },
    });
  };

  const onDropJira = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      parseFileJira(acceptedFiles[0]);
      console.log(acceptedFiles);
    }
  }, []);

  const {
    getRootProps: getRootPropsJira,
    getInputProps: getInputPropsJira,
    isDragActive: isDragActiveJira,
    isDragAccept: isDragAcceptJira,
    isDragReject: isDragRejectJira,
  } = useDropzone({
    onDrop: (acceptedFiles) => onDropJira(acceptedFiles),
    accept: {
      "application/vnd.ms-excel": [".csv"],
    },
  });

  const parseFileGestaff = (file) => {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (results) => {
        setParsedGestaffCsvData(results.data);
      },
    });
  };

  const onDropGestaff = useCallback((acceptedFiles) => {
    if (acceptedFiles.length) {
      parseFileGestaff(acceptedFiles[0]);
      console.log(acceptedFiles);
    }
  }, []);

  const {
    getRootProps: getRootPropsGestaff,
    getInputProps: getInputPropsGestaff,
    isDragActive: isDragActiveGestaff,
    isDragAccept: isDragAcceptGestaff,
    isDragReject: isDragRejectGestaff,
  } = useDropzone({
    onDrop: (acceptedFiles) => onDropGestaff(acceptedFiles),
    accept: {
      "application/vnd.ms-excel": [".csv"],
    },
  });

  useEffect(() => {
    if (parsedJiraCsvData.length > 0) {
      setIsJiraFilterApplied(false);
      setParsedGestaffCsvData([]);
    }
  }, [parsedJiraCsvData]);

  return (
    <div className="home-page">
      <div className="dropzone-container">
        <div
          {...getRootPropsJira({
            className: `dropzone 
          ${isDragAcceptJira && "dropzoneAccept"} 
          ${isDragRejectJira && "dropzoneReject"}`,
          })}
        >
          <input {...getInputPropsJira()} />
          {isDragActiveJira ? (
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
            {...getRootPropsGestaff({
              className: `dropzone 
          ${isDragAcceptGestaff && "dropzoneAccept"} 
          ${isDragRejectGestaff && "dropzoneReject"}`,
            })}
          >
            <input {...getInputPropsGestaff()} />
            {isDragActiveGestaff ? (
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
      {parsedJiraCsvData.length > 0 && (
        <FilterJira
          parsedJiraCsvData={parsedJiraCsvData}
          setIsJiraFilterApplied={setIsJiraFilterApplied}
        />
      )}
      {parsedGestaffCsvData.length > 0 && (
        <FilterGestaff parsedGestaffCsvData={parsedGestaffCsvData} />
      )}
    </div>
  );
};

export default Home;
