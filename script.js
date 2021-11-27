function compute()
{   // input variables
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // calculated end year and amount
    var year = new Date().getFullYear() + parseInt(years);
    var amount = principal * years * rate /100;
    
    // validation
    if (principal <= 0 || principal == NaN){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
    } else {
        document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,<br\>at an interest rate of <mark>"+rate+"%</mark>.<br\>You will receive an amount of <mark>"+amount+"</mark>,<br\>in the year <mark>"+year+"</mark><br\>"
    }    
}

//display rate % with slider change
function updateRate()
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = rateval;
}
        
