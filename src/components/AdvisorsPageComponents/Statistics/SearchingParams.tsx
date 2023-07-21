import { FunctionComponent, useState } from "react";
import styles from "./SearchingParams.module.css";
import Select from "react-select";

type SearchingParamsType = {
  updatingFunction: Function;
  subjectsNames: any[];
};

const SearchingParams: FunctionComponent<SearchingParamsType> = ({
  updatingFunction,
  subjectsNames,
}) => {
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      border: "none", // Remove border
      boxShadow: "none", // Remove box shadow
      backgroundColor: "#f4f4f4",
    }),
  };
  const [parameters, setParameters] = useState({
    statsMode: null,
    courseCode: "",
    semester: "",
    year: "",
  });

  const goBtnHandler = () => {
    updatingFunction(parameters);
  };

  return (
    <div className={styles.search}>
      <select
        className={styles.subject}
        defaultValue={parameters.statsMode ? parameters.statsMode : ""}
        onChange={(e) => {
          setParameters((prev: any) => {
            return {
              ...prev,
              statsMode: e.target.value,
              courseCode: "",
              semester: "",
              year: "",
            };
          });
          updatingFunction((prev: any) => {
            return {
              ...prev,
              statsMode: e.target.value,
              courseCode: "",
              semester: "",
              year: "",
            };
          });
        }}
      >
        <option value="" hidden disabled>
          Choose Mode
        </option>
        <option value="Course">Course</option>
        <option value="Graduates">Graduates</option>
      </select>
      {parameters.statsMode === "Course" && (
        <Select
          className={styles.searchChild}
          onChange={(e) => {
            setParameters((prev: any) => {
              return { ...prev, courseCode: e.value };
            });
          }}
          placeholder={
            parameters.courseCode === "" ? "Course Name" : parameters.statsMode
          }
          styles={customStyles}
          options={subjectsNames}
        />
      )}
      {parameters.statsMode && (
        <select
          className={styles.searchChild}
          value={parameters.semester}
          onChange={(e) => {
            setParameters((prev: any) => {
              return { ...prev, semester: e.target.value };
            });
          }}
        >
          <option value="" disabled hidden>
            Select Semester
          </option>
          <option value="Fall">Fall</option>
          <option value="Spring">Spring</option>
          <option value="Summer">Summer</option>
        </select>
      )}
      {parameters.statsMode && (
        <input
          className={styles.searchChild}
          onChange={(e) => {
            setParameters((prev: any) => {
              return { ...prev, year: e.target.value };
            });
          }}
          type="text"
          placeholder="Educational Year"
          value={parameters.year}
        />
      )}
      {parameters.statsMode && (
        <button onClick={goBtnHandler} className={styles.go}>
          Go
        </button>
      )}
    </div>
  );
};

export default SearchingParams;
