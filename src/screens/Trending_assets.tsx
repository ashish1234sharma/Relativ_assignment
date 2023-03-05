import React from "react";
import Card from "../components/Card";
import TRENDING from "../assets/trending.png";
import { CardData } from "../utils";
import { CardProps } from "../types";

const TrendingAssets = () => {
  React.useEffect(() => {
    console.log(CardData);
  }, []);

  return (
    <div className=" bg-slate-900   w-full min-h-screen flex items-center flex-col   ">
      <div className="w-full flex px-8 self-start mt-5 items-center">
        <div className="h-4/5">
          <img src={TRENDING}  />
        </div>
        <p className="font-mono font-semibold text-slate-400 ml-5">
          Trending Assets
        </p>
      </div>
      <div className="flex w-full justify-between mt-5 px-5 flex-wrap">
        {CardData?.map((elem: CardProps) => {
          return (
            <Card
              crypto={elem.crypto}
              icon={elem.icon}
              sortName={elem.sortName}
              price={elem.price}
              pvl={elem.pvl}
              performance={elem.performance}
              performance_status={elem.performance_status}
              popular_pair={elem.popular_pair}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TrendingAssets;
