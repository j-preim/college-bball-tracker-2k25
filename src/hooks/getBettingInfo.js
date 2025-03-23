import { useEffect, useState } from "react";
import { getBettingData } from "./getInitBettingLines";

export async function getBettingInfo(gameId) {
  // let bettingData = await getData();
  let bettingInfo = "TBD";
  let finalBettingInfo;

  for (let i = 0; i < bettingData.sport_events.length; i++) {
    if (bettingData.sport_events[i].uuids === gameId) {
      bettingData.sport_events[i].status === "live" ? bettingInfo = bettingData.sport_events[i].consensus.lines[3].spread : bettingInfo = bettingData.sport_events[i].consensus.lines[2].spread
    }
  }

  

  finalBettingInfo = (bettingInfo?.includes("-") || bettingInfo?.includes("T")) ? bettingInfo : "+" + bettingInfo
  
  return finalBettingInfo;
};

