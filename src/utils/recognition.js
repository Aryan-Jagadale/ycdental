import mainDivFirstImg from "../assets/images/recognition/mainDivFirstImg.svg";
import mainDivSecondImg from "../assets/images/recognition/mainDivSecondImg.svg";
import mainDivThirdImg from "../assets/images/recognition/mainDivThirdImg.svg";
import ISO from "../assets/pdf/Home/ISO.pdf";
import IIC from "../assets/pdf/Recognition/IIC.pdf";
import AISHE from "../assets/pdf/Recognition/AISHE.pdf";
import BDS from "../assets/pdf/Recognition/B.D.SRecognition.pdf";
import MDS2 from "../assets/pdf/Recognition/2MDS.pdf";
// import MDS3 from "../assets/pdf/Recognition/3MDS.pdf";
import PHD from "../assets/pdf/Recognition/PH.D Recognition.pdf";

export const recognitionContent = [
  {
    imG: mainDivSecondImg,
    title: "Recognized by Dental Council of India (BDS Recognition)",
    pdf: BDS,
  },
  {
    imG: mainDivThirdImg,
    title: "Recognized by Dental Council of India (MDS Recognition)",
    pdf: MDS2,
  },
  {
    imG: mainDivThirdImg,
    title: "Recognized by Dental Council of India (PHD Recognition)",
    pdf: PHD,
  },
];
export const recognitionContent1 = [
  {
    imG: mainDivThirdImg,
    title: "All India Survey on Higher Education(AISHE)",
    pdf: AISHE,
  },
  {
    imG: mainDivThirdImg,
    title: "College is certified with ISO 9001:2015",
    pdf: ISO,
  },
  {
    imG: mainDivFirstImg,
    title:
      "Recognized as Innovation and Incubation Centre (IIC) by Govt. of India",
    pdf: IIC,
    /*"title":"Affiliated to Maharashtra University of Health Sciences (MUHS)"*/
  },
];
