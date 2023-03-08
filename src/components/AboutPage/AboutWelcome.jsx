import React from "react";
import aboutPageDent1 from "./../../assets/images/aboutPageDent1.png";
import aboutPageDent2 from "./../../assets/images/aboutPageDent2.png";
import line from "./../../assets/images/line.svg";
const AboutWelcome = () => {
    return (
        <div>
        <div 
        style={{ fontFamily: "Domine", color: "#032F6E" }}
        className="flex-1 justify-center content-center text-center my-3 py-3 mx-5"
      >
        <h2 className="text-3xl divide-y-4"> Welcome to Yashwantrao Chavan Memorial Medical & Rural <br/>
        Development Foundation’s Dental College
        </h2>
        <img src={line} alt="" className="mt-3"></img>
    </div>
    <div className="flex auto-cols-2 mx-24">
        <div>
        <img src={aboutPageDent1} alt="" className="object-fill h-42 w-96 mt-2" />
        <img src={aboutPageDent2} alt="" className="object-fill h-38 w-48 mx-24" />
        </div>
        <div className="text-justify">
            <p className="flex-1 mx-32 mt-2 text-base mb-15">The Late Shri. Yashwantrao Chavan Memorial Medical and Rural Development Foundation, Ahmednagar was
            established in 1989, in the memory of Late Shri. Yashwantraoji Chavan, the architect of Maharashtra State, Former Chief Minister and the pioneer of the 
            Co-operative and Panchayat Raj movements in Maharashtra.
            The foundation is committed to work with the motto of medical and allied development facilities for masses, in particular the rural and poor population.</p>
           
            <p className="flex-1 mx-32 mt-3 text-base mb-15">
            Ahmednagar city is a fast developing industrial and educational centre focussing on the population drainage of around 20 lakhs.<br />
            Ahmednagar and its allied South Area (inclusive of Shevgaon, Pathardi, Newasa, Jamkhed, Karjat, Shrigonda, Parner, Nagar Tahsil, etc.)<br />
            are deprived socio – economically and are chronically draught affected. </p>
            <p className="flex-1 mx-32 mt-3 text-base mb-15">
            Also the needy population is deprived of Medical, Dental, Pharmacy & Paramedical education along with medical facilities.
        </p>
        </div>
    </div>
    <div>
        <p className="flex justify-center mx-24 text-base mb-10 text-justify">In view of the above facts and considering the importance of Dental Health Science, the foundation started Dental College at Ahmednagar.<br />
        With the setup available with us we are sure to meet the requirements laid down by the Dental Council of India and MUHS to start degree course (B.D.S.), simultaneously the foundation has plans for full fledged Dental Research Institute.</p>
    </div>
         
    </div>
    );
};
export default AboutWelcome;
