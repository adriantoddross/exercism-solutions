/*
Declare const variable for Earth year in seconds (31557600 seconds)
Declare const object w/ planet orbital periods
  Object properties per planet are: Orbital period
    Mercury: orbital period 0.2408467 Earth years
    Venus: orbital period 0.61519726 Earth years
    Earth: orbital period 1.0 Earth years, 365.25 Earth days, or 31557600 seconds
    Mars: orbital period 1.8808158 Earth years
    Jupiter: orbital period 11.862615 Earth years
    Saturn: orbital period 29.447498 Earth years
    Uranus: orbital period 84.016846 Earth years
    Neptune: orbital period 164.79132 Earth years
Declare const for age in Earth years
If Earth, return age in Earth years... else return age in Earth years * orbital period
Alternatively, return age * orbitalPeriod[planet]
*/

export const age = (planet, seconds) => {
  const EARTH_YEAR_IN_SECONDS = 31_557_600;
  const orbitalPeriod = {
    mercury: 0.2408467,
    venus: 0.61519726,
    earth: 1,
    mars: 1.8808158,
    jupiter: 11.862615,
    saturn: 29.447498,
    uranus: 84.016846,
    neptune: 164.79132,
  };

  const earthYears = seconds / EARTH_YEAR_IN_SECONDS;

  console.log({
    secondsAlive: seconds,
    earthYears,
    planet,
    orbitalPeriod: orbitalPeriod[planet.toLowerCase()],
  });

  // To round the number to the 2nd digit after the decimal, we can multiply the number by 100 (or a bigger power of 10), call the rounding function and then divide it back: https://javascript.info/number#rounding
  return (
    Math.round(earthYears / orbitalPeriod[planet.toLowerCase()] * 100) / 100
  );
};
