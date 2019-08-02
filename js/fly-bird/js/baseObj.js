var baseObj = {
    // 随机数
    remdomNum: function(min, max) {
        return parseInt(Math.random() * (max - min + 1) + min);
    },
    // 检测两个容器元素之间的碰撞
    rectangleCrashExamine: function(obj1, obj2) {
        var obj1Left = obj1.offsetLeft,
            obj1width = obj1.offsetLeft + obj1.offsetWidth,
            obj1Top = obj1.offsetTop,
            obj1Height = obj1.offsetTop + obj1.offsetHeight;

        var obj2Left = obj2.offsetLeft,
            obj2width = obj2.offsetLeft + obj2.offsetWidth,
            obj2Top = obj2.offsetTop,
            obj2Height = obj2.offsetTop + obj2.offsetHeight;
        
        if (!(obj1Left > obj2width || obj1width < obj2Left || obj1Top > obj2Height || obj1Height < obj2Top)) {
            return true;
        }
        return false
    }
}