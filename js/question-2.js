const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const gamesContainer = document.querySelector(".games");

async function callAPI() {
  try {
    const response = await (await fetch(url)).json();
    const result = response.results;

    gamesContainer.innerHTML = "";

    for (i = 0; i < result.length; i++) {
      if (i === 8) {
        break;
      }

      gamesContainer.innerHTML += `<ul class="card">
                                    <li class="title">Name: ${result[i].name}</li>
                                    <li>Rating: ${result[i].rating}</li>
                                    <li>Tags: ${result[i].tags.length}</li>
                                  </ul>`;
    }
  } catch (error) {
    console.log(error);
    gamesContainer.innerHTML = `<div class="error">${error}</div>`;
  }
}

callAPI();
