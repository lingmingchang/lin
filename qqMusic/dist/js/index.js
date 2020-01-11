var root = window.player;
var dataList = null; // 数据存放
var len = 0; // 数据总数
var audio = root.audioManager; // 创建audio 的对象
var curIndex = null; // 切换歌曲的下标
var timer = null; // 定时器
var deg = 0; // 旋转角度
var speed = 0.5; // 转圈的速度

/**
 * 获取数据
 * @param {数据地址} url 
 */
function getData(url) {
    $.ajax({
        type: "GET",
        url: url,
        success: function (data) {
            dataList = data;
            len = data.length;
            curIndex = new root.control(len);
            audio.getAudio(data[0].audio)
            root.render(data[0]);
            root.pro.renderAllTime(data[0].duration)
            bindEvent()
            bindTouch()
        },
        error: function (err) {
            console.log(err);
        }
    })
}

/**
 * 按钮事件集合
 */
function bindEvent() {

    $("body").on("play:change", function (e, index) {
        audio.getAudio(dataList[index].audio)
        root.pro.start(0)
        if (audio.status === "play") {
            audio.play();
            rotated();
        } else {
            audio.pause()
            root.pro.stop()
        }
        root.render(dataList[index]);
        reset()
        root.pro.renderAllTime(dataList[index].duration)

    })

    $(".prev").on("click", function () {
        var i = curIndex.prev();
        $("body").trigger("play:change", i);
    })

    $(".next").on("click", function () {
        var i = curIndex.next();
        $("body").trigger("play:change", i);
    })

    $(".play").on("click", function () {
        if (audio.status === "play") {
            audio.pause()
            root.pro.stop()
            cancelAnimationFrame(timer);
        } else {
            root.pro.start()
            audio.play();
            rotated()
        }
        $(".play").toggleClass("playing");
    })

}

/**
 * 旋转控制
 */
function rotated() {
    deg += speed;
    $(".img-box").css({
        "transform": "rotateZ(" + deg + "deg)",
    })
    timer = requestAnimationFrame(rotated)
}

/**
 * 重置角度
 */
function reset() {
    cancelAnimationFrame(timer);
    deg = 0;
    $(".img-box").css({
        "transform": "rotateZ(" + deg + "deg)",
    })
}

getData("../mock/data.json");

// 信息 + 图片渲染到页面 render
// 点击按钮
// 音频播放与暂停、切哥
// 图片旋转
// 列表切歌

// 进度条运动关于拖拽

function bindTouch() {
    var $spot = $(".slider-point"),
        offset = $(".pro-bottom").offset(),
        left = offset.left,
        width = offset.width;

    $spot.on("touchstart", function () {

        root.pro.stop()
    }).on("touchmove", function (e) {

        var x = e.changedTouches[0].clientX,
            per = (x - left) / width;

        if (0 < per && per < 1) {
            root.pro.update(per);
        }

    }).on("touchend", function (e) {
        var x = e.changedTouches[0].clientX,
            per = (x - left) / width;

        if (0 < per && per < 1) {
            var curTime = per * dataList[curIndex.index].duration;
            audio.playTo(curTime)
            audio.play();
            root.pro.start(per)
            $(".play").addClass("playing");
        }

    })
}