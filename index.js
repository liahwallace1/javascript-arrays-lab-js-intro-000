const app = "I don't do much."

var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
};

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
};

function destructivelyRemoveLastKitten() {
  kittens.pop();
  return kittens;
};

function destructivelyRemoveFirstKitten() {
  kittens.shift();
  return kittens;
};

function appendKitten(name) {
  var appendKittens = [...kittens, name];
  return appendKittens;
};

function prependKitten(name) {
  var prependKittens = [name,...kittens];
  return prependKittens;
};

function removeLastKitten() {
  var lastKittens = kittens.slice(0, kittens.length-1);
  return lastKittens;
};

function removeFirstKitten() {
  var firstKittens = kittens.slice(1);
  return firstKittens;
};
