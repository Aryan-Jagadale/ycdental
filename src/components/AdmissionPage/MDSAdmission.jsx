import React from "react";
import { Col, Row, Table } from "react-bootstrap";
import "../../style/AdmissionPage/admission.css";
import { MDSInfromation } from "../../content/Admission/MDSInformstion";

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
              "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133744/YCDENTAL/pdf/2017-2018/MDS_Course_Regulations_2017_njrzhr.pdf"
            }
            download={"MDS_Course_Regulations_2017.pdf"}
          >
            MDS_Course_Regulations_2017.pdf
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
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133691/YCDENTAL/pdf/2009-2010/1_didnfu.pdf"
                }
                download={
                  "MDS (Prosthodontics And Crown & Bridge)- From A. Y.2009-10.PDF"
                }
              >
                &#8226; MDS (Prosthodontics And Crown & Bridge)- From A. Y.
                2009-10.PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133776/YCDENTAL/pdf/2018-2019/Syllabus-Prosthodontics-And-Crown-Bridge-A.Y.-2018-19-Part-I_jgsmfc.pdf"
                }
                download={
                  "Syllabus (Prosthodontics And Crown & Bridge)-A.Y.-2018-19 Part I.PDF"
                }
              >
                &#8226; Syllabus (Prosthodontics And Crown &
                Bridge)-A.Y.-2018-19 Part I.PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133775/YCDENTAL/pdf/2018-2019/Syllabus-Prosthodontics-And-Crown-Bridge-A.Y.-2018-19-Part-II_dov08r.pdf"
                }
                download={
                  "Syllabus (Prosthodontics And Crown & Bridge)-A.Y.-2018-19 Part II.PDF"
                }
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
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133693/YCDENTAL/pdf/2009-2010/2_ylbfea.pdf"
                }
                download={"MDS (Periodontology)- From A. Y. 2009-10 . PDF"}
              >
                &#8226; MDS (Periodontology)- From A. Y. 2009-10 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133775/YCDENTAL/pdf/2018-2019/Syllabus-Periodontology-A.Y.-2018-19-Part-I_ao7ygu.pdf"
                }
                download={"Syllabus (Periodontology)-A.Y.-2018-19 Part I . PDF"}
              >
                &#8226; Syllabus (Periodontology)-A.Y.-2018-19 Part I . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133774/YCDENTAL/pdf/2018-2019/Syllabus-Periodontology-A.Y.-2018-19-Part-II_l0jfar.pdf"
                }
                download={
                  "Syllabus (Periodontology)-A.Y.-2018-19 Part II . PDF"
                }
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
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133693/YCDENTAL/pdf/2009-2010/3_hvjoqw.pdf"
                }
                download={
                  "MDS (Orthodontics & Dentofacial Orthopaedics)- From A.Y.2009-10 . PDF"
                }
              >
                &#8226; MDS (Orthodontics & Dentofacial Orthopaedics)- From A.Y.
                2009-10 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133773/YCDENTAL/pdf/2018-2019/Syllabus-Orthodontics-Dentofacial-Orthopaedics-A.Y.-2018-19-Part-I_i2yvfa.pdf"
                }
                download={
                  "Syllabus (Orthodontics & Dentofacial Orthopaedics)-A.Y.-2018-19 Part I . PDF"
                }
              >
                &#8226; Syllabus (Orthodontics & Dentofacial
                Orthopaedics)-A.Y.-2018-19 Part I . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133773/YCDENTAL/pdf/2018-2019/Syllabus-Orthodontics-Dentofacial-Orthopaedics-A.Y.-2018-19-Part-II_ql9mkx.pdf"
                }
                download={
                  "Syllabus (Orthodontics & Dentofacial Orthopaedics)-A.Y.-2018-19 Part II . PDF"
                }
              >
                &#8226; Syllabus (Orthodontics & Dentofacial
                Orthopaedics)-A.Y.-2018-19 Part II . PDF
              </a>{" "}
              <br />
            </p>
          </Col>
          <Col sm className="admissionCards">
            {" "}
            <h1 className="admission-hedline-2">
              4 . Conservative Dentistry & Endodontics
            </h1>
            <p className="admissionPera" style={{ textAlign: "start" }}>
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133693/YCDENTAL/pdf/2009-2010/3_hvjoqw.pdf"
                }
                download={
                  "MDS (Conservative Dentistry & Endodontics)- From A. Y. 2009-10 . PDF"
                }
              >
                &#8226; MDS (Conservative Dentistry & Endodontics)- From A. Y.
                2009-10 . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133773/YCDENTAL/pdf/2018-2019/Syllabus-Conservative-Dentistry-Endodontics-A.Y.-2018-19-Part-I_ihujla.pdf"
                }
                download={
                  "Syllabus (Conservative Dentistry & Endodontics)-A.Y.-2018-19 Part I . PDF"
                }
              >
                &#8226; Syllabus (Conservative Dentistry &
                Endodontics)-A.Y.-2018-19 Part I . PDF
              </a>{" "}
              <br />
              <a
                className="admissionDownload"
                href={
                  "https://res.cloudinary.com/dbdni9n4i/image/upload/v1681133773/YCDENTAL/pdf/2018-2019/Syllabus-Conservative-Dentistry-Endodontics-A.Y.-2018-19-Part-II_vhtyfu.pdf"
                }
                download={
                  "Syllabus (Conservative Dentistry & Endodontics)-A.Y.-2018-19 Part II . PDF"
                }
              >
                &#8226; Syllabus (Conservative Dentistry &
                Endodontics)-A.Y.-2018-19 Part II . PDF
              </a>{" "}
              <br />
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default MDSAdmission;
