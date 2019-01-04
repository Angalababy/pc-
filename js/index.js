/**
 * Created by lenovo on 2019/1/4.
 */
window.onload=function () {

    var lisNodes = document.querySelectorAll('.list li');
    var jiantou = document.querySelector('.jiantou');
    var lisDwon = document.querySelectorAll('.list li .down');


//初始化小箭头来到第一dwon下面
  jiantou.style.left=lisNodes[0].getBoundingClientRect().left+lisNodes[0].offsetWidth/2-jiantou.offsetWidth/2+'px'

    //初始化时第一个dwon元素为100%
  lisDwon[0].style.width='100%';
    for (var i = 0; i <lisNodes.length; i++) {
      lisNodes[i].index=i;
        lisNodes[i].onclick=function () {
            //清楚所有dwon的宽度 将宽度改为0
          for (var j = 0; j < lisDwon.length; j++) {
            lisDwon[j].style.width='';

          }
           //将当前元素宽度改为100%
          lisDwon[this.index].style.width='100%';
          //改变小箭头的位置
          jiantou.style.left=this.getBoundingClientRect().left+this.offsetWidth/2-jiantou.offsetWidth/2+'px'
        }
    }

}
