// //  function declaration
function isPrime(num)
{
    if (num <= 1)
        return "not prime";

    for(i=2;i<num;i++){
        if (num%i == 0)
        return "not Prime";
    }
    return "prime"
}
console.log(isPrime(7))