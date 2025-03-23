import { useEffect, useState } from "react";

export const getBettingInfo = (gameId, bettingData) => {
  let bettingInfo = "";
  let finalBettingInfo;
  // console.log(bettingData);

  for (let i = 0; i < bettingData.length; i++) {
    if (bettingData[i].uuids === gameId) {
      if (bettingData[i].status === "closed") {
        bettingInfo = "Closed";
      }
      else if (bettingData[i].status === "scheduled") {
        bettingInfo = "TBD";
      }
      else if (bettingData[i].status === "live") {
        bettingInfo = bettingData[i].consensus.lines[3].spread
      }
      else bettingInfo = bettingData[i].consensus.lines[2].spread
    }
  }


  finalBettingInfo = (bettingInfo?.includes("-") || bettingInfo === "") ? bettingInfo : "+" + bettingInfo
  
  return finalBettingInfo;
};

