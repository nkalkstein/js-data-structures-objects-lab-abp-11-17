driver = {
  speed: 'fast'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}

  newDriver[speed] = slow;

  return newDriver
}
