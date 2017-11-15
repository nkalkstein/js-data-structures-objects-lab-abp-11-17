driver = {
  name: 'Sam'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}

  newDriver[name] = 'Bob';

  return newDriver
}
