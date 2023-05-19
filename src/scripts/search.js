import Fuse from "fuse.js";
import { getAllUsers } from "./src/db/cockroachdb/select.js";

const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");
const resultContainer = document.getElementById("resultContainer");

const allUsers = await getAllUsers()
const fuse = new Fuse(allUsers);

if (searchBar) {
    searchBar.addEventListener("change", (event) => {
        console.log(event.target.value);
    });
}

console.log(1);
if (searchButton && searchBar && resultContainer) {
    console.log(2);
    searchButton.addEventListener("click", () => {
        console.log("AAAA")
        resultContainer.innerHTML = "";
        let searchResult = fuse.search(searchBar.value);
        searchResult.forEach((result) => {
            let userLink = document.createElement("a")
            userLink.setAttribute("href", result.item)
            userLink.setAttribute("class", "green-link")
            userLink.setAttribute("style", "margin-top: 1rem")
            userLink.innerText = result.item
            resultContainer.appendChild(userLink);
        });
    });
}