var UserPay = {
    czData: [[30, "3000 PI Coin"], [50, "5000 PI Coin"], [100, "10000 PI Coin"], [200, "20000 PI Coin"], [500, "50000 PI Coin"], [365, "For Annual Reading"]],
    czPayPalData: [[20, "2000 PI Coin"], [50, "5000 PI Coin"], [100, "10000 PI Coin"], [365, "For Annual Reading"]],
    sendPay: function () {
        $("#payform").submit();
    }
}

$(function () {
    $("#ulPayPal li").click(function () {
        $("#ulPayPal li").removeClass("on");
        $(this).addClass("on");
        if ($(this).attr("vals") > 0) {
            $("#pValue").val($(this).attr("vals"));
            $("#showPayPalTotal").html($(this).attr("vals") + 'USD');
            for (var i = 0; i < UserPay.czData.length; i++) {
                if (UserPay.czPayPalData[i][0] == $(this).attr("vals")) {
                    $("#showPayPalRemark").html(UserPay.czPayPalData[i][1]);
                    break;
                }
            }
        }
    });
});