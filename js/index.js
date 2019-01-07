/**
 * Created by lenovo on 2019/1/4.
 */
window.onload=function () {

  //获取头部dom
    var lisNodes = document.querySelectorAll('.list li');
    var jiantou = document.querySelector('.jiantou');
    var lisDwon = document.querySelectorAll('.list li .down');
    var nowIndex=0;

    //获取内容区元素
  var contentNode=document.querySelector('.content');
  var ulNode=document.querySelector('.content .contentmain')

  //完成头部js
  headerHandel();
  function headerHandel() {
    //初始化小箭头来到第一dwon下面
    jiantou.style.left = lisNodes[0].getBoundingClientRect().left + lisNodes[0].offsetWidth / 2 - jiantou.offsetWidth / 2 + 'px'

    //初始化时第一个dwon元素为100%
    lisDwon[0].style.width = '100%';
    for (var i = 0; i < lisNodes.length; i++) {
      lisNodes[i].index = i;
      lisNodes[i].onclick = function () {
        for (var i = 0; i < lisNodes.length; i++) {
          lisNodes[i].index = i;
          lisNodes[i].onclick = function () {
            nowIndex = this.index
            move(nowIndex)
          }

        }
      }
    }
  }
  //移动
  function move(nowIndex) {

        //清除所有dwon的宽度 将宽度改为0
        for (var j = 0; j < lisDwon.length; j++) {
          lisDwon[j].style.width = '';

        }
        //将当前元素宽度改为100%
        lisDwon[nowIndex].style.width = '100%';
        //改变小箭头的位置
        jiantou.style.left = lisNodes[nowIndex].getBoundingClientRect().left + lisNodes[nowIndex].offsetWidth / 2 - jiantou.offsetWidth / 2 + 'px'
        //改变内容区ul的TOP值
        ulNode.style.top = -nowIndex * contentNode.offsetHeight + 'px';


  }
  //滚轮事件
  scllo();
  function scllo() {
    //滚轮事件
    document.onmousewheel = wheel;
    if (document.addEventListener){
      document.addEventListener('DOMMouseScroll', wheel);
    }

    function wheel(event) {
      event = event || window.event;

      var flag = '';
      if (event.wheelDelta) {
        //ie/chrome
        if (event.wheelDelta > 0) {
          flag = 'up';
        } else {
          flag = 'down'
        }
      } else if (event.detail) {
        //firefox
        if (event.detail < 0) {
          flag = 'up';
        } else {
          flag = 'down'
        }
      }

      switch (flag) {
        case 'up' :


          if(nowIndex>0){
            nowIndex--;
            move(nowIndex)
          }


          break;
        case 'down' :


          if(nowIndex<4){
            nowIndex++
            move(nowIndex)
          }


          break;
      }

      //禁止默认行为
      // event.e
    }
  }

  //第一屏
  homeHandle();
  function homeHandle() {


  var circlePoint=document.querySelector('.circle-point');
  var circlePointLis=document.querySelectorAll('.circle-point li');
  var homeMianLis=document.querySelectorAll('.homemian li');
  var lastIndex=0;
  var nowIndex=0;
  var lasetTime=0;


  for (var i = 0; i <circlePointLis .length; i++) {
    circlePointLis[i].index=i;
    circlePointLis[i].onclick=function () {
      nowIndex=this.index;
      var nowTime=Date.now();
      if(nowTime-lasetTime<=1000) return

      for (var j = 0; j < homeMianLis.length; j++) {
        homeMianLis[j].className='title';
      }
      if (lastIndex<nowIndex){
        homeMianLis[lastIndex].className='title left-hide';
        homeMianLis[nowIndex].className='title right-Show';
      }else if(lastIndex>nowIndex){
        homeMianLis[lastIndex].className='title right-hide';
        homeMianLis[nowIndex].className='title left-Show';
      }

      //小圆点

      this.className='active';
      circlePointLis[lastIndex].className='';

      lasetTime=nowTime
      lastIndex=nowIndex;


    }
  }
  }

  //第五屏
  var teamLists=document.querySelector('.team .team-lists');
  var teamLis =document.querySelectorAll('.team .team-lists li');
  var width =teamLis[0].offsetWidth;
  var height =teamLis[0].offsetHeight;
  var canvas=null;


  for (var i = 0; i < teamLis.length; i++) {
    teamLis[i].index=i;
    teamLis[i].onmouseenter=function () {
      for (var j = 0; j <teamLis .length; j++) {
        teamLis[j].style.opacity='0.5';
      }
      this.style.opacity='1';
      if(!canvas){
        canvas=document.createElement('canvas');
        canvas.width=width;
        canvas.height=height;
        canvas.className='canvas';
        bubble(canvas);
        teamLists.appendChild(canvas);
      }
      canvas.style.left = this.index * width + 'px';
    }
  }
  teamLists.onmouseleave=function () {
    for (var j = 0; j <teamLis.length; j++) {
      teamLis[j].style.opacity='1';
    }
    canvas.remove();
    canvas=null;
  };
  function bubble(canvas) {

    if (canvas.getContext) {
      var ctx = canvas.getContext('2d');
      var width = canvas.width;
      var height = canvas.height;

      var arr = [];
      //生成圆
      createCircleTimer = setInterval(function () {
        var r = Math.round(Math.random() * 255);
        var g = Math.round(Math.random() * 255);
        var b = Math.round(Math.random() * 255);

        var c_r = Math.round(Math.random() * 8 + 2);

        var s = Math.round(Math.random() * 50 + 20);

        var y = height + c_r;
        var x = Math.round(Math.random() * width);

        arr.push({
          r: r,
          g: g,
          b: b,
          c_r: c_r,
          x: x,
          y: y,
          deg: 0,
          s: s
        })

      }, 50);
      //画圆
      paintingTimer = setInterval(function () {
        //清除上一次的画布
        ctx.clearRect(0, 0, width, height);

        for (var i = 0; i < arr.length; i++) {
          var item = arr[i];
          //角度递增
          item.deg += 6;
          //得到弧度的值
          var rad = item.deg * Math.PI / 180;
          //求x轴的y轴的坐标
          var x = item.x + Math.sin(rad) * item.s;
          var y = item.y - rad * item.s;
          //删除已经跑出去的圆
          if (y <= -item.c_r) {
            arr.splice(i, 1);
            continue;
          }
          ctx.fillStyle = 'rgb(' + item.r + ',' + item.g + ',' + item.b + ')';
          ctx.beginPath();
          ctx.arc(x, y, item.c_r, 0, 2 * Math.PI);
          ctx.fill();
        }
      }, 1000 / 60)
    }
  }
};



