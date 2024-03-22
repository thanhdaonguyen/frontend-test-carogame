

document.querySelector("#myButton").addEventListener("click", () => {
  axios
    .get(`${BACK_END_URL}/leaderboard`, {
      withCredentials: true,
    })
    .then((res) => {
      document.getElementById("content").textContent = res.data;
    })
    .catch((err) => {
      document.getElementById("content").textContent = err;
      console.log(err);
    });
});
