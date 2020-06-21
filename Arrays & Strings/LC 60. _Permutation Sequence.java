/*
as we know
4! = 24 = 4*(3!)
that means the first layer looks like
'1'[][][],'2'[][][],'3'[][][],'4'[][][]
then we can search which position number 9 will be at this layer:
position = 9/3! = 1.5
and we know the first number position will be [1.5] = 2, which represent '2'[][][],we know the first number is '2'
the remainder is 9%3! = 3
then we use this number enter next layer:
'1'[][],'3'[][],'4'[][]
position = 3/2! = 1.5
[1.5] = 2 which represent '3'[][], we know the second number is '3'
......
repeat until we get remainder 0, that means we need to take Maximum arrangement in this layer.
so reverse and append to result.
sorry my english is pool
image


*/ 
public class Solution {
    public String getPermutation(int n, int k) {
        int pos = 0;
        
        List<Integer> numbers = new ArrayList<>();
        
        int[] factorial = new int[n+1];

        StringBuilder sb = new StringBuilder();

        int sum = 1;
        factorial[0] = 1;
        for(int i=1; i<=n; i++){
            sum *= i;
            factorial[i] = sum;
        }
        System.out.println(Arrays.toString(factorial));  
        for(int i=1; i<=n; i++){
            numbers.add(i);
        }
        System.out.println(numbers.toString());  

        k--;

        for(int i = 1; i <= n; i++){
            int index = k/factorial[n-i];
            // System.out.println(index + " :(n-i): " + (n-i) +" ::k::" + k);  
            sb.append(String.valueOf(numbers.get(index)));
            numbers.remove(index);
            k-=index*factorial[n-i];
        }

        return String.valueOf(sb);
    }
}