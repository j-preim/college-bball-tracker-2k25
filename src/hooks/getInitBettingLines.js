const apiUrl = `/api/initBettingLines`;

export async function getBettingData() {
  let sportEvents;
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    sportEvents = json.sport_events;
    // console.log(json);
    return sportEvents;
  } catch (error) {
    console.error(error.message);
  }
}
