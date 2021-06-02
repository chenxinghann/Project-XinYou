var box = document.getElementById('inputbox')
var drop = document.getElementById('drop')
window.onload = function() {
    drop.onmousedown = function (event) {
        //获取鼠标在盒子中的坐标，将来移动的时候减去保证鼠标在盒子的指定位置
        event = event || window.event;
        var pagex = event.pageX || scroll().left + event.clientX;
        var pagey = event.pageY || scroll().top + event.clientY;
        var x = pagex - box.offsetLeft;
        var y = pagey - box.offsetTop;
        document.onmousemove = function (event) {
            //2.把鼠标的坐标赋值给对话框。
            event = event || window.event;
            var xx = event.pageX || scroll().left + event.clientX;
            var yy = event.pageY || scroll().top + event.clientY;
            //二次操作鼠标位置  减去鼠标在盒子中的坐标
            xx = xx - x;
            yy = yy - y;
            //给box赋值
            box.style.left = xx + "px";
            box.style.top = yy + "px";
            //禁止文本选中（选中后取消）
            window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
        }
    }
    //事件解绑
    drop.onmouseup = function () {
        document.onmousemove = null;
    }
}