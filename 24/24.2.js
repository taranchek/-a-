class Employee {
	#name;
    #salary;
	
	constructor(name, salary) {
		this.#name = name;
        this.#salary = salary;
	}
	getName() {
		return this.#name;
	}
    getSalary() {
		return this.#salary;
	}
}
let employees = [
	new Employee('john', 330),
	new Employee('eric', 800),
	new Employee('kyle', 450)
]
for (let employee of employees) {
	console.log(employee.getName() + " " + employee.getSalary());
}