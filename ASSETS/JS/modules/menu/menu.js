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
