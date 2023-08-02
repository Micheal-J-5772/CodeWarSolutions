function toCamelCase(str) {
  var words = str.replace(/[-_]/g, ' ').split(' ');
  var camelCase = words.map(function(word, index) {
    if (index === 0) {
      return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }).join('');

  return camelCase;
}