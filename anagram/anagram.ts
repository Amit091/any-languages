const checkAnagramII = (str1: string, str2: string) => {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount: { [key: string]: number } = {};

  // Count characters in the first string
  for (const char of cleanStr1) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  // Compare character counts with the second string
  for (const char of cleanStr2) {
    if (!charCount[char]) {
      return false;
    }
    charCount[char]--;
  }

  // Check if all character counts are zero
  for (const char in charCount) {
    if (charCount[char] !== 0) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log("listen", "silent", checkAnagramII("listen", "silent")); // true
console.log("hello", "world", checkAnagramII("hello", "world")); // false
console.log(
  "rail safety",
  "fairy tales",
  checkAnagramII("rail safety", "fairy tales")
); // true
