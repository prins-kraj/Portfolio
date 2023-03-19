
var navmenuanchortag=document.querySelectorAll('.nav-menu a');
// console.log(navmenuanchortag);

for (var i = 0; i < navmenuanchortag.length; i++) {
	navmenuanchortag[i].addEventListener('click', function(event){
		event.preventDefault();
		var targetsectionid=this.textContent.trim().toLowerCase();
		var targetsection=document.getElementById(targetsectionid);
		// console.log(targetsection);
		// var targetsectioncordinates = targetsection.getBoundingClientRect();
		var interval = setInterval(function(){
			var targetsectioncordinates = targetsection.getBoundingClientRect();
			if (targetsectioncordinates.top<=0) {
				clearInterval(interval);
				return;
			}
			window.scrollBy(0, 50);
		}, 20);
	});
}
