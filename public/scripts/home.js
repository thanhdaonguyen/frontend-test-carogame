document.querySelector("#myButton").addEventListener("click", () => {
  axios
    .get(`https://se-tiktactoe-1.onrender.com/leaderboard`, {
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
