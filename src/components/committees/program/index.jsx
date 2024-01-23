import React from "react";
import ImportantInformation from "../../important_info";
import data from "../../../assets/data/program_committees.json";

const ProgramCommittees = () => {
  return (
    <div className="program-committees main-section">
      <section className="program-committees-main">
        <div className="program-committees-title section-title-container">
          <h3 className="section-title">
            <span className="section-title-main">PROGRAM COMMITTEES</span>
          </h3>
        </div>
        <div className="program-committees-content">
          <table>
            <tbody>
              <tr>
                <td>First name</td>
                <td>Last name</td>
                <td>Affiliation</td>
              </tr>
              {data.map((item, index) => {
                const location = index + 1;
                return (
                  <tr
                    key={index}
                    style={{
                      backgroundColor: `${location % 2 !== 0 ? "#f5f5f5" : ""}`,
                    }}
                  >
                    <td>{item["First name"]}</td>
                    <td>{item["Last name"]}</td>
                    <td>{item["Affiliation"]}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
      <ImportantInformation />
    </div>
  );
};

export default ProgramCommittees;
