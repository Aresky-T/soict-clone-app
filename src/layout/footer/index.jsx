import React from "react";
import { Link } from "react-router-dom";

const sections = [
  {
    name: "ORGANIZERS",
    info: [
      {
        path: "https://soict.hust.edu.vn/en/",
        title:
          "SCHOOL OF INFORMATION AND COMMUNICATIONS TECHNOLOGY, HANOI UNIVERSITY OF SCIENCE AND TECHNOLOGY",
        image:
          "https://soict.org/wp-content/uploads/2022/03/logo-soict-hust-1.png",
      },
      {
        path: "https://vnuhcm.edu.vn/",
        title: "VNU HCM",
        image: "https://soict.org/wp-content/uploads/2023/11/DHQG_Logo.png",
      },
      {
        title: "VNUHCM-University of Science",
        path: "https://hcmus.edu.vn/",
        image:
          "https://soict.org/wp-content/uploads/2023/04/logo-KHTN_REMAKE-1-1.png",
      },
      {
        title: " Vietnam Institute for Advanced Study in Mathematics",
        path: "https://viasm.edu.vn/",
        image:
          "https://soict.org/wp-content/uploads/2023/11/VIASM-standard-logo-cut-scaled.jpg",
      },
      {
        title:
          "Laboratory of Informatics, Modelling and Optimization of the Systems",
        path: "https://limos.fr/",
        image: "https://soict.org/wp-content/uploads/2023/06/limos.png",
      },
    ],
  },
  {
    name: "TECHNICAL SPONSORS",
    info: [
      {
        title: "ACM International Conference Proceeding Series (ICPS)",
        path: "https://www.acm.org/publications/icps",
        image:
          "https://soict.org/wp-content/uploads/2022/04/ACM_ICPS_v.2B-scaled.jpg",
      },
      {
        title: "Clarivate Plc",
        path: "https://clarivate.com/",
        image:
          "https://soict.org/wp-content/uploads/2023/07/Clarivate_Logo.png",
      },
    ],
  },
  {
    name: "FINANCIAL SPONSORS",
    info: [
      {
        title: "VIN BIGDATA",
        path: "https://vinbigdata.com/",
        image:
          "https://soict.org/wp-content/uploads/2023/10/VinBigDATA_new.png",
      },
      {
        title: "VINIF",
        path: "https://vinif.org/",
        image:
          "https://soict.org/wp-content/uploads/2023/10/Untitled-design-4.png",
      },
      {
        title: "SAMSUNG",
        path: "https://www.samsung.com/vn/about-us/company-info/",
        image:
          "https://soict.org/wp-content/uploads/2023/10/Samsung_wordmark.svg.png",
      },
      {
        title: "MOMO",
        path: "https://momo.vn/",
        image:
          "https://soict.org/wp-content/uploads/2023/11/Xnip2023-11-15_15-42-43.png",
      },
    ],
  },
];

const MainFooter = (props) => {
  const renderSections = () => {
    return sections.map((section) => (
      <section className="footer-sections-item" key={section.name}>
        <div className="section-title-container">
          <h3 className="section-title">
            <span className="section-title-main">{section.name || ""}</span>
          </h3>
        </div>
        <div className="section-info">
          {section.info?.map((item) => (
            <div className="section-info-item" key={item.title}>
              <Link
                to={item.path || ""}
                title={item.title || "Footer section title"}
              >
                <img src={item.image} alt="" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    ));
  };

  return (
    <footer className="main-footer" id="main-footer">
      <div className="main-footer__top">
        <div className="footer-sections">{renderSections()}</div>
      </div>
      <div className="main-footer__bottom">
        <div className="copyright-footer">
          Copyright 2024 © <strong>SoICT | HUST</strong>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
