function drag(id){
	var obj=document.getElementById(id);
	var disX=0;
	var disY=0;
	obj.onmousedown=function(ev){
		var ev=ev || event;
		disX=ev.pageX-obj.offsetLeft;
		disY=ev.pageY-obj.offsetTop;
	}
}