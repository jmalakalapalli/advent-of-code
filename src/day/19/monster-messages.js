const testInput = '0: 4 1 5\n' +
    '1: 2 3 | 3 2\n' +
    '2: 4 4 | 5 5\n' +
    '3: 4 5 | 5 4\n' +
    '4: "a"\n' +
    '5: "b"\n' +
    '\n' +
    'ababbb\n' +
    'bababa\n' +
    'abbbab\n' +
    'aaabbb\n' +
    'aaaabbb';

const parseInput = (input) => {
    const sections = input.split('\n\n');
    const rules = sections[0].split('\n');
    const testData = sections[1].split('\n');

    return {rules, testData};
};

const buildCombinations = (rules, dp, key) => {
    if (dp[key]) {
        return dp[key];
    }

    const rule
};

parseInput(testInput)