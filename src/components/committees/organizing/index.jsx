import React from "react";
import ImportantInformation from "../../important_info";
import data from "../../../assets/data/organizing_committee.json";

const OrganizingCommittee = () => {
  const renderChairs = (chairs) => {
    return chairs.map((chair, index) => (
      <div className="chair" key={chair.type ?? index}>
        <div className="chair-avatar">
          <img src={chair?.image || ""} alt="organizing-committee-chair" />
        </div>
        <div className="chair-info">
          <div className="name">{chair?.name || ""}</div>
          <div className="affiliation">{chair?.affiliation || ""}</div>
        </div>
      </div>
    ));
  };

  const renderOrganizingCommittee = () => {
    return data.map((item, index) => {
      if (item.chairs) {
        return (
          <div key={index} className="chairs-container">
            <div className="chairs-container-title">{item.type}</div>
            <div className="chairs">{renderChairs(item.chairs)}</div>
          </div>
        );
      }

      const children = item.children;

      return (
        <div key={index} className="chairs-container">
          <div className="chairs-container-title">{item.type}</div>
          {children.map((chairs) => (
            <React.Fragment key={chairs.type}>
              <h4 className="chairs-container-title-2">{chairs.type}</h4>
              <div className="chairs">{renderChairs(chairs.chairs)}</div>
            </React.Fragment>
          ))}
        </div>
      );
    });
  };

  return (
    <div className="organizing-committee main-section">
      <section className="organizing-committee-main">
        <div className="organizing-committee-title section-title-container">
          <h3 className="section-title">
            <span className="section-title-main">ORGANIZING COMMITTEE</span>
          </h3>
        </div>
        <div className="organizing-committee-content">
          {renderOrganizingCommittee()}
        </div>
      </section>
      <ImportantInformation />
    </div>
  );
};

export default OrganizingCommittee;
