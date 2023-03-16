// your code goes here
// good luck!
class Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    (this.id = id),
      (this.firstName = firstName),
      (this.lastName = lastName),
      (this.taxId = taxId),
      (this.salary = salary);
  }
  generatePaySlip() {
    return `Employee Id: ${this.id},
Name: ${this.firstName} ${this.lastName},
Tax ID: ${this.taxId},
Pay: ${(this.salary / 12).toFixed(2)}`;
  }
}

class Manager extends Employee {
  constructor(id, firstName, lastName, taxId, salary) {
    super(id, firstName, lastName, taxId, salary);
    this.managedEmployees = [];
  }

  addManagedEmployee(employee) {
    if (employee instanceof Employee) {
      this.managedEmployees.push(employee);
    } else {
      console.log('You are not our employee!');
    }
  }

  removeManagedEmployee(employee) {
    const indexOfRemoveManager = this.managedEmployees.indexOf(employee);
    if (indexOfRemoveManager !== -1) {
      this.managedEmployees.splice(indexOfRemoveManager, 1);
    } else {
      console.log('You are not our manager!');
    }
  }
}

const employee1 = new Employee(123, 'Buggs', 'Bunny', 99090, 60000);
console.log(employee1.generatePaySlip());
console.log('***********');

const employee2 = new Employee(124, 'Bee', 'Maja', 56789, 40000);
console.log(employee2.generatePaySlip());
console.log('***********');

const employee3 = new Employee(125, 'King', 'Leon', 34567, 50000);
console.log(employee3.generatePaySlip());
console.log('***********');

const managers = new Manager();

managers.addManagedEmployee(employee1);
managers.addManagedEmployee(employee2);
managers.addManagedEmployee('Fatih');
console.log(managers.managedEmployees);
console.log('***********');

managers.removeManagedEmployee(employee2);
managers.removeManagedEmployee('Fatih');
console.log(managers.managedEmployees);
