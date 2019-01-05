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
      console.log(flag);
      switch (flag) {
        case 'up' :


          if(nowIndex>0){
            nowIndex--;
            move(nowIndex)
          }

          console.log(nowIndex)
          break;
        case 'down' :


          if(nowIndex<4){
            nowIndex++
            move(nowIndex)
          }

          console.log(nowIndex)
          break;
      }

      //禁止默认行为
      // event.e
    }
  }

  //第一屏

  var circlePoint=document.querySelector('.circle-point');
  var circlePointLis=document.querySelectorAll('.circle-point li');
  var homeMianLis=document.querySelectorAll('.homemian li');
  var lastIndex=0;
  var nowIndex=0;

  for (var i = 0; i <circlePointLis .length; i++) {
    circlePointLis[i].index=i;

    circlePointLis[i].onclick=function () {
      nowIndex=this.index;
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

      lastIndex=nowIndex;
    }
  }

    };



