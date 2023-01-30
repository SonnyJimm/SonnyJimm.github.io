String.prototype.filter = function(data){
  let dat = this;
  return function(){
      let e = dat.split(" ");
      let s = e.filter((str)=>!(str==data))
      return s.join(" ");
  }();
}

console.log("This house is not nice!".filter('not'));

Array.prototype.bubbleSort = function(data){
  let dat = this;
  return function(){
    for(let i=0;i<dat.length;i++){
      for(let j=i+1;j<dat.length;j++){
        if(dat[i]>dat[j]){
            let temp = dat[j];
            dat[j] = dat[i];
            dat[i] = temp
        }
      }
    }
    return dat;
  }()
}
console.log([6,4,0, 3,-2,1].bubbleSort());

var Person = function() {};
Person.prototype.initialize = function(name, age)
{
 this.name = name;
 this.age = age;
}
Person.prototype.describe = function()
{
 return this.name + ", " + this.age + " years old.";
}
var Student = function() {};
Student.prototype = new Person();

Student.prototype.learn = function(subject)
{
 console.log(this.name + " just learned " + subject);
}
var me = new Student();
me.initialize("John", 25);
me.learn("Inheritance");
var Teacher = function(){};
Teacher.prototype = new Person();
Teacher.prototype.teach= function(subject){
  return this.name + " is now teaching " + subject; 
}
var teacher = new Teacher();
teacher.initialize("Dany",29);
console.log(teacher.teach("Inheritance"));