(function ($, root) {

    var dur, // 总时间
        frameId, // 定时器的标识
        startTime = 0,
        lastPer = 0;


    function renderAllTime(time) {
        dur = time;
        time = formatTime(time);
    }

    function formatTime(time) {
        time = Math.floor(time);
        var m = Math.floor(time / 60),
            s = time % 60;
        m = m < 10 ? "0" + m : m;
        s = s < 10 ? "0" + s : s;
        return m + ":" + s
    }

    function start(p) {
        lastPer = p === undefined ? lastPer : p;
        cancelAnimationFrame(frameId)
        startTime = new Date().getTime();

        function frame() {
            var curTime = new Date().getTime();
            var per = lastPer + (curTime - startTime) / (dur * 1000); // 时间的百分比

            if (per <= 1) {
                update(per)
            } else {
                // lastPer += per;
                cancelAnimationFrame(frameId)
            }
            frameId = requestAnimationFrame(frame);
        }
        frame()
    }

    function update(per) {
        var time = formatTime(per * dur);
        var perX = (per - 1) * 100 + "%";
        $(".cur-time").html(time);
        $(".pro-top").css({
            transform: "translateX(" + perX + ")"
        })
    }

    function stop() {
        var stopTime = new Date().getTime();
        lastPer = lastPer + (stopTime - startTime) / (dur * 1000); // 时间的百分比总和
        cancelAnimationFrame(frameId)
    }

    root.pro = {
        renderAllTime,
        start,
        update,
        stop
    }


})(window.Zepto, window.player || (window.player = {}));