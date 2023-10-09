const btn = document.getElementById("btnAutoDestruction");

btn.addEventListener("click", () => {
  const fetchName = (name) =>
    fetch("https://api.zippopotam.us/us/33162" + name);

  fetchName("keith")
    .then((response) => response.json())
    .then((json) => {
      console.log(json.age);
      console.log(json.count);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});
