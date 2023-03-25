import React from 'react'

const PolicyLeaderHistory = ({ name, link }) => {

  return (
    <div className='flex flex-row'>
      <div className={`m-4 flex flex-col w-screen justify-center content-center items-center text-center py-10 px-5 shadow-xl
     ${name === "Policy / Governance" ? "bgImgOne" : "bgImageThree"}
      ${name === "History" ? "bgImgTwo" : ""} 
      ${name === "Leadership" ? "bgImgThree" : ""} `}>
        <h2 className="py-2 px-4 text-2xl pb-4" style={{ color: "white" }}>
          {name}
        </h2>
        <button
          style={{ border: "2px solid #FFD900" }}
          className="btn-one justify-center rounded bg-transparent hover:bg-yellow-300
                 text-yellow-300 font-semibold
                 hover:text-yellow-300 py-2 px-4"
        >
          {link}
        </button>
      </div>
      <div className={`m-4 flex flex-col w-screen justify-center content-center items-center text-center py-10 px-5 pb-4 shadow-xl
     ${name === "Code of conduct" ? "bgImgFour" : ""}
      ${name === "Patient Safety" ? "bgImgFive" : ""} 
      ${name === "E-governance" ? "bgImgSix" : ""} `}>
        <h2 className="py-2 px-4 text-2xl pb-4" style={{ color: "white" }}>
          {name}
        </h2>
        <button
          style={{ border: "2px solid #FFD900" }}
          className="btn-one justify-center rounded bg-transparent hover:bg-yellow-300
                 text-yellow-300 font-semibold
                 hover:text-yellow-300 py-2 px-4"
        >
          {link}
        </button>
      </div>

    </div>

  )
}

export default PolicyLeaderHistory