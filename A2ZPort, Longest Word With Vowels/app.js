function longestWord(sentence) {
  const words = sentence.match(/[a-z]+/gi);
  let longest = "";
  let maxVowels = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    if (word.length > longest.length) {
      longest = word;
      maxVowels = countVowels(word);
    } else if (word.length === longest.length) {
      const numVowels = countVowels(word);
      if (numVowels > maxVowels) {
        longest = word;
        maxVowels = numVowels;
      }
    }
  }
  return longest;
}

function countVowels(word) {
  const vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }
  return count;
}

console.log(
  longestWord(
    "Smart people learn from everything and everyone, average people from their experience, stupid people already have all the answers"
  )
);
console.log(longestWord("The quick brown fox jumps over the lazy dog"));
console.log(longestWord("A man a plan a canal Panama"));
console.log(
  longestWord(
    "Napoleon Bonaparte later known by his regnal name Napoleon I, was a French military commander and political leader  "
  )
);
