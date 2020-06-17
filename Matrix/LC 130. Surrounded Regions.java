class Solution {
    public void markNonBounedZeroes(char[][] board, int i, int j, int row, int col){
        board[i][j] = '1';
        if(i-1>=0 && board[i-1][j] == 'O'){
            markNonBounedZeroes(board, i-1, j,row,col);
        }
        if(i+1<row && board[i+1][j] == 'O'){
            markNonBounedZeroes(board, i+1, j,row,col);
        }
        if(j-1>=0 && board[i][j-1] == 'O'){
            markNonBounedZeroes(board, i, j-1,row,col);
        }
        if(j+1<col && board[i][j+1] == 'O'){
            markNonBounedZeroes(board, i, j+1,row,col);
        }
    }

    public void solve(char[][] board) {
        int row = board.length;
        int col = row > 0 ? board[0].length : 0;
        int i = 0;
        int j = 0;
        
        while(j<col){
            if(board[i][j] == 'O'){
                markNonBounedZeroes(board,i,j,row,col);
            }
            j++;
        }
        j = j-1;
        while(i<row){
            if(board[i][j] == 'O'){
                markNonBounedZeroes(board,i,j,row,col);        
            }
            i++;
        }
        i = i-1;
        while(j>=0){
            if(board[i][j] == 'O'){
                markNonBounedZeroes(board,i,j,row,col);        
            }
            j--;
        }
        j = 0;
        while(i>=0){
            if(board[i][j] == 'O'){
                markNonBounedZeroes(board,i,j,row,col);
            }
            i--;
        }
        
        for( i = 0; i<row; i+=1){
            for( j = 0; j<col; j+=1){
                if(board[i][j] == 'O'){
                    board[i][j] = 'X';
                }else if(board[i][j] == '1'){
                    board[i][j] = 'O';
                }
            }
        }
        
    }
    
}