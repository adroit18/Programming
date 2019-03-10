let a = [10,21,33,14,5];
let b = [4,21,0,21,40,100,134,125,12,14];

let sortedA = a;
sortedA.sort(function(a,b){return a-b});

let union = [...sortedA];
let inter = []; 

const binarySearch  = (arr,l,r,x)  =>  { 
  if (r >= l) {  
    let mid  = parseInt(((l+(r))/2),10);   
    if(arr[mid] == x){  
      return true; 
    } 
    if(arr[mid]>x){ 
       return binarySearch(arr,l,mid-1,x); 
    }
    if(arr[mid]<x){
       return binarySearch(arr,mid+1,r,x);  
    } 
  }
  return false;
       
}  

for(let i = 0;i < b.length;i++){
  isAlreadyPresent  = binarySearch(sortedA,0,sortedA.length-1,b[i]);
  if(!isAlreadyPresent){
    union.push(b[i]); 
  }
  else{
    inter.push(b[i])
  }

} 

console.log(union,inter);    