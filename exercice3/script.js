const HTML = document.getElementById("injectHTML");
const btn = document.getElementById("newcitation");

async function fetchSpirit() {
  try {
    const response = await fetch("https://thatsthespir.it/api");

    if (!response.ok) {
      throw new Error("La requête a échoué");
    }

    const spirit = await response.json();

    inject(spirit);
    console.log(spirit);
  } catch (error) {
    console.error(error);
  }
}

fetchSpirit();

const inject = (spirit) => {
  let title = document.createElement("h2");
  title.textContent = spirit.author;

  let photo = document.createElement("img");
  photo.src = spirit.photo;

  let citation = document.createElement("p");
  citation.innerHTML = spirit.quote;

  let link = document.createElement("a");
  link.textContent = "Source";
  link.setAttribute("href", spirit.permalink);

  console.log(link.href);

  HTML.appendChild(title);
  HTML.appendChild(photo);
  HTML.appendChild(citation);
  HTML.appendChild(link);
};

btn.addEventListener("click", () => {
  console.log("click");
  location.reload();
});
