class Solution {
    public int islandPerimeter(int[][] grid) {
        int rows = grid.length;
        int peri = 0;
        if(rows >= 1){
            int cols = grid[0].length;
            if(cols >= 1){
                for(int i = 0; i<rows; i++){
                    for(int j = 0; j<cols; j++){
                       if(grid[i][j] == 1){
                           if( (j-1>=0) && grid[i][j-1] == 0 || (j-1 == -1) )
                               peri++;
                           if( (j+1<cols) && grid[i][j+1] == 0 || (j+1 == cols) )
                               peri++;
                           if( (i-1>=0) && grid[i-1][j] == 0 || (i-1 == -1) )
                               peri++;
                           if( (i+1<rows) && grid[i+1][j] == 0 || (i+1 == rows) )
                               peri++;
                       }
                    }
                }
            }
        }
        return peri;
    }
}
