class Solution {
    public int[] prisonAfterNDays(int[] cells, int N) {
        int numberofCells = cells.length;
        if(numberofCells == 0) return cells;
        if(numberofCells == 1) {
            int[] out = {0};
            return out;
        }
        if(numberofCells == 2){
            int[] out = {0,0};
            return out;
        }
        int[] out = cells.clone();  
        Map<Integer,int[]> patterns = new HashMap<Integer,int[]>();
        
        for(int i = 1; i<=14; i+=1){
            int[] prev = out.clone();  
            for(int j = 1; j<= out.length-2; j+=1){
                if(prev[j-1] == prev[j+1]){
                    out[j] = 1;
                }else{
                    out[j] = 0;
                }   
            }
            if(i==1){
                out[0] = 0;
                out[out.length - 1] = 0;
            }
            patterns.put(i,out.clone());
        }
        return (N % 14) == 0 ? patterns.get(14) : patterns.get((N % 14)) ; 
    }
}
