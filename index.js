driver = {
  name: 'Sam',
  address: 'wherever'
}

function updateDriverWithKeyAndValue(obj, key, value) {
  const newDriver = {...driver}

  newDriver[address] = '11 Broadway';

  return newDriver
}
