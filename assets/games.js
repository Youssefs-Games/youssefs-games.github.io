const reloadBtn = document.querySelector("#reload-button");
const reloadIcon = document.querySelectorAll(".reload-icon")[0];
const gamesContainer = document.querySelectorAll(".games-container")[0];
reloadBtn.addEventListener("mouseover", () => {
    reloadIcon.classList.add("spin-smooth");
    setTimeout(() => {
        reloadIcon.classList.remove("spin-smooth");
    }, 400);
});
reloadBtn.addEventListener("mouseleave", () => {
    reloadIcon.classList.add("spin-smooth", "reverse");
    setTimeout(() => {
        reloadIcon.classList.remove("spin-smooth", "reverse");
    }, 400);
});
const gameGenre = [
    "Platformer",
    "Labyrinth",
    "Maze",
    "Mystery",
    "Fighting",
    "Other"
];
/**
 * This variable is an example for adding games into the `games` list.
 */
const gameEntryExample = {
    /** The game's name. */
    name: "Game",
    /** The game's genre. */
    genre: gameGenre[5 /* 0-5 */],
    /** The game thumbnail. */
    thumbnail: "/games/[game number]/thumbnail.png" /* Use "TBA" instead if the thumbnail is still being created or has not officially dropped yet. */,
    /** The game URL. */
    url: "/games/[game number]/"
};
const games = [
    {
        name: "JavaScript Pong",
        genre: gameGenre[5],
        thumbnail: "TBA",
        url: "/games/1/"
    }
];
const noGames = false;
if (noGames) {
    console.error(new Error("No games found."));
} else {
    for (let i = 0; i < games.length; i++) {
        const game = games[i];
        const gameElement = document.createElement("a");
        gameElement.classList.add("game", "blocklive-link", "no-select");
        gameElement.href = game.url;
        gameElement.innerHTML = `${game.thumbnail !== "TBA" ? `<img src="${game.thumbnail}" alt="The ${game.name} thumbnail" class="game-thumbnail">` : "<div class=\"game-thumbnail-placeholder\"><p>Thumbnail is TBA/WIP</p></div>"}\n<strong>${game.name}</strong>\n<small class="link-no-style" style="font-weight: normal">Genre: ${game.genre}</small>`;
        gamesContainer.appendChild(gameElement);
    }
}
