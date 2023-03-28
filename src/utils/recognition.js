import mainDivFirstImg from "../assets/images/recognition/mainDivFirstImg.svg";
import mainDivSecondImg from "../assets/images/recognition/mainDivSecondImg.svg";
import mainDivThirdImg from "../assets/images/recognition/mainDivThirdImg.svg";
import ISO from "../assets/pdf/Home/ISO.pdf";
import AISHE from "../assets/pdf/Recognition/AISHE.pdf";
import BDS from "../assets/pdf/Recognition/B.D.SRecognition.pdf";
import MDS2 from "../assets/pdf/Recognition/2MDS.pdf";
import MDS3 from "../assets/pdf/Recognition/3MDS.pdf";
import MDS4 from "../assets/pdf/Recognition/4MDS.pdf";


export const recognitionContent = [
    {
        "imG":mainDivSecondImg,
        "title":"Recognized by Dental Council of India",
        "pdf":[BDS,MDS2,MDS3,MDS4]
        


    },
    {
        "imG":mainDivThirdImg,
        "title":"College is certified with ISO 9001:2015",
        "pdf":ISO
    },
    {
        "imG":mainDivFirstImg,
        "title":"Recognized as Innovation and Incubation Centre (IIC) by Govt. of India",
        "pdf":AISHE
        /*"title":"Affiliated to Maharashtra University of Health Sciences (MUHS)"*/
    }
    




]