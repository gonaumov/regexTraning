/**
 * Positive lookahead
 * (?=regex)
 * Matches at a position where the pattern inside the lookahead can be matched. Matches only the position. It does not consume any
 * characters or expand the match. In a pattern like one(?=two)three, both two and three have to match at the position where the match
 * of one ends.
 * Example:
 * t(?=s) matches the second t in streets.
 * Negative lookahead
 * (?!regex)
 * Similar to positive lookahead, except that negative lookahead only succeeds if the regex inside the lookahead fails to match.
 * t(?!s) matches the first t in streets.
 * Positive lookbehind	(?<=regex)	Matches at a position if the pattern inside the lookbehind can be matched ending at that position.
 * (?<=s)t matches the first t in streets.
 * Negative lookbehind	(?<!regex)	Matches at a position if the pattern inside the lookbehind cannot be matched ending at that position.
 * (?<!s)t matches the second t in streets.
 **/
