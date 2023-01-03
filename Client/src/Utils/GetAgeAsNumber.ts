/**
 * A function to get the current age of a person, using their birth date and the current date
 * @returns The persons age in years
 */
export function GetAgeAsNumber(birthDate: Date) {
  const currentDate = new Date();

  // Calculate the difference
  let diff = (currentDate.getTime() - birthDate.getTime()) / 1000;
  diff /= 60 * 60 * 24;
  // Return the persons age, using Math.floor to return the persons actual age without rounding errors.
  return Math.abs(Math.floor(diff / 365.25)).toString();
}
