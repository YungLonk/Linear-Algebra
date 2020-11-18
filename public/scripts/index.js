/* ----------------------------- Text-based functions ----------------------------- */
function opening() {
    const line1 = "Welcome to the Linear Algebra Calculator!";
    const line2 = "When entering your matrix, enter each number";
    const line3 = "separated by a space, and separate each row by";
    const line4 = "a comma and a space (x x x, x x x, x x x, ...)";
    // Update elements on page to print these at top of page
}

function menu() {
    const line1 = "Here are your choices: ";
    const choice1 = "1. Add a matrix by a constant";
    const choice2 = "2. Add a matrix by another matrix";
    const choice3 = "3. Subtract a matrix by a constant";
    const choice4 = "4. Subtract a matrix by another matrix";
    const choice5 = "5. Multiply a matrix by a constant";
    const choice6 = "6. Multiply a matrix by another matrix";
    // Update elements on page to print these below centered opening. Centered and smaller than opening()
}

function kAns(matrix, operator, k, ans) {
    const readableAns = `Your matrix ${matrix}/n${operator} your constant ${k}/n=/nMatrix B ${ans}`;
    // Update elements on page to print beneath text box receiving input
}

function bAns(A, operator, B, ans) {
    const readableAns = `Matrix A ${A}/n${operator} Matrix B ${B}/n=/nMatrix C ${ans}`;
    // Update elements on page to print beneath text box receiving input
}

/* ------------------------------ Supporting functions ------------------------------ */
function isSameSize(A, B) {
    if(A.length == B.length) {
        return true;}
    else return false;
}

function multiplyRowAndColumn(row, column) {
    if(row.length == column.length) {
        let ans = 0;
        for(let i = 0; i < row.length; i++) {
            ans += (row[i] * column[i]);}
        return ans;}
    else return "";}

function parseMatrix(matrix) {
    let newMatrix;
    let rows = matrix.split(", ");
    for(const row = 0; row < rows.length; row++) {
        newMatrix = row.split(" ");
    }
    return newMatrix;
}

/* ------------------------------- Mathematical Functions ------------------------------- */
function addByK(matrix, k) {
    let ans = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            ans[i][j] = matrix[i][j] + k;
        }
    }
    return ans
}

function addByB(A, B) {
    if(A.length == B.length) {
        let ans = [];
        for(let i = 0; i < A.length; i++) {
            for(let j = 0; j < A[i].length; j++) {
                ans[i][j] = A[i][j] + B[i][j]}}
        console.log(ans);
        return ans;}
    else return [];}

function subtractByK(matrix, k) {
    let ans = [];
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[i].length; j++) {
            ans[i][j] = matrix[i][j] - k;}}
    return ans;}

const mat = parseMatrix("1 2 3, 4 5 6, 7 8 9");
console.log(mat);