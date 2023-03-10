import React from "react";
import aboutWelcomeImage from "./../../assets/images/aboutWelcomeImage.png";

const AboutWelcome = () => {
  return (
    <div>
      <div
        style={{ fontFamily: "Domine", color: "#032F6E" }}
        className="flex-1 justify-center content-center text-center my-3 py-3 mx-5 "
      >
        <h2 className="text-3xl font-bold border-b-2 leading-[3rem] border-[#00205B] ">
          {" "}
          Welcome to Yashwantrao Chavan Memorial Medical & Rural <br />
          <span className="leading-10">Development Foundation’s Dental College</span>
        </h2>
        {/*<img src={line} alt="" className="mt-3"></img>*/}
      </div>

      <div
        className=""
        style={{
          padding: "3.5rem",
        }}
      >
        <section className="flex items-center justify-center flex-col lg:flex-row">
          <div className="w-[100%] lg:w-[40%] flex items-center justify-center">
            <img src={aboutWelcomeImage} alt={"Welcome About pic"} className="m-4 lg:m-0" />
          </div>

          <div className="w-[100%] lg:w-[60%] font-fam text-lg">
            <p>
              The Late Shri. Yashwantrao Chavan Memorial Medical and Rural
              Development Foundation, Ahmednagar was established in 1989, in the
              memory of Late Shri. Yashwantraoji Chavan, the architect of
              Maharashtra State, Former Chief Minister and the pioneer of the
              Co-operative and Panchayat Raj movements in Maharashtra. The
              foundation is committed to work with the motto of medical and
              allied development facilities for masses, in particular the rural
              and poor population.
            </p>
            <br />
            <p>
              Ahmednagar city is a fast developing industrial and educational
              centre focussing on the population drainage of around 20 lakhs.
            </p>
            <br />

            <p>
              Ahmednagar and its allied South Area (inclusive of Shevgaon,
              Pathardi, Newasa, Jamkhed, Karjat, Shrigonda, Parner, Nagar
              Tahsil, etc.) are deprived socio – economically and are
              chronically draught affected. Also the needy population is
              deprived of Medical, Dental, Pharmacy & Paramedical education
              along with medical facilities.
            </p>
          </div>
        </section>
        <br />
        <section>
          <p className="text-lg text-justify font-fam">
            In view of the above facts and considering the importance of Dental
            Health Science, the foundation started Dental College at Ahmednagar.
            With the setup available with us we are sure to meet the
            requirements laid down by the Dental Council of India and MUHS to
            start degree course (B.D.S.), simultaneously the foundation has
            plans for full fledged Dental Research Institute.
          </p>
        </section>
      </div>

      
    </div>
  );
};
export default AboutWelcome;
