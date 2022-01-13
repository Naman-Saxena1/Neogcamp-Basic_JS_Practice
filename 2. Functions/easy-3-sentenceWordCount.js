// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

let input = require('readline-sync')

let sentence = input.question("Enter your sentence: ")

let wordCount = sentence.split(' ').length

console.log(`Word count of your sentence: ${wordCount}`)