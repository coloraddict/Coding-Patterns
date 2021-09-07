//Factory Pattern

function Developer(name){
  this.name = name
  this.type="Developer"
}

function Tester(name) {
  this.name = name
  this.type="Tester"
}

function BusinessAnalyst(name) {
  this.name = name
  this.type="Business Analyst"
}

function Introduce(){
  // console.log("Hi I'm: " + this.name + " and I'm a " + this.type);
  console.log(`Hi, I'm ${this.name} and I'm a ${this.type}`);
}

function EmployeeFactory(){
  this.create = function(name, type){
    switch(type){
      case 1: 
        return new Developer(name);
        break;
      case 2: 
        return new Tester(name);
        break;
      default :
        return new BusinessAnalyst(name);
        break;
    }
  }
}

const employees = [];
var employeeFactory = new EmployeeFactory();


employees.push(employeeFactory.create("Anand", 1));
employees.push(employeeFactory.create("Vibhor", 2));
employees.push(employeeFactory.create("Parag", 3));

employees.forEach(emp => {
  Introduce.call(emp);
})