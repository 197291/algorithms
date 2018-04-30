function SubstringSearch(sub, str)
{
    var i, j, n = sub.length,
        N = str.length - n + 1;

    for (i = 0; i < N; i++)
    {  j = 0;
       while (j < n && sub.charAt(j) === str.charAt(i+j)) j++;
       if (j === n) return i;
    }

    return -1;
}