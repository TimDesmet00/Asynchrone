const btn = document.getElementById("btnAutoDestruction");
const name = document.getElementById("name");
const pays = document.getElementById("pays");

btn.addEventListener("click", () => {
  const interedName = name.value;
  const interedPays = pays.value;

  const fetchName = (interedName, interedPays) =>
    fetch(`https://api.agify.io?name=${interedName}&country_id=${interedPays}`);

  fetchName(interedName, interedPays)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.age);
      console.log(json.count);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});
