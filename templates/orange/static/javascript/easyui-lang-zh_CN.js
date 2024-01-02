if ($.fn.pagination) {
    $.fn.pagination.defaults.beforePageText = '';
    $.fn.pagination.defaults.afterPageText = '{pages} page';
    $.fn.pagination.defaults.displayMsg = 'Show {from} to {to}, total {total}';
}
if ($.fn.datagrid) {
    $.fn.datagrid.defaults.loadMsg = 'Loading...';
}
if ($.fn.treegrid && $.fn.datagrid) {
    $.fn.treegrid.defaults.loadMsg = $.fn.datagrid.defaults.loadMsg;
}
if ($.messager) {
    $.messager.defaults.ok = 'Confirm';
    $.messager.defaults.cancel = 'Cancel';
}
if ($.fn.validatebox) {
    $.fn.validatebox.defaults.missingMessage = 'Input is required';
    $.fn.validatebox.defaults.rules.email.message = 'Please enter a valid email address';
    $.fn.validatebox.defaults.rules.url.message = 'Please enter a valid URL';
    $.fn.validatebox.defaults.rules.length.message = 'Input length must be between {0} and {1} ';
    $.fn.validatebox.defaults.rules.remote.message = 'Please correct this field';
}
if ($.fn.numberbox) {
    $.fn.numberbox.defaults.missingMessage = 'Input is required';
}
if ($.fn.combobox) {
    $.fn.combobox.defaults.missingMessage = 'Input is required';
}
if ($.fn.combotree) {
    $.fn.combotree.defaults.missingMessage = 'Input is required';
}
if ($.fn.combogrid) {
    $.fn.combogrid.defaults.missingMessage = 'Input is required';
}
if ($.fn.calendar) {
    $.fn.calendar.defaults.weeks = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    $.fn.calendar.defaults.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
}
if ($.fn.datebox) {
    $.fn.datebox.defaults.currentText = 'Today';
    $.fn.datebox.defaults.closeText = 'Close';
    $.fn.datebox.defaults.okText = 'Confirm';
    $.fn.datebox.defaults.missingMessage = 'Input is required';
    $.fn.datebox.defaults.formatter = function (date) {
        var y = date.getFullYear();
        var m = date.getMonth() + 1;
        var d = date.getDate();
        return y + '-' + (m < 10 ? ('0' + m) : m) + '-' + (d < 10 ? ('0' + d) : d);
    };
    $.fn.datebox.defaults.parser = function (s) {
        if (!s) return new Date();
        var ss = s.split('-');
        var y = parseInt(ss[0], 10);
        var m = parseInt(ss[1], 10);
        var d = parseInt(ss[2], 10);
        if (!isNaN(y) && !isNaN(m) && !isNaN(d)) {
            return new Date(y, m - 1, d);
        } else {
            return new Date();
        }
    };
}
if ($.fn.datetimebox && $.fn.datebox) {
    $.extend($.fn.datetimebox.defaults, {
        currentText: $.fn.datebox.defaults.currentText,
        closeText: $.fn.datebox.defaults.closeText,
        okText: $.fn.datebox.defaults.okText,
        missingMessage: $.fn.datebox.defaults.missingMessage
    });
}
