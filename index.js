driver = {
  name: 'Sam',
  address: '15 church'
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver}

  newDriver[address] = '11 Broadway';

  return newDriver
}
