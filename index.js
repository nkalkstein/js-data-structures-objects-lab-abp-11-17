driver = {
  name: 'Sam',
  address: 'wherever'
}

function updateDriverWithKeyAndValue(Sam, address, 11 Broadway) {
  const newDriver = {...driver}

  newDriver[address] = '11 Broadway';

  return newDriver
}
