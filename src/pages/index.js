export { default as Home } from "./Home";
export { default as Bracket } from "./Bracket";
export { default as Matchups } from "./Matchups";
export { default as Entries } from "./Entries";
export { default as Auth } from "./Auth";

const getSchedule = async () => {
  const scheduleURL =
    "https://api.sportradar.us/ncaamb/trial/v8/en/tournaments/56befd3f-4024-47c4-900f-892883cc1b6b/schedule.json?api_key=luKiaKnnuM5AyqYEimwuW2YnoRK9ks4F6wYPP307";
  const options = { method: "GET", headers: { accept: "application/json" } };

  fetch(scheduleURL, options)
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};
