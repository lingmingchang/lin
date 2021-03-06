(function ($, root) {

    function Control(len) {
        this.index = 0;
        this.len = len;
    }
    Control.prototype = {
        prev: function () {
            return this.getIndex(-1);
        },
        next: function () {
            return this.getIndex(1);
        },
        getIndex: function (val) {
            // 当前索引值
            var index = this.index;
            // 数据总长度
            var len = this.len;
            var curIndex = (index + val + len) % len;
            this.index = curIndex;
            return curIndex;
        }
    }

    root.control = Control;

})(window.Zepto, window.player || (window.player = {}));