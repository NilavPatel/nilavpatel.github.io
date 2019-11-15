$(document).ready(function () {
    getExeperience();
    $(".name-header").show();
});

function getExeperience() {
    var starts = moment('2014-06-01 12:53:12');
    var ends = moment();

    var result = moment.preciseDiff(starts, ends, true);
    var strResult = result.years + ' Years ' + result.months + ' Months ';

    $("#experience").html(strResult);
}
