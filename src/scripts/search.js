import Fuse from "fuse.js"
import { getAllUsers } from "../db/select.js";

const allUsers = await getAllUsers();
const allUsernames = allUsers.map((user) => user.username);

const searchButton = document.getElementById("searchButton");
const searchBar = document.getElementById("searchBar");
const fuse = new Fuse(allUsernames)

console.log(1)
if (searchButton && searchBar) {
    console.log(2)
    searchButton.addEventListener("click", () => {
        console.log(fuse.search(searchBar.value));
    });
}