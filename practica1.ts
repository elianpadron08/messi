function duplicarExpandir(arr) {
  return arr.flatMap(num => [num, num * 2]);
}