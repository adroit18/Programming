/*According to the definition of h-index on Wikipedia: "A scientist has index h if h of his/her N papers have at least h citations each, and the other N − h papers have no more than h citations each."

Example:

Input: citations = [0,1,3,5,6]
Output: 3 */

class Solution {
    public int hIndex(int[] citations) {
        int len = citations.length;
        int i = 0;
        int j = len-1;
        if(len<=0){
            return 0;
        }
        while (i < j) { 
         int m = i + (j - i + 1) / 2; 
         if (citations[m] > len - m) { j = m - 1; } 
         else { i = m; } 
        } 

        if (citations[j] > len - j) { return len; } 
        if (citations[j] == len - j) { return len - j; } 
        else { return len - j - 1; } 
    }
}