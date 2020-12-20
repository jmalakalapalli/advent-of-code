const extractBitsFromPos = (n, i) => {
    return BigInt(n) & BigInt([[BigInt(1) << BigInt(i)] - BigInt(1) ])
};

console.log(extractBitsFromPos(BigInt(171), BigInt(0)));