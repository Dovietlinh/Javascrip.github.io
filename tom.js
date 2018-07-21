var tom={
	name:'Tom',
	weight:22,
	eatMouse:[],
	eat: function(mouse) {
		this.eatMouse.push(mouse);
		this.weight+=mouse.weight;
		return this;
	}
}
function Mouse(name,weight){
	this.name=name;
	this.weight=weight;
}
var m1=new Mouse('Jelly',2);
var m2=new Mouse('Micky',3);
tom.eat(m2).eat(m1);
console.log(tom);