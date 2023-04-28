import React from "react";
import "../../style/AdmissionPage/admission.css";
import { Col, Row, Table } from "react-bootstrap";
import {
  BDSInfromation,
  Regulation_and_Syllabus,
  Merit_List,
} from "../../content/Admission/BDSInformstion";

function BDSAdmission() {
  return (
    <div className="admissionSection">
      {BDSInfromation.map((item) => (
        <div className="short-info-box">
          <h1 className="admission-hedline">
            Bachelor of Dental Surgery (BDS)
          </h1>
          <p className="admissionPera">{item.paragraph1}</p>
          <Row>
            <Col sm className="admission-col-1">
              <h1 className="admission-hedline-2">
                No. of Seats: {item.Seats} <br /> Eligibility criteria:
              </h1>
              <p className="admissionPera">{item.Eligibility}</p>
            </Col>
            <Col sm className="admission-col-2">
              <h1 className="admission-hedline-2">Admission Process:</h1>
              <p className="admissionPera">{item.AdmissionProcess}</p>
            </Col>
          </Row>
          <div className="bds-section2">
            <h1 className="admission-hedline-2">Fees detail:</h1>
            <p className="admissionPera">
              <a
                className="admissionDownload"
                href={item.MeritList}
                download={item.MeritListTitle}
              >
                &#8226; {item.MeritListTitle}{" "}
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
              boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.2)",
            }}
          >
            <p className="admissionPera">
              <a
                className="admissionDownload"
                href={item.FeeStructure}
                download={item.FeeStructureTitle}
              >
                &#8226; {item.FeeStructureTitle}
              </a>{" "}
            </p>
          </div>
        </div>
      ))}
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
          {Regulation_and_Syllabus.map((item) => (
            <Col sm className="admission-col-3">
              <h1 className="admission-hedline-2">
                Regulation and Syllabus as below
              </h1>
              <p className="admissionPera" style={{ textAlign: "start" }}>
                <a
                  className="admissionDownload"
                  href={item.pdf1Link}
                  download={item.pdf1Title}
                >
                  &#8226; {item.pdf1Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf2Link}
                  download={item.pdf2Title}
                >
                  &#8226; {item.pdf2Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf3Link}
                  download={item.pdf3Title}
                >
                  &#8226; {item.pdf3Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf4Link}
                  download={item.pdf4Title}
                >
                  &#8226; {item.pdf4Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf5Link}
                  download={item.pdf5Title}
                >
                  &#8226; {item.pdf5Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf6Link}
                  download={"4st BDS Syllabus . PDF"}
                >
                  &#8226; {item.pdf6Title}
                </a>{" "}
                <br />
              </p>
            </Col>
          ))}
          {Merit_List.map((item) => (
            <Col sm className="admission-col-4">
              <h1 className="admission-hedline-2">Merit List.</h1>
              <p className="admissionPera" style={{ textAlign: "start" }}>
                <a
                  className="admissionDownload"
                  href={item.pdf1Link}
                  download={item.pdf1Title}
                >
                  &#8226; {item.pdf1Title}
                </a>{" "}
                <br />
                <a
                  className="admissionDownload"
                  href={item.pdf2Link}
                  download={item.pdf2Title}
                >
                  &#8226; {item.pdf2Title}
                  List
                </a>{" "}
              </p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default BDSAdmission;
