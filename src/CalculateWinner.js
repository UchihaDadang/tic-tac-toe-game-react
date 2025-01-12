
function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], [1, 2, 3],          
        [4, 5, 6], [5, 6, 7],            
        [8, 9, 10], [9, 10, 11],         
        [12, 13, 14], [13, 14, 15],      
        [16, 17, 18], [17, 18, 19],      

        [0, 4, 8], [4, 8, 12], [8, 12, 16],   
        [1, 5, 9], [5, 9, 13], [9, 13, 17],   
        [2, 6, 10], [6, 10, 14], [10, 14, 18], 
        [3, 7, 11], [7, 11, 15], [11, 15, 19], 

        [0, 5, 10], [4, 9, 14], [8, 13, 18], 
        [1, 6, 11], [5, 10, 15], [9, 14, 19],
        [3, 6, 9], [7, 10, 13], [11, 14, 17]   
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && 
            squares[a] === squares[b] && 
            squares[a] === squares[c]) {
            return squares[a];
        }
    }
    const isDraw = squares.every(square => square !== null);
    if (isDraw) {
        return 'draw';
    }
    return null;
}

export { calculateWinner };