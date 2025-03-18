import { useEffect, useState } from "react";
import initBettingLinesDb from "../../public/initBettingLines.json";

export const getBettingInfo = (gameId) => {
  let bettingInfo;
  let finalBettingInfo;

  for (let i = 0; i < initBettingLinesDb.sport_events.length; i++) {
    if (initBettingLinesDb.sport_events[i].uuids === gameId) {
      bettingInfo = initBettingLinesDb.sport_events[i].consensus.lines[2].spread;
    }
    else bettingInfo = "TBD"
  }

  

  finalBettingInfo = !bettingInfo?.includes("-") ? "+" + bettingInfo : bettingInfo
  
  return finalBettingInfo;
};

