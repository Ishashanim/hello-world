$(function() {
        var a = $('#op1').val();
        var b = $('#op2').val();

        var ans=$('#ans')

        ans.html(parseInt(a)+parseInt(b));
        console.log(ans.html);
}) ;