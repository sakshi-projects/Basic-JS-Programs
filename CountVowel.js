const vowel = function(str) 
{
    let cnt = 0;
    for (i=0;i<str.length;i++)
    {
        let ch = str[i].toLowerCase();
        if ( ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u")
        {
            cnt++;
        }
    }
    return cnt;
}
console.log(vowel("Hello"))