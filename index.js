const form = document.querySelector("#search-form");
const input = document.querySelector("#breed-input");
const results = document.querySelector("#results");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const breed = input.value.toLowerCase();
  results.innerHTML = "";

  fetch(`https://dog.ceo/api/breed/${breed}/images`)
    .then(response => response.json())
    .then(data => {
      data.message.slice(0, 5).forEach(imageUrl => {
        const img = document.createElement("img");
        img.src = imageUrl;
        img.alt = breed;
        results.appendChild(img);
      });
    })
    .catch(() => {
      results.textContent = "Breed not found.";
    });

  input.value = "";
});
