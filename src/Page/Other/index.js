import React from "react";
import "../Other/index.scss";
import other from "../../img/other.png";

const Other = () => {
  return (
    <section id="other">
      <div className="container">
        <div className="other">
          <div className="other--block">
            <h1>Other exams</h1>
            <div className="line"></div>
          </div>
          <img src={other} alt="" />
          <div className="other--one">
            <h2>Paper Exams –Third party</h2>
            <h3>
              Our office is also willing to proctor paper exams on behalf of
              other schools or private institutions. Please keep the following
              in mind:
            </h3>
            <div className="other--one__blue">
              <div className="tochka"></div>
              <h4>
                Send over any proctor agreements as quickly as possible to avoid
                delays. You can e-mail us at:
              </h4>
            </div>{" "}
            <div className="other--one__blue">
              <div className="tochka"></div>
              <h4>
                Send over any proctor agreements as quickly as possible to avoid
                delays. You can e-mail us at:
              </h4>
            </div>{" "}
            <div className="other--one__blue">
              <div className="tochka"></div>
              <h4>
              When scheduling an exam, please allow time for the exam to be mailed to us. 
              </h4>
            </div>{" "}
            <div className="other--one__blue">
              <div className="tochka"></div>
              <h4>
              Some schools & institutions require the client (you) to pay for return shipping. Please bring an envelope & postage for us to use.
              </h4>
            </div>
            <div className="other--one__blue">
              <div className="tochka"></div>
              <h4>
              Consider the time needed to mail the exam (each way) and grade the exam when scheduling appointments on tight deadlines
              </h4>
            </div>
          </div>
          <div className="other--two">
            <h3>ID Requirements</h3>
            <div className="other--two__id">
            <div className="tochka"></div>
             <h4>Each school & institution is different, consequently ID requirements are set by the school we proctor for. We encourage you to reach out to your program to find out what form of ID you need.</h4>
            </div>
          </div>
          <div className="other--three">
            <h3>Frequently Asked Questions</h3>
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>Where can I park?</h4>
            </div> 
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>Parking information including instructions on how to pay for parking can be found [here].</h4>
            </div>
             <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>What do I need to bring?</h4>
            </div>
             <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>You will need to bring proper identification (see above) and a good attitude! A small snack or water is also encouraged. We will have everything else you will need to take the test.</h4>
            </div> 
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>How long is the exam?</h4>
            </div>
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>The exam time is dependent on the exam itself. Every exam we do for others' schools is different and a UT High School test is certainly different from the University of Buffalo.</h4>
            </div>
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>Where will I store my personal belongings during the test?</h4>
            </div>
            <div className="other--three__questions">
                <div className="tochka"></div>
                <h4>You will be provided a secure locker for your personal belongings before testing begins</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Other;
