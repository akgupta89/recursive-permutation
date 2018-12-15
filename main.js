/**
 * @param {string} originalWord
 * @param {string[]} remainingWord
 * @param {string[]} permutatedWord
 * @returns {string[]}
 */
function findPermutations(originalWord, remainingWord, permutatedWord) {
	let permutationTotal = [];

	if (originalWord.length == permutatedWord.length) {
		return [ permutatedWord.join() ];
	}

	let cloneWord = remainingWord.slice(),
		charToAdd = cloneWord.shift();

	for (let index = 0; index <= permutatedWord.length; index++) {
		let permutation = permutatedWord.slice();
		permutation.splice(index, 0, charToAdd);

		let permutatedArray = findPermutations(originalWord, cloneWord, permutation);
		permutationTotal = permutationTotal.concat(permutatedArray);
	}

	return permutationTotal;
}

let word = "TomRiddle";

let totalPermutations = findPermutations(word, word.split(""), []);
console.log(totalPermutations);

let uniquePermutations = [...new Set(totalPermutations)];
console.log(uniquePermutations);
