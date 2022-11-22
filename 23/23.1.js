class Employee {
	constructor(name, position, department) {
		this.name = name;
		this.position = position;
		this.department = department;
	}
}
class Position {
	constructor(name) {
		this.name = name;
	}
}
class Department {
	constructor(name) {
		this.name = name;
	}
}
let employee = new Employee('john', position, department);
let position = new Position('Vologda');
let department = new Department('IT')