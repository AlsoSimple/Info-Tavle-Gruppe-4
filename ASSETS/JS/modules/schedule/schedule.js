export default function schedule(schedules) {
    let currentTime = new Date("2024-10-07T09:00:00+02:00");

    console.log(currentTime);

    const filteredSchedules = schedules.filter(
        (schedule) =>
            schedule.Team === "ggr080124" ||
            schedule.Team === "h0gr100124" ||
            schedule.Team === "ump090124" ||
            schedule.Team === "h1we010124" ||
            schedule.Team === "h0gr010124f" ||
            schedule.Team === "h1we080124" ||
            schedule.Team === "h0mg010124f"
    );

    let upcomingSchedules = filteredSchedules.filter(
        (schedule) => currentTime < new Date(schedule.StartDate)
    );

    upcomingSchedules = upcomingSchedules.sort(
        (a, b) => new Date(a.StartDate) - new Date(b.StartDate)
    );

    upcomingSchedules.forEach((schedule) => {
        let startDate = new Date(schedule.StartDate);

        console.log(
            "starttime: " +
                getDayOfWeek(startDate) +
                " " +
                startDate.getHours() +
                ":" +
                startDate.getMinutes(),
            "currenttime: " +
                getDayOfWeek(currentTime) +
                " " +
                currentTime.getHours() +
                ":" +
                currentTime.getMinutes()
        );
    });
}

function getDayOfWeek(date) {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];
    return daysOfWeek[date.getDay()];
}
