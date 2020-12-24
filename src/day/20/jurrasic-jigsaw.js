const testInput = 'Tile 2311:\n' +
    '..##.#..#.\n' +
    '##..#.....\n' +
    '#...##..#.\n' +
    '####.#...#\n' +
    '##.##.###.\n' +
    '##...#.###\n' +
    '.#.#.#..##\n' +
    '..#....#..\n' +
    '###...#.#.\n' +
    '..###..###\n' +
    '\n' +
    'Tile 1951:\n' +
    '#.##...##.\n' +
    '#.####...#\n' +
    '.....#..##\n' +
    '#...######\n' +
    '.##.#....#\n' +
    '.###.#####\n' +
    '###.##.##.\n' +
    '.###....#.\n' +
    '..#.#..#.#\n' +
    '#...##.#..\n' +
    '\n' +
    'Tile 1171:\n' +
    '####...##.\n' +
    '#..##.#..#\n' +
    '##.#..#.#.\n' +
    '.###.####.\n' +
    '..###.####\n' +
    '.##....##.\n' +
    '.#...####.\n' +
    '#.##.####.\n' +
    '####..#...\n' +
    '.....##...\n' +
    '\n' +
    'Tile 1427:\n' +
    '###.##.#..\n' +
    '.#..#.##..\n' +
    '.#.##.#..#\n' +
    '#.#.#.##.#\n' +
    '....#...##\n' +
    '...##..##.\n' +
    '...#.#####\n' +
    '.#.####.#.\n' +
    '..#..###.#\n' +
    '..##.#..#.\n' +
    '\n' +
    'Tile 1489:\n' +
    '##.#.#....\n' +
    '..##...#..\n' +
    '.##..##...\n' +
    '..#...#...\n' +
    '#####...#.\n' +
    '#..#.#.#.#\n' +
    '...#.#.#..\n' +
    '##.#...##.\n' +
    '..##.##.##\n' +
    '###.##.#..\n' +
    '\n' +
    'Tile 2473:\n' +
    '#....####.\n' +
    '#..#.##...\n' +
    '#.##..#...\n' +
    '######.#.#\n' +
    '.#...#.#.#\n' +
    '.#########\n' +
    '.###.#..#.\n' +
    '########.#\n' +
    '##...##.#.\n' +
    '..###.#.#.\n' +
    '\n' +
    'Tile 2971:\n' +
    '..#.#....#\n' +
    '#...###...\n' +
    '#.#.###...\n' +
    '##.##..#..\n' +
    '.#####..##\n' +
    '.#..####.#\n' +
    '#..#.#..#.\n' +
    '..####.###\n' +
    '..#.#.###.\n' +
    '...#.#.#.#\n' +
    '\n' +
    'Tile 2729:\n' +
    '...#.#.#.#\n' +
    '####.#....\n' +
    '..#.#.....\n' +
    '....#..#.#\n' +
    '.##..##.#.\n' +
    '.#.####...\n' +
    '####.#.#..\n' +
    '##.####...\n' +
    '##..#.##..\n' +
    '#.##...##.\n' +
    '\n' +
    'Tile 3079:\n' +
    '#.#.#####.\n' +
    '.#..######\n' +
    '..#.......\n' +
    '######....\n' +
    '####.#..#.\n' +
    '.#...#.##.\n' +
    '#.#####.##\n' +
    '..#.###...\n' +
    '..#.......\n' +
    '..#.###...';

const parseInput = (input) => {
    const tilesArr = input.split('\n\n');
    const tiles = {};
    tilesArr.forEach((tile, index) => {
        const tileData = tile.split('\n');
        const tileIdArr = tileData[0].split('Tile ');
        const tileId = tileIdArr[1].replace(':', '');
        const rightArr = [];
        const leftArr = [];
        const topArr = tileData[1].replace(/\./g, 0).replace(/#/g, 1).split('');
        const bottomArr = tileData[tileData.length - 1].replace(/\./g, 0).replace(/#/g, 1).split('');
        for (let i = 1; i < tileData.length; i++) {
            const n = tileData[i].length;
            rightArr.push(tileData[i][n-1] === '.' ? 0 : 1);
            leftArr.push(tileData[i][0] === '.' ? 0 : 1);
        }
        tiles[tileId] = [
            parseInt(topArr.join(''), 2),
            parseInt(topArr.reverse().join(''), 2),
            parseInt(bottomArr.join(''), 2),
            parseInt(bottomArr.reverse().join(''), 2),
            parseInt(leftArr.join(''), 2),
            parseInt(leftArr.reverse().join(''), 2),
            parseInt(rightArr.join(''), 2),
            parseInt(rightArr.reverse().join(''), 2)
        ];
    });

    return {tiles};
};

const separateCorners = (tiles) => {
    const nonCornerTiles = [];
    const tileIds = Object.keys(tiles);
    for (let i = 0; i < tileIds.length; i++) {
        let totalMatch = 0;
        const tileId1 = tileIds[i];
        const tile1Info = tiles[tileId1];

        for (let j = 0; j < tile1Info.length; j++) {
            if (tileIds.some(tileId2 => {
                const tileId2Info = tiles[tileId2];
                return tileId1 !== tileId2 && tileId2Info.includes(tile1Info[j]);
            })) {
                totalMatch++;
            }
        }
        if (totalMatch >= 3) {
            nonCornerTiles.push(tileIds[i]);
        }
    }

    return nonCornerTiles;
};

const part1Solution = (input => {
    const { tiles } = parseInput(input);
    separateCorners(tiles);

});

console.log(part1Solution(testInput));