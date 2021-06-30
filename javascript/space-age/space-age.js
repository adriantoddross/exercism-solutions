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

  // To round the number to the 2nd digit after the decimal, we can multiply the number by 100 (or a bigger power of 10), call the rounding function and then divide it back: https://javascript.info/number#rounding
  return (
    Math.round((earthYears / orbitalPeriod[planet.toLowerCase()]) * 100) / 100
  );
};
