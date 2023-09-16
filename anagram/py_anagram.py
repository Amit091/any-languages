def are_anagrams(str1, str2):
    # Remove spaces and convert to lowercase to make the comparison case-insensitive
    str1 = str1.replace(" ", "").lower()
    str2 = str2.replace(" ", "").lower()

    # Check if the lengths of the strings are equal
    if len(str1) != len(str2):
        return False

    # Create dictionaries to count character occurrences in both strings
    char_count1 = {}
    char_count2 = {}

    # Count character occurrences in str1
    for char in str1:
        char_count1[char] = char_count1.get(char, 0) + 1

    # Count character occurrences in str2
    for char in str2:
        char_count2[char] = char_count2.get(char, 0) + 1

    # Compare the dictionaries to check if both strings have the same character counts
    return char_count1 == char_count2

print("listen", "silent", are_anagrams("listen", "silent"))
print("hello", "world", are_anagrams("hello", "world"))
print(
  "rail safety",
  "fairy tales",
  are_anagrams("rail safety", "fairy tales")
)
