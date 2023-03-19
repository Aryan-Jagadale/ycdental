import React from "react";
import "../../style/AdmissionPage/admission.css";
import { Col, Row, Table } from "react-bootstrap";
import Revised_BDS_Course_Regulation_2007 from "../../assets/pdf/2007-2008/Revised_BDS_Course_Regulation_2007.pdf";
import RevisedSyllbus from "../../assets/pdf/BDS/Revised-Syllbus-BDS-New.pdf";
import BDSSyllabus1 from "../../assets/pdf/BDS/1st-BDS-Syllabus.pdf";
import BDSSyllabus2 from "../../assets/pdf/BDS/2nd-BDS-Syllabus.pdf";
import BDSSyllabus3 from "../../assets/pdf/BDS/3rd-BDS-Syllabus.pdf";
import BDSSyllabus4 from "../../assets/pdf/BDS/4th-BDS-Syllabus.pdf";
import RejectedCandidate from "../../assets/pdf/BDS/RejectedCandidate.pdf";
import GeneralMerit from "../../assets/pdf/BDS/GeneralMeritList.pdf";
import BDSMeritList from "../../assets/pdf/2021-2022/BDS_INSTITUTIONAL_LEVEL_ROUND_MERIT_LIST__2021_22.pdf";
import BDSFeeStructure from "../../assets/pdf/2021-2022/2021-22_B.D.S._FEE_STRUCTURE___COLLEGE_WEBSITE___FINAL_NEW.pdf";

function BDSAdmission() {
  return (
    <div className="admissionSection">
      <div className="short-info-box">
        <h1 className="admission-hedline">Bachelor of Dental Surgery (BDS)</h1>
        <p className="admissionPera">
          Bachelor of Dental Surgery (BDS) course at Late Shri Yashwantrao
          Chavan Memorial Medical & Rural Development Foundation’s Dental
          College, Ahmednagar is recognised by Dental Council of India and is
          affiliated to Maharashtra University of Health Sciences, Nashik. Hence
          the Rules & Regulations of the Maharashtra University of Health
          Sciences, Nashik in regard to the syllabi and conduct of examination
          shall apply.
        </p>
        <Row>
          <Col sm className="admission-col-1">
            <h1 className="admission-hedline-2">
              No. of Seats: 100 (Recognised) <br /> Eligibility criteria:
            </h1>
            <p className="admissionPera">
              The candidate must have passed the Higher Secondary examination
              (which is equivalent to 10+2 ). The student must have obtained 50%
              marks in the subjects of Physics, Chemistry and Biology and must
              have qualifying marks in English. For SC, ST or OBC, the minimum
              marks shall be 40%. Criteria are subjected to change as per the
              notifications of state/central government or order from
              supreme/high court.
            </p>
          </Col>
          <Col sm className="admission-col-2">
            <h1 className="admission-hedline-2">Admission Process:</h1>
            <p className="admissionPera">
              The candidates need to pass entrance exam to secure their place
              for the course. Admission to BDS course is completed through
              single common entrance test conducted by NEET. After clearing the
              entrance exam, students have to participate in the counseling
              process organized by respective authorities. Seats will be
              allotted to candidates on the basis of rank, filled choices and
              availability of seats.
            </p>
          </Col>
        </Row>
        <div className="bds-section2">
          <h1 className="admission-hedline-2">Fees detail:</h1>
          <p className="admissionPera">
            <a
              className="admissionDownload"
              href={BDSMeritList}
              download={"BDS INSTITUTIONAL LEVEL ROUND MERIT LIST 2021_22"}
            >
              &#8226; BDS INSTITUTIONAL LEVEL ROUND MERIT LIST 2021_22
            </a>{" "}
            <br />
            Tution Fees: 4,00,000/- per year <br />
            Tution Fees: 4,00,000/- per year
            <br />
            Hostel Fees: 20,000/- per year
            <br />
          </p>
        </div>
        <div
          style={{
            backgroundColor: "rgba(255, 217, 0, 0.9)",
            border: "1px solid #FFD900",
            backdropFilter: "blur(7.5px)",
            padding: "1%",
            display: "block",
            margin: "auto",
            position: "relative",
            top: "-1.3rem",
            textAlign: "center",
            maxWidth: "fit-content",
            paddingBottom: "0%",
            boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.2)"
          }}
        >
          <p className="admissionPera">
            <a
              className="admissionDownload"
              href={BDSFeeStructure}
              download={"2021-22_B.D.S._FEE_STRUCTURE .PDF"}
            >
              &#8226; 2021-22_B.D.S._FEE_STRUCTURE .PDF
            </a>{" "}
          </p>
        </div>
      </div>

      <div className="admission-section-2">
        <h1 className="admission-hedline">
          Syllabus: BDS (As per current DCI regulation)
        </h1>

        <Table striped bordered className="admissionTable">
          <thead>
            <tr>
              <th>First Year</th>
              <th> Second Year</th>
              <th> Third Year </th>
              <th>Four Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>General Human Anatomy including Embryology and Histology </td>
              <td>General Pathology and Microbiology</td>
              <td>General Medicine</td>
              <td>Orthodontics and Dentofacial Orthopaedics</td>
            </tr>
            <tr>
              <td>General Human Physiology and Biochemistry</td>
              <td>General and Dental Pharmacology and Therapeutics</td>
              <td>General Surgery</td>
              <td>Oral Medicine & Radiology</td>
            </tr>
            <tr>
              <td>Dental Anatomy, Embryology and Oral Histology</td>
              <td>Dental Materials</td>
              <td>Oral Pathology and Oral Microbiology</td>
              <td>Paediatric and Preventive Dentistry</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Pre-clinical Conservative Dentistry</td>
              <td>-</td>
              <td>Periodontology</td>
            </tr>
            <tr>
              <td>-</td>
              <td>Pre-clinical Prosthodontics and Crown & Bridge</td>
              <td>-</td>
              <td>Oral & Maxillofacial Surgery</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Prosthodontics and Crown & Bridge</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Conservative Dentistry and Endodontics</td>
            </tr>
            <tr>
              <td>-</td>
              <td>-</td>
              <td>-</td>
              <td>Public Health Dentistry</td>
            </tr>
          </tbody>
        </Table>
      </div>

      <div className="admissionLastSection2">
        <Row>
          <Col sm className="admission-col-3">
            <h1 className="admission-hedline-2">
              Regulation and Syllabus as below
            </h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={Revised_BDS_Course_Regulation_2007}
                download={"Revised_BDS_Course_Regulation_2007 . PDF"}
              >
                &#8226; Revised_BDS_Course_Regulation_2007 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={RevisedSyllbus}
                download={"Revised Syllbus BDS (New) . PDF"}
              >
                &#8226; Revised Syllbus BDS (New) . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={BDSSyllabus1}
                download={"1st BDS Syllabus . PDF"}
              >
                &#8226; 1st BDS Syllabus . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={BDSSyllabus2}
                download={"2st BDS Syllabus . PDF"}
              >
                &#8226; 2nd BDS Syllabus . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={BDSSyllabus3}
                download={"3st BDS Syllabus . PDF"}
              >
                &#8226; 3rd BDS Syllabus . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={BDSSyllabus4}
                download={"4st BDS Syllabus . PDF"}
              >
                &#8226; 4th BDS Syllabus . PDF
              </a>{" "}
              <br />
            </p>
          </Col>
          <Col sm className="admission-col-4">
            <h1 className="admission-hedline-2">Merit List.</h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={RejectedCandidate}
                download={
                  "Istitutional Level Vacancy Round 2022-23 - Rejected Candidate List"
                }
              >
                &#8226; Istitutional Level Vacancy Round 2022-23 - Rejected
                Candidate List
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={GeneralMerit}
                download={
                  "Istitutional Level Vacancy Round 2022-23 - General Merit List"
                }
              >
                &#8226; Istitutional Level Vacancy Round 2022-23 - General Merit
                List
              </a>{" "}
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default BDSAdmission;
