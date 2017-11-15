driver = {
  name: 'Sam',
}

function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = {...driver};

  newDriver['address'] = '11 Broadway';

  return newDriver
}

functiondestructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver['address'] = '11 Broadway';
}