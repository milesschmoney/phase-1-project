# Brewery Explorer (Phase 1 Project)

A single-page application (SPA) built with **HTML, CSS, and JavaScript** that fetches brewery data from a public API, renders results to the DOM, supports live filtering, and shows details on selection — all without page reloads.

## Public API
This project uses the Open Brewery DB API:
- https://api.openbrewerydb.org/breweries

## Features
- Fetches brewery data asynchronously using `fetch()` and parses JSON with `res.json()`
- Renders a list of breweries using **array iteration** (`forEach`)
- Filters breweries by city in real time using **array filtering** (`filter`) on `input` events
- Displays details (name, city, type) when a brewery is clicked
- Runs entirely on a **single HTML page** with dynamic DOM updates (no redirects / reloads)

## Phase 1 Requirements Checklist
- ✅ Uses a public API (no key required) returning JSON
- ✅ Uses at least **5 objects** (app stores and renders the first 10 with `slice(0, 10)`)
- ✅ Each object includes at least **3 attributes** (displayed: `name`, `city`, `brewery_type`)
- ✅ SPA: one page, DOM updates only
- ✅ **3 distinct event listener types**:
  - `DOMContentLoaded` → fetch and render breweries
  - `input` → filter breweries by city
  - `click` → show details for a selected brewery
- ✅ Uses array methods: `forEach`, `filter`, `slice`

## How to Run
1. Clone this repo
2. Open `index.html` in your browser  
   - Optional: use VS Code Live Server for convenience

## How to Use
- On page load, breweries are fetched and displayed in a list
- Type in the filter input to filter breweries by city
- Click a brewery name to view details
