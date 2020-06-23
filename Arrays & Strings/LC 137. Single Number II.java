class Solution {
    public int singleNumber(int[] nums) {
        Map<Integer,Integer> obj = new HashMap<Integer,Integer>();
        for(int i = 0; i < nums.length; i++){
            if(obj.containsKey(nums[i])){
                obj.put(nums[i], obj.get(nums[i])+1); 
            }else{
                obj.put(nums[i], 1);
            }
        }
        for (Integer key: obj.keySet()){
            int value = obj.get(key);
            if(value < 3){
                return key;
            }
        }        
        return 0;
    }
}