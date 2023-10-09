const btnCity = document.getElementById("city");
const returnCity = document.getElementById("returnCity");
const section = document.getElementById("first");
const btnTeam = document.getElementById("btnTeam");

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La requête a échoué");
    }
    return response.json();
  })
  .then((data) => {
    btnCity.addEventListener("click", () => {
      let newList = document.createElement("ul");

      let squad = document.createElement("li");
      squad.textContent = `squadName: ${data.squadName}`;

      let home = document.createElement("li");
      home.textContent = `homeTown: ${data.homeTown}`;

      let Formation = document.createElement("li");
      Formation.textContent = `formed: ${data.active}`;

      let base = document.createElement("li");
      base.textContent = `secretBase: ${data.secretBase}`;

      let inActivited = document.createElement("li");
      inActivited.textContent = `active: ${data.active}`;

      btnTeam.classList.remove("hidden");

      returnCity.appendChild(newList);
      newList.appendChild(squad);
      newList.appendChild(home);
      newList.appendChild(Formation);
      newList.appendChild(base);
      newList.appendChild(inActivited);
    });
  })
  .catch((error) => {
    console.error(error);
  });

fetch("data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("La requête a échoué");
    }
    return response.json();
  })
  .then((data) => {
    btnTeam.addEventListener("click", () => {
      const artTeam = document.getElementById("artTeam");
      console.log(data);
      let newList2 = document.createElement("ul");

      for (const member of data.members) {
        let herosName = document.createElement("li");
        herosName.textContent = `Nom: ${member.name}`;

        let herosAge = document.createElement("li");
        herosAge.textContent = `Âge: ${member.age}`;

        let identity = document.createElement("li");
        identity.textContent = `Identité secrète: ${member.secretIdentity}`;

        let powerUl = document.createElement("ul");
        let powersHeader = document.createElement("li");
        powersHeader.textContent = "Pouvoirs:";

        for (const power of member.powers) {
          let powerLi = document.createElement("li");
          powerLi.textContent = power;
          powerUl.appendChild(powerLi);
        }

        newList2.appendChild(herosName);
        newList2.appendChild(herosAge);
        newList2.appendChild(identity);
        newList2.appendChild(powersHeader);
        newList2.appendChild(powerUl);
      }

      artTeam.appendChild(newList2);
    });
  })
  .catch((error) => {
    console.error(error);
  });
