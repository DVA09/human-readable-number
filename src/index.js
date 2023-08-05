module.exports = function toReadable (number) {

    const digitOne = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const digitTwo = [ '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    
    if (number === 0) {
        return "zero";
    }

    if (number < 20) {
        return digitOne[number];
    }

    if (number < 100 && number % 10 === 0) {
        return digitTwo[number / 10];
    }

    if (number < 100 && number % 10 !== 0) {
        return digitTwo[Math.floor(number / 10)] + " " + digitOne[number % 10];
    }

    if (number > 99 && number % 100 === 0) {
        return digitOne[number / 100] + " hundred";
    }

    if (number > 99 && number % 100 < 20) {
        return (
         digitOne[Math.floor(number / 100)] + " hundred" + " " + digitOne[number % 100]);
    }

    if (number > 99 && number % 100 !== 0 && number % 10 === 0) {
        return (
         digitOne[Math.floor(number / 100)] + " hundred" + " " + digitTwo[(number % 100) / 10]);
    }

    if (number > 99 && number % 100 !== 0 && number % 10 !== 0) {
        return (
         digitOne[Math.floor(number / 100)] + " hundred" + " " + digitTwo[Math.floor((number % 100) / 10)] + " " + digitOne[number % 10]);
    }
}