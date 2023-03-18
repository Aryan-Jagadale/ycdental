import React from 'react';
import "../../style/AdmissionPage/admission.css";
import { Col, Row, Table } from "react-bootstrap";
import merit1 from "../../assets/pdf/2021-2022/NEET-MDS-2021-22-INSTITUTIONAL-LEVEL-ROUND-Dt-.07-11-2021.pdf";
import merit2 from "../../assets/pdf/2021-2022/NEET_MDS_Institutional_Vacancy_Round_MeritList_No.2_Dt..pdf";

function BDSAdmission() {
  return (
    <div className="admissionSection">
      <div className="short-info-box">
        <h1 className="admission-hedline">Master of Dental Surgery (MDS)</h1>
        <p className="admissionPera">
          Master of Dental Surgery (MDS) course at Late Shri Yashwantrao Chavan
          Memorial Medical & Rural Development Foundation’s Dental College,
          Ahmednagar is recognised by Dental Council of India and is affiliated
          to Maharashtra University of Health Sciences, Nashik. Hence the Rules
          & Regulations of the Maharashtra University of Health Sciences, Nashik
          in regard to the syllabi and conduct of examination shall apply.
        </p>
        <Row>
          <Col sm className="admission-col-1">
            <h1 className="admission-hedline-2">
              No. Of Seats: 16 <br />
              Eligibility criteria:
            </h1>
            <p className="admissionPera">
              To be eligible for this course, the candidate has to be a Bachelor
              of Dental Science graduate from a recognised Dental College in
              India with a minimum of 50%.
            </p>
            <br />
            <h1 className="admission-hedline-2">Admission Process:</h1>
            <p className="admissionPera">
              Admission to MDS Course at Yashwantrao Chavan Dental College is
              completed through a single Common Entrance test conducted by NEET
              (National Eligibity cum Entrance Test).
            </p>
          </Col>
          <Col sm className="admission-col-2">
            <h1 className="admission-hedline-2">Merit List</h1>
            <p className="admissionPera">
              {" "}
              <a
                className="admissionDownload"
                href={merit1}
                download={"Merit List 1"}
              >
                Download
              </a>{" "}
              Merit List No 1 <br />
              <a
                className="admissionDownload"
                href={merit2}
                download={"Merit List 2"}
              >
                Download
              </a>{" "}
              Merit List No 2
            </p>
            <h1 className="admission-hedline-2">Fee Structure</h1>
            <p className="admissionPera">
              {" "}
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                M.D.S_FEE_STRUCUTRE_2021-22 . PDF
              </a>
            </p>
          </Col>
        </Row>
      </div>

      <div className="admission-section-2">
        <h1 className="admission-hedline">
          The College is running Master of Dental Surgery (MDS) in 4 specialties
        </h1>

        <Table striped bordered className="admissionTable">
          <thead>
            <tr>
              <th>Sr.No</th>
              <th>Department</th>
              <th>No. of Seats</th>
              <th>Fees Session 2020 (Per Annum)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Periodontics</td>
              <td>05</td>
              <td>5,40,000/-</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Orthodontics </td>
              <td>05</td>
              <td>5,40,000/-</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Prosthodontics </td>
              <td>03</td>
              <td>5,40,000/-</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Conservative Dentistry</td>
              <td>03</td>
              <td>5,40,000/-</td>
            </tr>
          </tbody>
        </Table>

        <p className="admissionPera">
          &#8226; Hostel Fees (per year) : 40,000/-
          <br />
          &#8226; To facilitate students in acquiring knowledge of basic
          behavioural and clinical sciences for general practice of dentistry,
          dental specialties, research and teaching.
          <br />
          &#8226; To facilitate students in acquiring knowledge of basic
          behavioural and clinical sciences for general practice of dentistry,
          dental specialties, research and teaching.
          <br />
        </p>
      </div>

      <div className="admissionLastSection">
        {" "}
        <h1 className="admission-hedline">
          REGULATION AND SYLLABUS AS BELOW
        </h1>{" "}
        <p className="admissionPera">
          {" "}
          <a
            className="admissionDownload"
            href={merit1}
            download={"M.D.S_FEE_STRUCUTRE_2021-22"}
          >
            M.D.S_FEE_STRUCUTRE_2021-22 . PDF
          </a>
        </p>
        <Row>
          <Col sm className="admissionCards">
            <h1 className="admission-hedline-2">
              1 . Prosthodontics And Crown & Bridge
            </h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; MDS (Prosthodontics And Crown & Bridge)- From A. Y.
                2009-10.PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Prosthodontics And Crown &
                Bridge)-A.Y.-2018-19 Part I.PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Prosthodontics And Crown &
                Bridge)-A.Y.-2018-19 Part II.PDF
              </a>{" "}
              <br />
            </p>
          </Col>
          <Col sm className="admissionCards">
            <h1 className="admission-hedline-2">2 . Periodontology</h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; MDS (Periodontology)- From A. Y. 2009-10 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Periodontology)-A.Y.-2018-19 Part I . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Periodontology)-A.Y.-2018-19 Part II . PDF
              </a>{" "}
              <br />
            </p>
          </Col>
        </Row>
        <Row>
          <Col sm className="admissionCards">
            <h1 className="admission-hedline-2">
              3 . Orthodontics & Dentofacial Orthopaedics
            </h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; MDS (Orthodontics & Dentofacial Orthopaedics)- From A.Y.
                2009-10 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Orthodontics & Dentofacial
                Orthopaedics)-A.Y.-2018-19 Part I . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Orthodontics & Dentofacial
                Orthopaedics)-A.Y.-2018-19 Part II . PDF
              </a>{" "}
              <br />
            </p>
          </Col>
          <Col sm className="admissionCards"> <h1 className="admission-hedline-2">
          4 . Conservative Dentistry & Endodontics
      
            </h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; MDS (Conservative Dentistry & Endodontics)- From A. Y. 2009-10 . PDF
      
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Conservative Dentistry & Endodontics)-A.Y.-2018-19 Part I . PDF
      
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={merit1}
                download={"M.D.S_FEE_STRUCUTRE_2021-22"}
              >
                &#8226; Syllabus (Conservative Dentistry & Endodontics)-A.Y.-2018-19 Part II . PDF
              </a>{" "}
              <br />
            </p></Col>
        </Row>
      </div>
    </div>
  );
}

export default BDSAdmission