export default function schedule(schedules) {
    console.log(schedules);

    let currentTime = new Date();

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

    console.log(filteredSchedules);

    let upcomingSchedules = filteredSchedules.filter(
        (schedule) => currentTime > new Date(schedule.StartDate)
    );

    upcomingSchedules = upcomingSchedules.sort(
        (a, b) => new Date(a.StartDate) - new Date(b.StartDate)
    );

    console.log(upcomingSchedules);
}
