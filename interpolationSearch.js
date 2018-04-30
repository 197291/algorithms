function InterpolationSearch(target, arr)
{                                         
    var mid, low = 0, high = arr.length-1;

    while (arr[low] < target && arr[high] > target)
    {  mid = low + Math.floor( ((target-arr[low])*(high-low))/(arr[high]-arr[low]) );
       if (arr[mid] < target) low = mid+1;
       else if (arr[mid] > target) high = mid-1;
       else return mid;
    }

    if (arr[low] === target) return low;
    else if (arr[high] === target) return high;
    else return -1;
}