function formatDate(date) {
  if (!date) {
    return '';
  }
  return new Date(date).toLocaleDateString();
}

function sortArrayByAttribute(array, attribute, isAsc) {
  if (isAsc) {
    return array.sort((a, b) => (a[attribute] > b[attribute] ? 1 : -1));
  }
  return array.sort((a, b) => (a[attribute] < b[attribute] ? 1 : -1));
}

function filterArray(array, attribute, value) {
  return array.filter(
    (contact) => contact[attribute].toLowerCase().indexOf(value) >= 0
  );
}

export { filterArray, formatDate, sortArrayByAttribute };
