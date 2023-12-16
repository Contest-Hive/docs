export function getEndTime(startTime, durationSeconds) {
  const startDate = new Date(startTime);
  const endDate =
    new Date(startDate.getTime() + durationSeconds * 1000)
      .toISOString()
      .slice(0, -5) + "Z";

  return endDate;
}