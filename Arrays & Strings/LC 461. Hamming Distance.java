class Solution {
    public int hammingDistance(int x, int y) {
        String a = Integer.toBinaryString(x);
        String b = Integer.toBinaryString(y);
        int i = a.length() - 1;
        int j = b.length() - 1;
        int count = 0;
        
        while(i>=0 && j >=0){
            if(a.charAt(i) != b.charAt(j)){
                count++;
            }
            i--;j--;
        }
        while(i>=0){
            if(a.charAt(i) == '1'){
                count++;
            }
            i--;
        }
        while(j>=0){
            if(b.charAt(j) == '1'){
                count++;
            }
            j--;
        }
        return count;
    }
    
}