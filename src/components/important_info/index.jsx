import React from "react";
import { FaCheck } from "react-icons/fa";
import { ImFacebook, ImTwitter, ImMail } from "react-icons/im";

const ImportantInformation = () => {
  return (
    <div className="important-information-container">
      <div className="important-information">
        <div className="important-dates">
          <div className="important-info-border"></div>
          <div className="content">
            <h2 className="important-info-title">Important Dates</h2>
            <ul>
              <li>
                <div className="important-info-icon">
                  <FaCheck />
                </div>
                <div>
                  Full Paper Submission Deadline:
                  <s>
                    <span lang="EN-US">05 September 2023</span>
                  </s>
                  <strong>12 September 2023 </strong>
                </div>
              </li>
              <li>
                <div className="important-info-icon">
                  <FaCheck />
                </div>
                <div>
                  Author Notification:
                  <strong>15 October 2023</strong>
                </div>
              </li>
              <li>
                <div className="important-info-icon">
                  <FaCheck />
                </div>
                <div>
                  Camera-Ready Submission:
                  <strong>30 October 2023</strong>
                </div>
              </li>
              <li>
                <div className="important-info-icon">
                  <FaCheck />
                </div>
                <div>
                  Conference Dates:
                  <strong>7-8 December 2023</strong>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="links-area">
          <div className="follow-icons">
            <div className="follow-icons-item">
              <a
                className="follow-icon facebook"
                href="https://www.facebook.com/SOICT"
              >
                <ImFacebook />
              </a>
              <div className="follow-icon-title">
                <span>Follow on Facebook</span>
              </div>
            </div>
            <div className="follow-icons-item">
              <a
                className="follow-icon twitter"
                href="https://twitter.com/SOICTConf"
              >
                <ImTwitter />
              </a>
              <div className="follow-icon-title">
                <span>Follow on Twitter</span>
              </div>
            </div>
            <div className="follow-icons-item">
              <a
                className="follow-icon mail"
                href="mailto:contact@soict.hust.edu.vn"
              >
                <ImMail />
              </a>
              <div className="follow-icon-title">
                <span>Send us an email</span>
              </div>
            </div>
          </div>
        </div>
        <div className="submissions-from">
          <div className="important-info-border"></div>
          <div className="content">
            <h2 className="important-info-title">Submissions from:</h2>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/255px-Flag_of_Australia_%28converted%29.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/383px-Flag_of_Australia_%28converted%29.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/510px-Flag_of_Australia_%28converted%29.svg.png 2x"
                      width="147"
                      height="74"
                      data-file-width="1280"
                      data-file-height="640"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="alignnone size-medium wp-image-1465"
                      src="https://soict.org/wp-content/uploads/2021/05/ca-1-300x150.png"
                      alt=""
                      width="300"
                      height="150"
                      srcSet="https://soict.org/wp-content/uploads/2021/05/ca-1-300x150.png 300w, https://soict.org/wp-content/uploads/2021/05/ca-1-1024x512.png 1024w, https://soict.org/wp-content/uploads/2021/05/ca-1-768x384.png 768w, https://soict.org/wp-content/uploads/2021/05/ca-1-1536x768.png 1536w, https://soict.org/wp-content/uploads/2021/05/ca-1-2048x1024.png 2048w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="alignnone size-medium wp-image-1466"
                      src="https://soict.org/wp-content/uploads/2021/05/cn-300x200.png"
                      alt=""
                      width="300"
                      height="200"
                      srcSet="https://soict.org/wp-content/uploads/2021/05/cn-300x200.png 300w, https://soict.org/wp-content/uploads/2021/05/cn-1024x683.png 1024w, https://soict.org/wp-content/uploads/2021/05/cn-768x512.png 768w, https://soict.org/wp-content/uploads/2021/05/cn-1536x1024.png 1536w, https://soict.org/wp-content/uploads/2021/05/cn-2048x1366.png 2048w"
                      sizes="(max-width: 300px) 100vw, 300px"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/255px-Flag_of_Finland.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/383px-Flag_of_Finland.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_Finland.svg/510px-Flag_of_Finland.svg.png 2x"
                      width="95"
                      height="58"
                      data-file-width="1800"
                      data-file-height="1100"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/255px-Flag_of_France.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/383px-Flag_of_France.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/510px-Flag_of_France.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/255px-Flag_of_Germany.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/383px-Flag_of_Germany.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/510px-Flag_of_Germany.svg.png 2x"
                      width="255"
                      height="153"
                      data-file-width="1000"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/200px-Flag_of_Hong_Kong.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/300px-Flag_of_Hong_Kong.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Flag_of_Hong_Kong.svg/400px-Flag_of_Hong_Kong.svg.png 2x"
                      width="200"
                      height="133"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/255px-Flag_of_Indonesia.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/383px-Flag_of_Indonesia.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Flag_of_Indonesia.svg/510px-Flag_of_Indonesia.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="alignnone size-large wp-image-1467"
                      src="https://soict.org/wp-content/uploads/2021/05/ie-1024x512.png"
                      alt=""
                      width="1020"
                      height="510"
                      srcSet="https://soict.org/wp-content/uploads/2021/05/ie-1024x512.png 1024w, https://soict.org/wp-content/uploads/2021/05/ie-300x150.png 300w, https://soict.org/wp-content/uploads/2021/05/ie-768x384.png 768w, https://soict.org/wp-content/uploads/2021/05/ie-1536x768.png 1536w, https://soict.org/wp-content/uploads/2021/05/ie-2048x1024.png 2048w"
                      sizes="(max-width: 1020px) 100vw, 1020px"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/255px-Flag_of_Italy.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/383px-Flag_of_Italy.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/510px-Flag_of_Italy.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="1500"
                      data-file-height="1000"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/255px-Flag_of_Japan.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/383px-Flag_of_Japan.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/510px-Flag_of_Japan.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/255px-Flag_of_Malaysia.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/383px-Flag_of_Malaysia.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Flag_of_Malaysia.svg/510px-Flag_of_Malaysia.svg.png 2x"
                      width="255"
                      height="128"
                      data-file-width="1200"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/255px-Flag_of_Morocco.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/383px-Flag_of_Morocco.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Flag_of_Morocco.svg/510px-Flag_of_Morocco.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/234px-Flag_of_Norway.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/351px-Flag_of_Norway.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Norway.svg/468px-Flag_of_Norway.svg.png 2x"
                      width="234"
                      height="170"
                      data-file-width="512"
                      data-file-height="372"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/255px-Flag_of_Russia.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/383px-Flag_of_Russia.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/510px-Flag_of_Russia.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/255px-Flag_of_Saudi_Arabia.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/383px-Flag_of_Saudi_Arabia.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Flag_of_Saudi_Arabia.svg/510px-Flag_of_Saudi_Arabia.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/255px-Flag_of_Singapore.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/383px-Flag_of_Singapore.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Flag_of_Singapore.svg/510px-Flag_of_Singapore.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_South_Korea.png/255px-Flag_of_South_Korea.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_South_Korea.png/383px-Flag_of_South_Korea.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Flag_of_South_Korea.png/510px-Flag_of_South_Korea.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/255px-Flag_of_Sweden.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/383px-Flag_of_Sweden.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Flag_of_Sweden.svg/510px-Flag_of_Sweden.svg.png 2x"
                      width="255"
                      height="159"
                      data-file-width="1600"
                      data-file-height="1000"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/170px-Flag_of_Switzerland_%28Pantone%29.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/255px-Flag_of_Switzerland_%28Pantone%29.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Flag_of_Switzerland_%28Pantone%29.svg/340px-Flag_of_Switzerland_%28Pantone%29.svg.png 2x"
                      width="170"
                      height="170"
                      data-file-width="512"
                      data-file-height="512"
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/255px-Flag_of_Thailand.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/383px-Flag_of_Thailand.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/510px-Flag_of_Thailand.svg.png 2x"
                      width="255"
                      height="170"
                      data-file-width="900"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      alt=""
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/383px-Flag_of_the_United_Arab_Emirates.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/510px-Flag_of_the_United_Arab_Emirates.svg.png 2x"
                      width="255"
                      height="128"
                      data-file-width="1200"
                      data-file-height="600"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="mw-file-element"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/255px-Flag_of_the_United_States.svg.png"
                      srcSet="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/383px-Flag_of_the_United_States.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/510px-Flag_of_the_United_States.svg.png 2x"
                      alt="Flag of the United States of America"
                      width="255"
                      height="134"
                      data-file-width="1235"
                      data-file-height="650"
                    />
                  </td>
                  <td>
                    <img
                      decoding="async"
                      className="alignnone  wp-image-1468"
                      src="https://soict.org/wp-content/uploads/2021/05/vn-1024x683.png"
                      alt=""
                      width="86"
                      height="57"
                      srcSet="https://soict.org/wp-content/uploads/2021/05/vn-1024x683.png 1024w, https://soict.org/wp-content/uploads/2021/05/vn-300x200.png 300w, https://soict.org/wp-content/uploads/2021/05/vn-768x512.png 768w, https://soict.org/wp-content/uploads/2021/05/vn-1536x1024.png 1536w, https://soict.org/wp-content/uploads/2021/05/vn-2048x1366.png 2048w"
                      sizes="(max-width: 86px) 100vw, 86px"
                    />
                  </td>
                  <td>&nbsp;</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportantInformation;
