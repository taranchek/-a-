class EmployeesCollection {
	#users;
	
	constructor() {
		this.#users = [];
	}
	add(user) {
		this.#users.push(user);
	}
}