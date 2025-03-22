const apiKey = "luKiaKnnuM5AyqYEimwuW2YnoRK9ks4F6wYPP307";
// const apiUrl = `https://api.sportradar.us/ncaamb/trial/v8/en/tournaments/56befd3f-4024-47c4-900f-892883cc1b6b/schedule.json?api_key=${apiKey}`;

// fetch(apiUrl)
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

const apiUrl = `/test-cors-get`;

export async function getData() {
  try {
    const response = await fetch(apiUrl, {
      method: "GET",
    });
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    // const json = await response.json();
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}
