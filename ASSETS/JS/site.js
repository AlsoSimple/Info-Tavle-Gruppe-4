import menu from "./modules/menu/menu.js";
import schedule from "./modules/schedule/schedule.js";
import { updateClock } from "./modules/clock/clock.js";

updateClock();

fetchData(
    "https://infoskaerm.techcollege.dk/umbraco/api/content/getcanteenmenu/?type=json",
    "menu"
);

setInterval(() => {
    fetchData(
        "https://iws.itcn.dk/techcollege/schedules?departmentcode=smed",
        "schedule"
    );
}, 10000);

function fetchData(url, type) {
    fetch(url)
        .then((result) => {
            //console.log(result);
            return result.json();
        })

        .then((data) => {
            //console.log(data);

            switch (type) {
                case "bus":
                    break;
                case "menu":
                    menu(data);
                    break;
                case "schedule":
                    console.log(data);

                    schedule(data.value);
                    break;
                default:
                    console.log("Ingen typer defineret");
            }
        });
}
