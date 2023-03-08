import React from "react";
import Logo from "../assets/images/logo.png";
import "../style/HomePage/footer.css";

    
const FooterComp = () => {
  return (
    <footer className="footer-component" style={{fontFamily: 'Domine'}}>
    <div className="mx-20 py-10 text-center md:text-left flex-1 justify-center items-end">
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        <div className="" style={{paddingBotton: 30, width:300}}>

           <div className="mx-10 mb-4">
            <img alt="" src={Logo} style={{width:"40rem", paddingLeft:20}}/>
            </div> 
         <div className="ml-12">
              <h6 className="mb-2"> 166/1, Vadgaon Gupta, Opp. M.I.D.C. Ahmednagar - 414003 </h6> 
              <h6 className="mb-2"> 0241-2779111, 2777070 </h6>  
              <h6 className="mb-2">  0241-2779111 </h6>  
              <h6 className="mb-2"> yash_dental@rediffmail.com </h6> </div>
        </div>
        <div className="mx-10" style={{width:250, paddingTop: 20}}>
          <h6
            className="mx-10 mb-4 font-semibold uppercase md:justify-start">
            Important Links
          </h6>
          <p className="mx-10 mb-4">
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >BDS Admission</a>
          </p>

          <p className="mx-10 mb-4">
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >MDS Admission</a
            >
          </p>

        </div>
        <div className="mx-10" style={{paddingTop: 20, paddingBotton: 30}}>
          <h6
            className="mb-4 font-semibold uppercase md:justify-start">
            Our Departments
          </h6>
          <p className="mb-4">
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Conservative Dentistry</a
            >
          </p>
          <p className="mb-4">
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Oral Pathology</a
            >
          </p>
          <p className="mb-4">
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Orthodontics</a
            >
          </p>
          <p>
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Pedo</a
            >
          </p>
        </div>
        <div className="mx-0" style={{ paddingBotton: 30, paddingTop: 20}}>
        <h6
            className="mx-0 mb-4 text-transparent font-semibold uppercase md:justify-start">
            Our Departments
          </h6>
          <p className="mx-0 mb-4" >
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Periodontics</a
            >
          </p>
          <p className="mx-0 mb-4" >
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Prosthodontics</a
            >
          </p>
          <p className="mx-0 mb-4" >
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Public Health Dentistry</a
            >
          </p>
          <p className="mx-0 mb-4" >
            <a href="#!" className="text-neutral-200 dark:text-neutral-200"
              >Oral Surgery</a
            >
          </p>

        </div>
      </div>
    </div>
  </footer>
  );
};

export default FooterComp;
