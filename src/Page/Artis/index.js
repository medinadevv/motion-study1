import React from "react";
import iets from "../../img/artis.png";
import "../Artis/index.scss";

const Artis = () => {
  return (
    <div id="ielts">
      <div className="container">
        <div className="ielts">
          <h1>What is IELTS?</h1>
          <div className="ielts--block"></div>
          <img src={iets} width={1400} alt="img" />
          <h2>What Is IELTS? A Complete Introduction</h2>
          <p>
            Introduced in 1989, IELTS, the International English Language
            Testing System, is an English language proficiency test
            internationally recognized for testing English language ability in
            four categories:
          </p>
          <li>Listening</li>
          <li>Reading</li>
          <li>Writing</li>
          <li>Speaking</li>
          <h2>Types Of IELTS test</h2>
          <p>
            Anyone can take the IELTS test irrespective of age, gender, race,
            nationality or religion. IELTS administrators (IDP or British
            Council) has set no age limit to take the IELTS test. This is one of
            the IELTS advantages. However, for candidates below 16 years, it is
            not recommended. Although if they wish, they can also take the test.
            Anyone who wishes to pursue higher studies abroad or work abroad can
            attempt the IELTS exam (Academic and General Training). However,
            candidates should always check the educational institution’s
            eligibility criteria or organization where they are applying.
          </p>

          <li>
            Reliable Experts: Developed by Cambridge experts and well supported
            by a strong research and development team, IELTS is the most trusted
            name for the English efficiency test.
          </li>
          <li>
            Frequency of Test: Due to the tests’ easy availability, it is the
            most convenient for test-takers. It is available up to 4 dates a
            month.
          </li>
          <li>
            Accepted by Most Organizations: More than 10,000 organizations
            globally trust IELTS and accept the score to validate language
            proficiency. accepted by over 8,000 universities, employers and
            immigration organizations worldwide
          </li>
          <li>
            Face to Face Testing: It is known to be the fairest of all tests and
            is the only one that includes a face-to-face interaction.
          </li>
        </div>
      </div>
    </div>
  );
};

export default Artis;
