export default function menu(data) {
    const menuElement = document.getElementById("menu");
    let html = "";
    console.log(data);

    html += `
        <hgroup>
          <h1>DAGENS FROKOST</h1>
          <h2>DEN VARME UGE ${data.Week}</h2>
        </hgroup>
    `;

    data.Days.forEach((day) => {
        let dayShortName =
            day.DayName === "torsdag" ? "tors" : day.DayName.slice(0, 3);

        html += `
            <div>
              <hgroup>
                <h3>${dayShortName}</h3>
                <h3>${day.Dish.slice(0, -12)}</h3>
              </hgroup>
            </div>
        `;
    });

    menuElement.innerHTML = html;
}
