function findMatching(drivers, string) {
  return drivers.filter(driver => driver.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(driver => driver.substring(0, string.length).toLowerCase() === string.toLowerCase())
}

function matchName(drivers, string) {
  return drivers.filter(driver => driver.name === string)
}