const a = [
    [1,2,3,4],
    [5,6,7,8],
    [9,10,11,12],
    [13,14,15,16]
];

const rotateMatrix = (a, dir) => {
    const newMatrix = [];
    if (dir === 'horizontal') {
        for (let i = 0; i < a.length; i++) {
            newMatrix[i] = [];
            let k = 0;
            for (let j = a[i].length - 1; j >= 0; j--) {
                newMatrix[i][k] = a[i][j];
                k++;
            }
        }
    } else if (dir === 'vertical') {
        let k = a[0].length - 1;
        for (let i = 0; i < a.length; i++) {
            newMatrix[k] = [];
            for (let j = 0; j < a[i].length; j++) {
                newMatrix[k][j] = a[i][j];
            }
            k--;
        }
    } else if (dir === 'antiClockwise') {
        let l = 0;
        for (let i = 0; i < a.length; i++) {
            let k = a[0].length - 1;
            for (let j = 0; j < a[i].length; j++) {
                newMatrix[k] = newMatrix[k] ? newMatrix[k] : [];
                newMatrix[k][l] = a[i][j];
                k--;
            }
            l++;
        }
    } else if (dir === 'clockwise') {
        let l = a[0].length - 1;
        for (let i = 0; i < a.length; i++) {
            let k = 0;
            for (let j = 0; j < a[i].length; j++) {
                newMatrix[k] = newMatrix[k] ? newMatrix[k] : [];
                newMatrix[k][l] = a[i][j];
                k++;
            }
            l--;
        }
    }

    return newMatrix;
};



console.log(rotateMatrix(a, 'clockwise'));