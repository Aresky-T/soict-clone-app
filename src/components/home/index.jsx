import React from "react";
import ImportantInformation from "../important_info";

const Home = () => {
  return (
    <div className="home main-section">
      <section className="home-main">
        <div className="welcome">
          <div className="welcome-title section-title-container">
            <h3 className="section-title">
              <span className="section-title-main">WELCOME TO SOICT 2023</span>
            </h3>
          </div>
          <div className="welcome-content">
            <p>
              SOICT 2023 is an international symposium covering significant
              research areas that include AI Foundations and Big Data, Network
              Communication and Security, Image and Natural Language Processing,
              Software Engineering and Digital Technology, Blockchain, and
              Operations Research trends. Following the past successful
              symposium SOICT 2022, which received submissions from 14
              countries, the 12th International Symposium on Information and
              Communication Technology (SOICT 2023) will be held in Ho Chi Minh
              City, Vietnam on 7-8 December 2023. The symposium aims to provide
              an academic forum for researchers and graduate students to share
              their latest research findings and identify future computer
              science challenges. The symposium will include tutorials and
              keynotes given by world-class speakers. SOICT 2023 proceedings
              will be published in the International Conference Proceedings
              Series by ACM as an ICPS volume in the ACM Digital Library (ISBN:
              979-8-4007-0891-6), which will be archived in the ACM Digital
              Library. SOICT 2023 will be indexed by DBLP, Ei Compendex, Scopus
              and Clarivate Analytics Web of Science (ISI Web of Science). This
              year, the SOICT 2023 is organized by School of Information and
              Communication Technology – Hanoi University of Science and
              Technology, Hochiminh University of Science – Vietnam National
              University, Laboratory Informatics, Modelling and Optimisation
              System (LIMOS), The French National Centre for Scientific Research
              (CNRS) and Vietnam Institute for Advanced Study in Mathematics.
              SOICT 2023 is organized in conjunction with The Third Vietnam
              Operations Research Network Meeting (VORN 2023). Your
              participation in SOICT 2023 is surely to be a great experience. We
              look forward to seeing you in Ho Chi Minh City.
            </p>
          </div>
        </div>
        <div className="journal">
          <div className="journal-title section-title-container">
            <h3 className="section-title">
              <span className="section-title-main">
                POST-CONFERENCE JOURNAL PUBLICATION
              </span>
            </h3>
          </div>
          <div className="journal-content">
            <p>
              Extended versions of the selected papers in SOICT 2023 will be
              invited for submission to Special issue of Multimedia Tools and
              Applications (Q1 Journal) and Informatica.
            </p>
            <div className="journal-images">
              <div className="image-1">
                <img
                  decoding="async"
                  width="174"
                  height="254"
                  src="https://soict.org/wp-content/uploads/2023/06/110421.jpg"
                  alt=""
                />
              </div>
              <div className="image-2">
                <img
                  fetchpriority="high"
                  decoding="async"
                  width="570"
                  height="806"
                  src="https://soict.org/wp-content/uploads/2022/08/293248148_632375508081275_4220687603604507201_n.jpg"
                  alt=""
                  srcset="https://soict.org/wp-content/uploads/2022/08/293248148_632375508081275_4220687603604507201_n.jpg 570w, https://soict.org/wp-content/uploads/2022/08/293248148_632375508081275_4220687603604507201_n-212x300.jpg 212w"
                  sizes="(max-width: 570px) 100vw, 570px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <ImportantInformation />
    </div>
  );
};

export default Home;
