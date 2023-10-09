const btn = document.getElementById("btnAutoDestruction");
const name = document.getElementById("name");
const pays = document.getElementById("pays");
const answer = document.getElementById("response");

let interedName;
let interedPays;

btn.addEventListener("click", () => {
  interedName = name.value;
  interedPays = pays.value;

  const fetchName = (interedName, interedPays) =>
    fetch(`https://api.agify.io?name=${interedName}&country_id=${interedPays}`);

  fetchName(interedName, interedPays)
    .then((response) => response.json())
    .then((json) => {
      console.log(json.age);
      console.log(json.count);
      insertAnswer(json);
      localStor(json);
    })
    .catch((error) => {
      console.log("There was an error!", error);
    });
});

const insertAnswer = (json) => {
  let ageAnswer = document.createElement("p");
  ageAnswer.textContent = `age moyen pour ${interedName}: ${json.age}`;

  let countAnswer = document.createElement("p");
  countAnswer.textContent = `nombre de personne: ${json.count}`;

  answer.appendChild(ageAnswer);
  answer.appendChild(countAnswer);
};

const localStor = (json) => {
  localStorage.setItem("age", json.age);
  localStorage.setItem("number", json.count);
};
