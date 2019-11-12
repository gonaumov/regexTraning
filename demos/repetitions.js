/**
 * ? (question mark)	Makes the preceding item optional. Greedy, so the optional item is included in the match if possible.
 * Example: abc? matches abc or ab
 * + (plus)	Repeats the previous item once or more. Greedy, so as many items as possible will be matched before trying permutations with less matches of the preceding item, up
 * to the point where the preceding item is matched only once.
 * Example: ".+" matches "def" "ghi" in abc "def" "ghi" jkl
 * * (star)	Repeats the previous item zero or more times. Greedy, so as many items as possible will be matched before trying permutations with less matches of the preceding item,
 * up to the point where the preceding item is not matched at all.
 * Example: ".*" matches "def" "ghi" in abc "def" "ghi" jkl
 * {n,m} where n >= 0 and m >= n	Repeats the previous item between n and m times. Greedy, so repeating m times is tried before
 * reducing the repetition to n times.
 * Example: a{2,4} matches aaaa, aaa or aa
 **/
