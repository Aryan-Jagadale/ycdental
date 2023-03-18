import React from "react";
import mainProfile from "./../../assets/images/profileMain.svg";
import subProfile from "./../../assets/images/subProfilePhoto.svg";
import "../../style/HomePage/welcomeComp.css";
import { Row, Col } from "react-bootstrap";

function Welcome() {
  return (
    <div className="welcome-section">
      <div
        style={{ fontFamily: "Domine", color: "#032F6E" }}
        className="flex-1 justify-center content-center text-center my-3 py-3 mx-5"
      >
        <h1 className="text-3xl font-bold mb-2">
          Welcome to Dental College, Ahmednagar
        </h1>
        <p className="text-base mb-1">
          Welcome to Shri. Yashwantrao Chavan Memorial Medical and Rural
          Development Foundation 's Dental College
        </p>
        <p className="text-base">
          The Institute, one of the most prestigious dental colleges in
          Ahmednagar , India; was established in 2007 in the memory of Shri.
          Yashwantrao - ji Chavan, the architect of Maharashtra State, Former
          Chief Minister and the pioneer of the Co - operative and Panchayat R
          aj movements in Maharashtra
        </p>
        <br/>
        <p className="text-base">
          Ahmednagar and its allied South Area (inclusive of Shevgaon, Pathardi,
          Newasa, Jamkhed, Karjat, Shrigonda, Parner, Nagar Tahsil, etc.) with a
          po pulation of more than 20 lakhs is socio economically deprived and
          chronically draught affected , resulting in the lack of access to
          affordable, high quality medical and dental healthcare. In addition,
          higher education in Medical, Dental, Pharmacy & Paramedic al
          specialities is limited and scarce . In view of the above facts and
          considering the importance of Dental Health Science, the foundation
          started this Dental College at Ahmednagar.
        </p>
        <br/>

        <p className="text-base">
          Shri. Yashwantrao Chavan Memorial Medical and Rural Development
          Foundatio n is committed to work with the motto of medical and allied
          development facilities for masses, in particular; the rural and poor
          population. Today, our dental college is growing rapidly and taking
          immense strides in academics, research, social outreach, a s well as
          extracurricular fields under the leadership of Hon. Yashwantrao Gadakh
          and Shri. Prashant Gadakh .
        </p>

        <p className="text-base">
          The institute is affiliated to Maharashtra University of Health
          Sciences (MUHS) and approved by the Dental Council of India . We are
          also ISO 9000:2015 certified. We offer Undergraduate degree of
          Bachelor in Dental Surgery i.e., BDS; with a merit based yearly intake
          of 100 students.There are four Post Graduate programs of Masters in
          Dental Surgery i.e., MDS with the yearly intake of 16 studen ts in the
          dental specialities of Orthodontics & Dentofacial Orthopaedics ,
          Periodontology & Implantology, Prosthodontics & Implantology,
          Conservative Dentistry & Endodontics. From 2023, we will also have
          enrolment s for PhD research candidate.
        </p>
        <br/>

        <p className="text-base">
          Our facilities and academic mentorship ensure that students excel and
          surpass the requirements laid down by Dental Council of India and MUHS
          . YCDC makes all its students real - world - ready with various skill
          building workshops , seminars, conferences , and ce rtifications on
          various current dental advances and subjects.
        </p>

        <br/>

        <p className="text-base">
          Research is encouraged among the staff and students through our
          institutional research and ethics cells, multiple research facilities,
          and training workshops. Not only does the institute pro mote academics
          but also encourages an all - round development of the candidate
          through a plethora of year - round extracurricular activities, field
          trips, intercollegiate and state level competitions, with our students
          bagging top spots in all their endeavours.
        </p>

        <br/>

        <p className="text-base">
          Understanding the latest trends a nd requirements, YCDC has made
          commendable efforts to integrate digitization, entrepreneurship, and
          innovation into college curricula and processes . The college has
          completed digitization in office and the library. Teaching occurs on
          smart boards with Wi - Fi connectivity, while c omputerization of
          administration has resulted in online admission process and a digital
          locker for maintaining records. We are now officially certified and
          registered part of the Innovation Cell, Ministry of Education,
          Government of India in addition to being Ahmednagar Local Chapter of
          SWAYAM, NPETL, Government of India.
        </p>

        <p></p>
      </div>
      <div className="shape">
        <h1 className="shape-title py-7 text-white text-2xl underline underline-offset-8">
          MANAGING COMMITTEE
        </h1>
      </div>
      <img src={mainProfile} alt="" className="welcome-img1" />
      <div className="welcome-img1-title">
        <h1
          style={{ fontFamily: "Domine", color: "#800000" }}
          className="text-2xl"
        >
          President
        </h1>
        <p
          style={{ fontFamily: "Domine", color: "#00205B" }}
          className="text-base"
        >
          Hon. Yashwantrao Gadakh
        </p>
      </div>

      <Row className="flex flex-row w-screen justify-evenly py-10 px-5">
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Organising <br />
                President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Shri.Prashant Gadakh
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Vice President
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Ms Nehal Gadakh
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Managing <br /> Director
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Subhash Devdhe Patil
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <Row className="flex flex-row w-screen justify-evenly py-10 px-5">
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Managing <br /> Trustee
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Sharad Samb
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Administrative <br /> Officer
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Shripad Rajhans
              </p>
            </div>
          </div>
        </Col>
        <Col sm>
          <div className="subProfile flex flex-col justify-start content-center items-center px-10 py-2">
            <img
              src={subProfile}
              className="subProfile-img w-40"
              alt=""
              srcset=""
            />
            <div className="welcome-subProfile-title">
              <h3
                style={{
                  fontFamily: "Domine",
                  color: "#800000",
                  lineHeight: "2rem",
                }}
                className="text-sm"
              >
                Dean
              </h3>
              <p
                style={{ fontFamily: "Domine", color: "#00205B" }}
                className="text-xs"
              >
                Dr Nilima Rajhans
              </p>
            </div>
          </div>
        </Col>
      </Row>

      <div className="text-neutral-200 FACILITIES  border-[2.5px] drop-shadow-lg border-[#00205B] w-[50%] flex items-center justify-center p-2 md:w-[15vw]">
        <h3 className="text-2xl font-bold uppercase tracking-wide text-[#262626]">
          FACILITIES
        </h3>
      </div>
    </div>
  );
}

export default Welcome;
