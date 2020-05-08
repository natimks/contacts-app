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

export { formatDate, sortArrayByAttribute };
