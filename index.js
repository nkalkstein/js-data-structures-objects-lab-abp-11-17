driver = {
  name: 'Sam'
}

function updateDriverWithKeyAndValue(driver, 'address', '11 Broadway') {
  const newDriver = {...driver}

  newDriver[address] = '11 Broadway';

  return newDriver
}
