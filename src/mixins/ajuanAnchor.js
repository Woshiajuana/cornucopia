/**
 * 返回顶部和锚点链接模块
 * Created by Administrator on 2016/10/2.
 * zhigang.chen@owulia.com
 */
;(function (window,doc,_a,undefined) {
    function ajuanAnchor(){
        this.timer ='';
    }
    ajuanAnchor.prototype = {
        init: function () {
            return this;
        },
        //返回顶部
        returnTop: function (acceleration,time,callback) {
            var that = this,
                acceleration = acceleration || 0.1,
                time = time || 10,
                speed = 1 + acceleration;
            clearInterval(that.timer);
            that.timer = setInterval(function() {
                if (getScrollTop() <= 0){
                    clearInterval(that.timer);
                    if(callback) callback();
                    return;
                }
                //这行代码是关键，取得滚动条竖直距离，除以speed后再给滚动条设置竖直距离
                setScrollTop(Math.floor(getScrollTop() / speed));
            }, time);
            return this;
        },

        //返回锚点
        anchorPosition: function (idName,duration,dir) {
            if(typeof idName != 'object') { idName = document.getElementById(idName); }
            if(!idName) return;
            var z = this;
            z.el = idName;
            z.p = getPos(idName,dir);
            z.s = getScroll();
            z.clear = function(){window.clearInterval(z.timer);z.timer=null};
            z.clear();
            z.t=(new Date).getTime();
            z.step = function(){
                var t = (new Date).getTime();
                var p = (t - z.t) / duration;
                if (t >= duration + z.t) {
                    z.clear();
                    window.setTimeout(function(){z.scroll(z.p.y, z.p.x)},13);
                } else {
                    var st = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.y-z.s.t) + z.s.t;
                    var sl = ((-Math.cos(p*Math.PI)/2) + 0.5) * (z.p.x-z.s.l) + z.s.l;
                    z.scroll(st, sl);
                }
            };
            z.scroll = function (t, l){window.scrollTo(l, t)};
            z.timer = window.setInterval(function(){z.step();},13);
        }
        
    };

    function intval(v) {
        v = parseInt(v);
        return isNaN(v) ? 0 : v;
    }

    //获取元素信息
    function getPos(e,dir) {
        var l = 0;
        var t  = 0;
        var dir = dir || 0;
        var w = intval(e.style.width);
        var h = intval(e.style.height);
        var wb = e.offsetWidth;
        var hb = e.offsetHeight;
        while (e.offsetParent){
            l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
            t += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0);
            e = e.offsetParent;
        }
        l += e.offsetLeft + (e.currentStyle?intval(e.currentStyle.borderLeftWidth):0);
        t  += e.offsetTop  + (e.currentStyle?intval(e.currentStyle.borderTopWidth):0) - dir;
        return {x:l, y:t, w:w, h:h, wb:wb, hb:hb};
    }

    //获取滚动条信息
    function getScroll() {
        var t, l, w, h;
        if (document.documentElement && document.documentElement.scrollTop) {
            t = document.documentElement.scrollTop;
            l = document.documentElement.scrollLeft;
            w = document.documentElement.scrollWidth;
            h = document.documentElement.scrollHeight;
        } else if (document.body) {
            t = document.body.scrollTop;
            l = document.body.scrollLeft;
            w = document.body.scrollWidth;
            h = document.body.scrollHeight;
        }
        return { t: t, l: l, w: w, h: h };
    }

    //设置滚动条的竖直距离,实现效果的关键就是在很短的间隔时间内不断地修改滚动条的竖直距离,以实现滚动效果
    function setScrollTop(value) {
        doc.documentElement.scrollTop = value;
        doc.body.scrollTop = value;
    }

    //取得滚动条的竖直距离
    function getScrollTop() {
        return doc.documentElement.scrollTop || doc.body.scrollTop;
    }

    if(typeof define === 'function' && define.amd){
        define('ajuanAnchor',[],function(){return ajuanAnchor});
    }else{
        window.ajuanAnchor = function (options) {
            return new ajuanAnchor(options).init();
        };
    }

}(this,document,_a));