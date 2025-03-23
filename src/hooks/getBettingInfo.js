import { useEffect, useState } from "react";

export const getBettingInfo = (gameId, bettingData) => {
  let bettingInfo = "TBD";
  let finalBettingInfo;
  // console.log(bettingData);

  for (let i = 0; i < bettingData.length; i++) {
    if (bettingData[i].uuids === gameId) {
      bettingData[i].status === "live" ? bettingInfo = bettingData[i].consensus.lines[3].spread : bettingInfo = bettingData[i].consensus.lines[2].spread
    }
  }


  finalBettingInfo = (bettingInfo?.includes("-") || bettingInfo?.includes("T")) ? bettingInfo : "+" + bettingInfo
  
  return finalBettingInfo;
};

