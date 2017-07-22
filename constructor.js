var Task = function(name){
  this.name = name;
  this.completed = false;
  this.complete = function(){
  	console.log('completing task '+ this.name);
  }
  this.save=function(){
  	console.log('saving task' + this.name);
  }
}
var t1= new Task('hi1');
var t2= new Task('hi2');
var t3= new Task('hi3');
var t4= new Task('hi4');


t1.complete();
t2.save();
t3.save();
t4.save();

