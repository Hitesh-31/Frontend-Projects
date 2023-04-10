const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apiKey = "k3yC9x/f+fWP4cSwVkMSKQ==tQhcUWXEu35RBWLd";

const options = {
  method: "GET",
  headers: {
    "X-Api-Key": apiKey,
  },
};

const apiURl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {
  jokeEl.innerText = "Updating...";
  btnEl.disabled = true;
  btnEl.innerText = "Loading...";
  const response = await fetch(apiURl, options);
  const data = await response.json();

  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke";

  jokeEl.innerText = data[0].joke;
}

btnEl.addEventListener("click", getJoke);
