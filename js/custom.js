var i = 0;
var txt = "I'm a Software Engineer.";

$(document).ready(function () {
    getExeperience();
    setTimeout(() => {
        typeWriter();
    }, 500);
});

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typint-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

function getExeperience() {
    var starts = moment('2014-06-01 12:53:12');
    var ends = moment();

    var result = moment.preciseDiff(starts, ends, true);
    var strResult = result.years + ' Years ' + result.months + ' Months ';

    $("#experience").html(strResult);
}