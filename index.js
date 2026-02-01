const list = document.querySelector("#brewery-list");
const details = document.querySelector("#details");
const searchInput = document.querySelector("#search-input");

let breweries = [];

/* EVENT 1 — submit (fetch) */
document.addEventListener("DOMContentLoaded", fetchBreweries);

/* EVENT 2 — input (filter) */
searchInput.addEventListener("input", handleFilter);

/* FETCH + ARRAY ITERATION */
function fetchBreweries() {
  fetch("https://api.openbrewerydb.org/breweries")
    .then(res => res.json())
    .then(data => {
      breweries = data.slice(0, 10); // ≥ 5 objects
      renderBreweries(breweries);
    });
}

function renderBreweries(breweryArray) {
  list.innerHTML = "";

  breweryArray.forEach(brewery => {   // ✅ ARRAY ITERATION
    const li = document.createElement("li");
    li.textContent = brewery.name;

    /* EVENT 3 — click (select) */
    li.addEventListener("click", () => showDetails(brewery));

    list.appendChild(li);
  });
}

function showDetails(brewery) {
  details.innerHTML = `
    <h3>${brewery.name}</h3>
    <p>City: ${brewery.city}</p>
    <p>Type: ${brewery.brewery_type}</p>
  `;
}

function handleFilter(e) {
  const term = e.target.value.toLowerCase();
  const filtered = breweries.filter(b =>
    b.city && b.city.toLowerCase().includes(term)
  );
  renderBreweries(filtered);
}
