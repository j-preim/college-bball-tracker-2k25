import { useEffect, useState } from "react";
import initBettingLinesDb from "../../public/initBettingLines.json";

export const getBettingInfo = (gameId) => {
  let bettingInfo = "TBD";
  let finalBettingInfo;

  for (let i = 0; i < initBettingLinesDb.sport_events.length; i++) {
    if (initBettingLinesDb.sport_events[i].uuids === gameId) {
      initBettingLinesDb.sport_events[i].status === "live" ? bettingInfo = initBettingLinesDb.sport_events[i].consensus.lines[3].spread : bettingInfo = initBettingLinesDb.sport_events[i].consensus.lines[2].spread
    }
  }

  

  finalBettingInfo = (bettingInfo?.includes("-") || bettingInfo?.includes("T")) ? bettingInfo : "+" + bettingInfo
  
  return finalBettingInfo;
};

