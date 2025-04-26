let display = document.getElementById("display");
let button =  document.querySelectorAll("button");

buttons.forEach(i =>{
	i.addEventListener("click", function(){
		const id = this.id;

		if(id==='C'){
			display.value='';
		}
		else if(id === "back")
	})
})