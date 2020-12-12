
const input = ['LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLL.LLLLLLLL.LLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLLLLLLL.LLL.LLLLL.LLLLLL.LLLLLLL.LLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL..LLLLL.LLLLLLLLLLLLLLLL',
    'LL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLL.LLLLLLLL..LLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLL.LL.LLLL.LLL.LLLLLL.LLLLL.LLLLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL..LLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLL.LL.LLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    '.......L...L.L...L......L..LLL..L.............L..L....L.LL.......LL......L..LL..L..L.L.LL..L.L....',
    'LLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL..LLLLLLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLL.LLL',
    'LLLLLLLLLL.LLLLLLLLL.LLLLLL..LLLLLL.LLLLLLL.LLL..LL.LLLLLLLLLL.LLLL.LLLLLLLLLLLLL.LL.LLLLLL.LLLLLL',
    'L.LLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLL..LLLLLLL.LLLLLLLL..LLLLLLLL.LLLL.LLL.LL.LLLLLL.L.LLLLL.L.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLL.L.LLLLLLL.L.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    '.....LL..L....LL.L....L....L.....L.L...L......LLL..L.L....L..LLL...L.L..L.L..LL...L..L.L.....L.L.L',
    'LLLLL.LLL..LLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLL.LL.L.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLLLL.LLLLLL.LLL.LL.LLLLLLLLLLLLLLLL',
    'LLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LL.LLLL.LLLLLL.LL.LLLLLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL',
    '.LLLL.LLLL.LLLLLLLLL.L.LLL..LLLLLLL.LLLLLLLLLLLLL.LLL.LLLLLLLLLLLLL.LLLL.LLL.LLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLLLLLLLLLLLL.LLL...LLLLLL.LL.LLLLLL.LLL.LLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    '.......L.L...L..L..L.LL.LL.L....L.L..LL..L.L.L.LL...LLL...LLLL..LLLL.......L...L....LL.....L.LL...',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLLLLLLL.LLLLLLLLL.LL.LLL.LLLLL.L.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLL.LLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLL.LLL.LLLLLLLLL.LLLLLLLL.LL.LLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL..LLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLL.LL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'L...LL.LL.L....LL..L.L..L..L.L.LL.L.....L..LL.......L..LLL..L...LL......LL..LL..L.L.LL..LL.L......',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLL.LLL.LLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL..LLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLL.L.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLL..LLLLLL',
    '.LLLL..L...L..LL...L...L.L.L..LLL.L....L..L..L.....L.L..............LL.L....L..L......LL..LL..L...',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LL.LLLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLL.LL..LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLL.LLL.LLLLLLLL.LLLL.L.LLLLLLLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLL.L.LLLLLLLLLLLLLLL.LLL.LLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLLL.LLLLL',
    'LLLLL.LLLL.LL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL..LLLLLLLLL.L.LLLLLLLLLLLLLLL.LLLLLLL',
    'L.LLL.LL.L.L...L.L....L.....L.....LL..........LL...L..L.L....L..L.L....L.L.LL.L.......LL.....L.L..',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLL.LLLLLLLL.LLLL.LLLLLL..LLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLLLLL.LLLL.LLLLL.L.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLL.LL.LLLLLL',
    'LLLL..LLLL.LLLLLLLLL.LLLLLL.LLL.LLL.LLLLLL..LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLL.LL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LL.LLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLL',
    '...L.......LL....L......L...L..L.L..L...L.L.....LLLL.L...L.....L...L.....LL...........L..L...L...L',
    'LLLLLLLLLLLL.LLLLLLL.LLLLLL.LLL.LLL.LLLLLLL.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLL',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.L.LLLLL.LLLLLLLLLLLLLL.LL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLL.LLLLLLLL',
    'LLLLL.LLLL.LLL.LLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLL',
    'LLLL...LLL.LLLLLLLLL.LLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLL.LLLL.L.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    '.LLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLL..LLLLLLL.LLLL.LLLLLLLLLLLLLLLLLLLLL.L.LLLLLL',
    '........L.L..LL.....L..L.L...L..LL.LL..L.L..L...........L.L...LLLL.L..L..........L..L....L..LL...L',
    'LLLLLLLLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLLL.LLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLL.L.LLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LL.LLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLL.LL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LL.LLLL.LLLL...LLLLLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLL.LLLL.L',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLL.LLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLL.LLLLLLLLLL.LL.LL.LLLLLLLLLL.LLLLLLLLLLLLLLLL',
    '.L.....LL......LLLLLL....L..LL...L.L..LLL.L..............L..LLL.L..L.L........LLLL....L..L..L.....',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LL.LLL.LLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLL.LL.LLLLLLL.LLLLLLL..LLLLLLLLLLLL.LLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLL.LLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.L.LLLL.LLLLLL.LLLLLLLLL.LLLL.L',
    'LLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLLLLL..LLLLLL.L.LLLLLLLLLLLLLLLL.LLLL.LL.LLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.L.LLLLLLLLLLLL..LLLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    '...L.LLLL....LL....LL.L...LLLL.LL......L....L.L.L.L........LLLL.LL....L.L..L.L....LL..L....L......',
    'LLLLL.LLLL.LLLLLLLL..LLLLLL.LLLLLLL.LLLLLLLL.LLLLLLLL.LLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLL.LLL.LLLLL.LLL.LLL.LLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLL.LLLLLLLLLLLL..LLLL.LL.LLLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLL.LLLLL.LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    '....LLL...LL.........L.....LL...L.L...LL......L...LL..L.L.....L..L....L.L.....L.L...L..LL...L.L...',
    'LLLLLLLL.L.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLL.LLLLL.LLLLLLLL.LLLL.LLLLLLLLLLLLL.LLLLLL.LL..LLLLL',
    'LLLLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LL.LLL.LLLLL.LLLLLLLLLLLLLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLLLLL.LL.LLLLLLLLL.LLLLLL',
    'LLLL..LLLL.L.LLLLL.L.L.LLLLLLLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLL.L.LLLLLLLL.L.LLLLLLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLL.L',
    'LLLLLLLLL.LLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.L.LLLLLLL.LLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL..LLLLL',
    '...LL...LL.L.....L.L.LL......L..L.L...L.L..L..L..........L...L.....L...L......L..LLL...L.L..LLL...',
    'LLLLLLLLLLLLLLLLLLLLLLLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLL.LLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL..LLL.LLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLL..LLLLLLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL..LLLLL',
    'LLLLLLLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLLLLLL.L.LLLLLLLLL.LLLLLLLLLLLLL.LLLLLLLLL.LLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLL..LLLLLLL.LLLLLLLLLL.LLLL.LLLLLLLLL.LLLLLLLL.LLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLLLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLL..LLLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LL.LLLLLLLLLL.LLLLLLLLL.LLLLLL',
    '....L....L.....LLLLL...L.L...LL...L.LL.........L.L.L..L..LL.....L..LLL..L.L......LL.L.LLLL..L..LLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLLLLLLLLLL.LLLLLL.LLLLLLLL.L.L.LLLLLLLLL.LLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLLLL.LLLLLLLLL.LL.LLLLLLLLLLLLL.LLLLLLLL..LLLLLL',
    'LLLLLLLLLLLLLLLLLLLL.LLLLLL.LLLLLLL.LLLLLLL.LLLLLLLLLLLLLLLLLL.LLLL.LLLLLL.LLLLLLLLLLLLLLLLLLLLLLL',
    'LLLLL.LL.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLL.LLLLL.LLLLLL..LLLLLLLLLLLLLLLL..LLLLLL',
    'LLLLL.L.LL.LLLL.LLLL.LLLLLL..LLLLLL.LLLLLLLLLLL.LLLLLLLLLLL.LLLLLLL.LLLLLL.LLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLL.LLLLLLLL..LLLLLLLL.LLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL',
    'LLLLL.LLLL.LLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLL.LLLLLLLLL.LLLLLLL..LLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLLLLLL.LLL.LLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL.LLLLLLLLLLLLLLLL.LLLLLL',
    'LLLLL.LLLL.LLLLLLLLLLLLLLLL.LLLLLLLLLLLLLLL.L.LLLLLLL.LL.LLLLLLL.LL.LLLLLL.LLLLLL.LLLLLLLLL..LLLLL',
    'LLL.L.LLLL.LLLLLLLLL.LLLLLL..LLLLLL.LLLLLLL.LLLLLLLLL.LLLLLLLL.LLLL.LLLLLLL.LLLLL.LLLLLLLLL.LLLLLL',
    'L.LLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLL.LLLLLLLLLLLLLLLLLLLLL.LLLL.LLLL..LLLLLLLLLLLLLLLLLL.LLL.LLLLLL'];


const part2Solution = (input) => {
    const a = parseInput(input);

    const {currSeatLayout} = stabilizeSeats(a);
    return totalNumberOfSeatsOccupied(currSeatLayout);
};


const parseInput = (input) => {
    const matrix = [];
    for (let i = 0; i < input.length; i++) {
        const rowItems = input[i].split('');
        matrix[i] = [...rowItems];
    }

    return matrix;
};




const stabilizeSeats = (a) => {
    let iteration = 0;
    let currSeatLayout = getCopyOfSeatAllocation(a);
    while (true) {
        const {newSeatLayoutAfterOccupying, numberOfSeatsUpdatedWhileOccupying} = occupySeats(currSeatLayout);
        currSeatLayout = getCopyOfSeatAllocation(newSeatLayoutAfterOccupying);
        if (numberOfSeatsUpdatedWhileOccupying > 0) {
            iteration++;
        } else {
            break;
        }
        const {newSeatLayoutAfterVacating, numberOfSeatsUpdatedWhileVacating} = vacateSeats(newSeatLayoutAfterOccupying);
        currSeatLayout = getCopyOfSeatAllocation(newSeatLayoutAfterVacating);
        if (numberOfSeatsUpdatedWhileVacating > 0) {
            iteration++;
        } else {
            break;
        }
    }

    return {iteration,currSeatLayout};
};

const occupySeats = (a) => {
    const seats = getCopyOfSeatAllocation(a);
    const n = a.length;
    const m = a[0].length;
    let numberOfSeatsChanged = 0;


    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] === 'L' && totalNumberOfOccupiedAdjacentSeats(a, i , j) === 0) {
                seats[i][j] = '#';
                numberOfSeatsChanged++;
            }
        }
    }

    return {newSeatLayoutAfterOccupying: seats, numberOfSeatsUpdatedWhileOccupying: numberOfSeatsChanged};
};

const vacateSeats = (a) => {
    const seats = getCopyOfSeatAllocation(a);
    const n = a.length;
    const m = a[0].length;
    let numberOfSeatsChanged = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (a[i][j] === '#' && totalNumberOfOccupiedAdjacentSeats(a, i , j) >= 5) {
                seats[i][j] = 'L';
                numberOfSeatsChanged++;
            }
        }
    }

    return {newSeatLayoutAfterVacating: seats, numberOfSeatsUpdatedWhileVacating: numberOfSeatsChanged};
};



const getCopyOfSeatAllocation = (a) => {
    const seats = [];
    const n = a.length;
    const m = a[0].length;
    for (let i = 0; i < n; i++) {
        seats[i] = [];
        for (let j = 0; j < m; j++) {
            seats[i][j] = a[i][j];
        }
    }

    return seats;
};


const totalNumberOfOccupiedAdjacentSeats = (a, i , j) => {
    let count = 0;
    if (leftOccupied(a, i, j)) count++;
    if (rightOccupied(a, i, j)) count++;
    if (upOccupied(a, i, j)) count++;
    if (downOccupied(a, i, j)) count++;
    if (diag1Occupied(a, i, j)) count++;
    if (diag2Occupied(a, i, j)) count++;
    if (diag3Occupied(a, i, j)) count++;
    if (diag4Occupied(a, i, j)) count++;

    return count;
};

const totalNumberOfSeatsOccupied = (a) => {
    let count = 0;
    let m = a.length;
    let n = a[0].length;
    for (let i = 0; i < m; i++)  {
        for (let j = 0; j < n; j++) {
            if (a[i][j] === '#') {
                count++;
            }
        }
    }

    return count;
};

const leftOccupied = (a, i, j) => {
    if (!a[i]) {
        return false;
    }

    for (let k = j-1; k >= 0; k--) {
        const curr = a[i][k];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
           return false;
        }
    }
    return false;
};

const rightOccupied = (a, i, j) => {
    if (!a[i]) {
        return false;
    }

    for (let k = j+1; k < a[0].length; k++) {
        const curr = a[i][k];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
    }
    return false;
};

const upOccupied = (a, i, j) => {
    if (!a[i-1]) {
        return false;
    }

    for (let k = i-1; k >= 0; k--) {
        const curr = a[k][j];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
    }
    return false;
};

const downOccupied = (a, i, j) => {
    if (!a[i+1]) {
        return false;
    }

    for (let k = i+1; k < a.length; k++) {
        const curr = a[k][j];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
    }
    return false;
};

const diag1Occupied = (a, i, j) => {
    let x = i-1;
    let y = j-1;
    if (!a[x]) {
        return false;
    }

    while (x >= 0 && y >= 0) {
        const curr = a[x][y];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
        x--;
        y--;
    }
    return false;
};

const diag2Occupied = (a, i, j) => {
    let x = i-1;
    let y = j+1;
    if (!a[x]) {
        return false;
    }

    while (x >= 0 && y < a[0].length) {
        const curr = a[x][y];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
        x--;
        y++;
    }
    return false;
};

const diag3Occupied = (a, i, j) => {
    let x = i+1;
    let y = j-1;
    if (!a[x]) {
        return false;
    }

    while (x < a.length && y >= 0) {
        const curr = a[x][y];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
        x++;
        y--;
    }
    return false;
};

const diag4Occupied = (a, i, j) => {
    let x = i+1;
    let y = j+1;
    if (!a[x]) {
        return false;
    }

    while (x < a.length && y < a[0].length) {
        const curr = a[x][y];
        if (curr === '#') {
            return true;
        } else if (curr === 'L') {
            return false;
        }
        x++;
        y++;
    }
    return false;
};

//console.log(totalNumberOfOccupiedAdjacentSeats(a, 1, 1));

//console.log(occupySeats(a, 3, 3));

const input1 = ['L.LL.LL.LL',
    'LLLLLLL.LL',
    'L.L.L..L..',
    'LLLL.LL.LL',
    'L.LL.LL.LL',
    'L.LLLLL.LL',
    '..L.L.....',
    'LLLLLLLLLL',
    'L.LLLLLL.L',
    'L.LLLLL.LL'];

const input2 = ['.............',
    '.L.L.#.#.#.#.',
    '.............'];

//console.log(totalNumberOfOccupiedAdjacentSeats(parseInput(input1), 3, 3));

console.log(part2Solution(input));