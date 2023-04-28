import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "../../style/AdmissionPage/admission.css";
import {
  MDSInfromation,
  MDS_REGULATION_AND_SYLLABUS,
} from "../../content/Admission/MDSInformstion";

function MDSAdmission() {
  return (
    <div className="admissionSection">
      {MDSInfromation.map((item) => (
        <div key={item.id} className="short-info-box">
          <h1 className="admission-hedline">Master of Dental Surgery (MDS)</h1>
          <p className="admissionPera">{item.paragraph1}</p>
          <Row>
            <Col sm className="admission-col-1">
              <h1 className="admission-hedline-2">
                No. Of Seats: {item.Seats} <br />
                Eligibility criteria:
              </h1>
              <p className="admissionPera">{item.Eligibility}</p>
              <br />
              <h1 className="admission-hedline-2">Admission Process:</h1>
              <p className="admissionPera">{item.AdmissionProcess}</p>
            </Col>
            <Col sm className="admission-col-2">
              <h1 className="admission-hedline-2">Merit List</h1>
              <p className="admissionPera">
                {" "}
                <a
                  className="admissionDownload"
                  href={item.MeritList1}
                  download={"Merit List 1"}
                >
                  Download
                </a>{" "}
                Merit List No 1 <br />
                <a
                  className="admissionDownload"
                  href={item.MeritList2}
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
                  href={item.FeeStructure}
                  download={"M.D.S_FEE_STRUCUTRE_2021-22 . PDF"}
                >
                  M.D.S_FEE_STRUCUTRE_2021-22 . PDF
                </a>
              </p>
            </Col>
          </Row>
        </div>
      ))}

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
            href={
              "https://files.yashdental.org/wp-content/uploads/2023/04/MDS_Course_Regulations_2017.pdf"
            }
            download={"MDS_Course_Regulations_2017.pdf"}
          >
            MDS_Course_Regulations_2017.pdf
          </a>
        </p>
        <Row>
          {MDS_REGULATION_AND_SYLLABUS.map((item) => (
            <div sm className="admissionCards">
              <h1 className="admission-hedline-2">{item.sectionTitle}</h1>
              <p className="admissionPera" style={{ textAlign: "start" }}>
                <a
                  className="admissionDownload"
                  href={item.pdf1Link}
                  download={
                    "MDS (Prosthodontics And Crown & Bridge)- From A. Y.2009-10.PDF"
                  }
                >
                  &#8226; {item.pdf1Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf2Link}
                  download={
                    "Syllabus (Prosthodontics And Crown & Bridge)-A.Y.-2018-19 Part I.PDF"
                  }
                >
                  &#8226; {item.pdf2Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf3Link}
                  download={
                    "Syllabus (Prosthodontics And Crown & Bridge)-A.Y.-2018-19 Part II.PDF"
                  }
                >
                  &#8226; {item.pdf3Title}
                </a>{" "}
                <br />
              </p>
            </div>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default MDSAdmission;
