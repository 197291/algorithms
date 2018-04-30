function BinarySearch(target, arr) // arr have to be sort
{                                
    var i = 0, len = arr.length, k; 
                                 
    while (i < len)                
    {  k = Math.floor((i+len)/2);
       if (target <= arr[k]) len = k;
       else i = k+1;
    }
   
    if (arr[ i ] === target) return i;
    else return -1;
    // return index of target element
}