import React, { useState } from "react";
import "../../style/HomePage/about.css";
import { Row, Col } from "react-bootstrap";
import blab from "../../assets/images/blab.png";
import clab from "../../assets/images/clab.png";
import plab from "../../assets/images/plab.png";
import it from "../../assets/images/it.png";
import campuss from "../../assets/icons/campusicon.png";
import hostell from "../../assets/icons/hostelicon.png";
import libraryicon from "../../assets/icons/libraryicon.png";
import { LazyLoadImage } from "react-lazy-load-image-component";

function AboutComp() {
  const [showMore, setShowMore] = useState(false);

  let campus =
    "The Campus is built over 5 acres land and is a haven of lush greenery, pollution free, with ple nty of fresh air, conducive to student life. At YCDC, we lay emphasis on a holist ic approach to every individual' s development. Students are encouraged to follow healthy lifestyles with recreational facilities in the campus after college hours. Gymnasium facilities, outdoor sports activities like crick et, volleyball, b adminton courts are present for honing sports skills, which are useful in relaxing and engaging the mind away from their exhausting academic curriculum. Hostels are equipped with Wi - Fi internet accessibility besides regular facilities like T elevision room and Study Rooms.Besides the main Mess, 24hr coffee shop, canteen facilities (for students and faculty) are available. The campus also has a Temple which gives the students a connect to The Almighty. The campus has faculty residence and interaction with them brings a certain care and shouldering for the students who go through a tough grind in their daily academic and clinical schedules. Students and faculty regularly participate in the religious festival like Holi, Diwali, Janmashtami , Ganesh Chaturthi, Basant Panchami and also celebrating general events like New Year’s Eve. Organization of in - campus activities related to hostel day and fresher’s day and various other programmes, which keep the students cheerful and active throughout their stay in the campus.";

  let hostel =  "Many of you may be leaving home for the first time, so where you stay is an important issue. The college takes pride in its separate Hostel facilities for girls and boys within the college campus. Echoing the same architectural language of the mainbuilding , the h ostel s combine the modern design sensibility ofless is more with a fresh interpretation of traditional conceptsof inner courtyard to allow a natural circulation of light andair. A unique feature of the college is the privacy it accords to each student with the idea of uni nterrupted study.Hostel is equipped with well - furnished rooms for every student, designed to provide environment of home away from home. Female Resident Warden for the Girls and Male Resident Warden for the Boys hostel take good care of the students."

  let library = "The Library of Yashwantrao Chavan Dental College was set up in the year 2007 and has since been upgraded with the latest of all information catering to the needs of all specialties of dentistry. The Central library is housed in a w ell - furnished, illuminated and reading room with a seating capacity of more than 100 Students. The undergraduate section is different from the post-graduate section. It has more than 3000 books related to medical and dental sciences ; not to mention, a large repository of online access journals and books. The library subscribe s to many foreign and national journals in dentistry. It is open daily from 9am to 8pm."


  let lectureHall = "The college has 4 lecture theatres with seating capacity for 400 students. Smart board equipped classrooms with Wi-Fi connectivity for high tech learning experience and auxiliary audio-visual equipment to make the lectures livelier. Each Department has its own seminar hall and projector."


  return (
    <div className="about-section" id="collegeFacilties">
      <h1 className="about-headline text-2xl">YCDC Ahmednagar BDS & MDS</h1>
      <div className="labs">
        <Row>
          <Col>
            <div className="about-box">
  {/*<img className="about-img" src={blab} alt="img" />*/}
              <LazyLoadImage className="about-img" src={blab} alt="biochemistry-lab" effect="opacity" /> 
              <br />
              <h1 className="about-headline2 text-xl">Biochemistry Lab</h1>
            </div>
          </Col>
          <Col>
            <div className="about-box">
  {/*<img className="about-img" src={plab} alt="img" />*/}
              <LazyLoadImage className="about-img" src={plab} alt="pharmacology-lab" effect="opacity" /> 



              <h1 className="about-headline2 text-xl">Pharmacology Lab</h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="about-box">
              <img className="about-img" src={it} alt="img" />
              <h1 className="about-headline2 text-xl">Internet Terminal</h1>
            </div>
          </Col>
          <Col>
            <div className="about-box">
  {/*<img className="about-img" src={clab} alt="img" />*/}
              <LazyLoadImage className="about-img" src={clab} alt="pre-clinical-lab" effect="opacity" /> 

              <h1 className="about-headline2 text-xl">
                Pre-clinical Laboratory Lab
              </h1>
            </div>
          </Col>
        </Row>
      </div>
      <div className="cards">
        <Row>
          <Col sm>
            <div id="card1" className="card">
  {/*<img className="about-icon" src={campuss} alt="icon" />*/}
              <LazyLoadImage className="about-icon" src={campuss} alt="campus-icon" effect="opacity" /> 

              <br />
              <h1 className="about-card-title text-2xl font-bold">CAMPUS</h1>
            </div>
            <div className="infocard">
              {showMore ? campus : `${campus.substring(0, 250)}`}
              <span
                className="text-blue-900 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show More"}
              </span>
            </div>
          </Col>
          <Col sm>
            <div id="card2" className="card">
  {/*<img className="about-icon" src={hostell} alt="icon" />*/}
              <LazyLoadImage className="about-icon" src={hostell} alt="hostel-icon" effect="opacity" /> 

              <br />
              <h1 className="about-card-title text-2xl font-bold">HOSTEL</h1>
            </div>
            <div className="infocard">
              {showMore ? hostel : `${hostel.substring(0, 250)}`}
              <span
                className="text-blue-900 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show More"}
              </span>
            </div>
          </Col>
          
        </Row>
        <Row>

        <Col sm>
            <div id="card3" className="card">
  {/*<img className="about-icon" src={libraryicon} alt="icon" />*/}
              <LazyLoadImage className="about-icon" src={libraryicon} alt="library-icon" effect="opacity" /> 

              <br />
              <h1 className="about-card-title text-2xl font-bold uppercase">Lecture Hall</h1>
            </div>
            <div className="infocard">
              {showMore ? lectureHall : `${lectureHall.substring(0, 250)}`}
              <span
                className="text-blue-900 cursor-pointer"
                onClick={() => setShowMore(!showMore)}
              >
                {showMore ? "Show less" : "Show More"}
              </span>
            </div>
          </Col>

          <Col sm>
          <div id="card3" className="card">
  {/*<img className="about-icon" src={libraryicon} alt="icon" />*/}
            <LazyLoadImage className="about-icon" src={libraryicon} alt="libraray-icon" effect="opacity" /> 

            <br />
            <h1 className="about-card-title text-2xl font-bold">LIBRARY</h1>
          </div>
          <div className="infocard">
            {showMore ? library : `${library.substring(0, 250)}`}
            <span
              className="text-blue-900 cursor-pointer"
              onClick={() => setShowMore(!showMore)}
            >
              {showMore ? "Show less" : "Show More"}
            </span>
          </div>
        </Col>
        
        
        
        
        
        </Row>
      </div>
    </div>
  );
}

export default AboutComp;
