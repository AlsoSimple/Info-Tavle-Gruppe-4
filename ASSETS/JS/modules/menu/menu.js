export default function menu(data) {
    const menuElement = document.getElementById("menu");
    let html = "";

    data.Days.forEach((day) => {
        html += `
            <div>
              <hgroup>
                <h3>${day.DayName}</h3>
                <h3>${day.Dish}</h3>
              </hgroup>
            </div>
        `;
    });

    menuElement.innerHTML = html;
}
