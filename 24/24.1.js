class Employee {
	#name;
	
	constructor(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}
let employees = [
	new Employee('john'),
	new Employee('eric'),
	new Employee('kyle')
]
for (let employee of employees) {
	console.log(employee.getName());
}