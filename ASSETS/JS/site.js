import menu from "./modules/menu/menu.js";

fetchData(
    "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json",
    "menu"
);

function fetchData(url, type) {
    fetch(url)
        .then((result) => {
            console.log(result);
            return result.json();
        })

        .then((data) => {
            //console.log(data);

            switch (type) {
                case "bus":
                    break;
                case "clock":
                    break;
                case "menu":
                    menu(data);
                    break;
                case "schedule":
                    break;
                default:
                    console.log("Ingen typer defineret");
            }
        });
}
