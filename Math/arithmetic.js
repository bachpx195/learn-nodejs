module.exports = {
    arithmeticMean: (numbers) => {
        var total = 0;
        debugger;
        for (let number in numbers) {
            total = total + parseFloat(number);
            console.log(`total is : ${total}, number is : ${number}`)
        }
        return
        total / numbers.length;
    }
}