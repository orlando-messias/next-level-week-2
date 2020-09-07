function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);  // convert to number each item of the new array
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
}

export default convertHourToMinutes;