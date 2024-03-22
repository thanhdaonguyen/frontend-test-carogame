document.querySelector("#myButton").addEventListener("click", () => {
  let header = {
    withCredentials: true,
  };
  axios
    .post(
      `https://se-tiktactoe-1.onrender.com/login`,
      {
        username: "player001",
        password: "123",
      },
      { header }
    )
    .then((res) => {
      document.getElementById("content").textContent = res.data.message;
      console.log(res.data.message);
    })
    .catch((err) => {
      document.getElementById("content").textContent = err;
    });
});
