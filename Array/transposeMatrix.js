/**
 * Transposes a given matrix.
 * 
 * The transpose of a matrix is obtained by flipping the matrix over its diagonal,
 * effectively swapping the row and column indices of the matrix. For example, 
 * if the input matrix is of size m x n, the resulting transposed matrix will be of size n x m.
 * 
 * @example
 * // Input:
 * // [
 * //   [1, 2, 3],
 * //   [4, 5, 6]
 * // ]
 * // Output:
 * // [
 * //   [1, 4],
 * //   [2, 5],
 * //   [3, 6]
 * // ]
 */


const matrix = [[1,2,3],[4,5,6]];

function transpose(matrix) {
    const newMatrix = Array(matrix[0].length).fill(Array(matrix.length));
    for (let i=0; i<newMatrix.length; i++){
        for (let j=0; j<newMatrix[0].length; j++){
            newMatrix[i][j] = matrix[j][i];
        }
    }
    console.log(newMatrix);
}
transpose(matrix);