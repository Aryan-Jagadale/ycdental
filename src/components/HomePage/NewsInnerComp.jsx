import React from "react";
import { bottonNews } from "../../content/Home/news";

const NewsInnerComp = () => {
  return (
    <div className="text-center tracking-wide p-3 font-fam">
      {bottonNews.map((items, i) => (<div>
        <p key={i} className="font-normal text-base" >
          
          {items.newsBottom}
        </p>

        <br />
        <br /></div>))}
      {/* <div>
        <p className="font-normal text-base">
          PG Orthodontics win 'Best Group Dance' at 25th IOS PG Convention, Mangaluru
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Ram Sable & Amrapali Shendge, Final year BDS, win first place at IOS Celebration
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Dr Viraj Mali, PG Endodontics, wins 1st prize at 23rd IACDE National PG Convention
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          YCDC hosts MUHS State level Research Competition
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Rahul Pawar, third year BDS, wins 1st prize Photography at Indradhanush-MUHS
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Dr Omkar Sakpal, Faculty - Prosthodontics, wins 1st place at MUHS State Level Online Research competition 2022
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Dr Pooja Khakal, PG Endodontics, bags 3rd prize at MUHS State Level Online Research Competition
        </p>
      </div>
      <br />
      <br />
      <div>
        <p className="font-normal text-base">
          Dr Nimisha Mahajan, PG Endodontics, wins 1st prize & Dr Pooja Khakal, PG Endodontics, bags 3rd prize at MUHS State Research Competition - Avishkar 2022
        </p>
      </div> */}

    </div>
  );
};

export default NewsInnerComp;

