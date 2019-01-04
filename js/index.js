/**
 * Created by lenovo on 2019/1/4.
 */
window.onload=function () {

    var lisNodes = document.querySelectorAll('.list li');
    var jiantou = document.querySelector('.jiantou');
    var lisDwon = document.querySelectorAll('.list li .down');

    lisDwon[0].style.width='100%';
    jiantou.style.left=lisNodes[0].getBoundingClientRect().left+lisNodes[0].offsetWidth/2
        -jiantou.offsetWidth/2+'px';

    for (var i = 0; i <lisNodes.length; i++) {
        lisNodes[i].onclick=function () {


        }
    }

}
