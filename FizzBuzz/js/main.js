$("#btnFB").on("click", function () {
    let fizzNum = parseInt($("#fbInput1").val());
    let buzzNum = parseInt($("#fbInput2").val());

    let fizzMod = 0;
    let buzzMod = 0;
    let output = new Array();

    for (let loop = 1; loop <= 100; loop++) {
        fizzMod = loop % fizzNum;
        buzzMod = loop % buzzNum;

        if (fizzMod == 0 && buzzMod == 0) {
            output.push(`${loop}: <span class = 'fizzbuzz'> FizzBuzz</span>`)
        }
        else if (fizzMod == 0) {
            output.push(`${loop}: <span class = 'fizz'> Fizz</span>`)
        }
        else if (buzzMod == 0) {
            output.push(`${loop}: <span class = 'buzz'> Buzz</span>`)
        }
        else {
            output.push(`${loop}: none`);
        }

    }
    $("#fbOut").html(output.join(`<span class = 'divide'> | </span>`));

});

$("#btnClear").on("click", function () {
    $("#fbInput1, #fbInput2").val("");
    $("#fbOut").text("");
})