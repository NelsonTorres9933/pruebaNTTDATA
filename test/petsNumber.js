module.exports = class petsNumber {
  sameName(array) {
    let counts = {};
    array.forEach((element) => {
      counts[element.name] = (counts[element.name] || 0) + 1;
    });
    return counts;
  }
};
