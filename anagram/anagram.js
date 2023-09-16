const checkAnagram = (str1, str2) => {
  const cleanStr1 = str1.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const cleanStr2 = str2.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  if (cleanStr1.length !== cleanStr2.length) {
    return false;
  }

  const charCount = new Array(128).fill(0); // Assuming ASCII characters

  for (let i = 0; i < cleanStr1.length; i++) {
    const charCode1 = cleanStr1.charCodeAt(i);
    const charCode2 = cleanStr2.charCodeAt(i);
    charCount[charCode1]++;
    charCount[charCode2]--;
  }

  for (const count of charCount) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
};

// Test cases
console.log("listen", "silent", checkAnagram("listen", "silent")); // true
console.log("hello", "world", checkAnagram("hello", "world")); // false
console.log(
  "rail safety",
  "fairy tales",
  checkAnagram("rail safety", "fairy tales")
); // true
