import React from 'react';
import logo from '../../../img/120.svg'
import './English.scss'
import {BsCheck} from "react-icons/bs";

const English = () => {
    return (
        <section id='english'>
            <div className="container">
                <div className='english '>
                    <h2>Cambridge English Exam</h2>
                    <div className='english--line'></div>
                    <img src={logo} alt=""/>
                    <h3>Who are the Cambridge English exams for?.</h3>
                    <p>The Cambridge English exams are strongly recommended for anyone who plans to work in
                        international <br/>
                        business or study and/or work overseas. Wherever life takes you, you will be able to prove your
                        English <br/>
                        level with your Cambridge Certificate</p>
                    <h3>What do the Cambridge exams involve?</h3>
                    <h4>Official recognition</h4>
                    <p>Cambridge English Qualifications are accepted worldwide. They are a mark of excellence trusted
                        by <br/>
                        thousands of leading higher education institutions, governments and employers. With a Cambridge
                        English <br/>
                        Qualification, you'll open doors to a world of opportunities – literally!</p>
                    <p>When you pass the exam, you'll be awarded a certificate delivered by Cambridge Assessment
                        English, the <br/>
                        ESOL accreditation body of the University of Cambridge. Each year, more than 300,000 people from
                        over <br/>
                        100 different countries choose to sit a Cambridge exam\.</p>
                    <span>Depending on the level you are looking to achieve, you might choose from one of the following exam <br/>
                        preparation courses:</span>
                  <div style={{marginTop:'40px'}}>
                      <div className='english--icon'>
                          <BsCheck className='english--icon__icons'/>
                          <li>B2 First (FCE)</li>
                      </div>
                      <div className='english--icon'>
                          <BsCheck className='english--icon__icons'/>
                          <li>B2 First (FCE)</li>
                      </div>
                      <div className='english--icon'>
                          <BsCheck className='english--icon__icons'/>
                          <li>B2 First (FCE)</li>
                      </div>
                  </div>
                </div>
            </div>
        </section>
    );
};

export default English;