const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'Javascript' },
    { id: 2, name: 'Jane Smith', age: 25, department: 'HR', salary: 45000, specialization: 'Recruitment' },
    { id: 3, name: 'Sam Brown', age: 35, department: 'Finance', salary: 60000, specialization: 'Accounting' },
    { id: 4, name: 'Lisa White', age: 28, department: 'IT', salary: 55000, specialization: 'Python' },
    { id: 5, name: 'Tom Green', age: 40, department: 'HR', salary: 70000, specialization: 'Employee Relations' },
    { id: 6, name: 'Sara Black', age: 32, department: 'Finance', salary: 65000, specialization: 'Investment' },
    { id: 7, name: 'Mike Blue', age: 29, department: 'IT', salary: 52000, specialization: 'Java' },
    { id: 8, name: 'Anna Yellow', age: 31, department: 'HR', salary: 48000, specialization: 'Training' },
    { id: 9, name: 'Chris Red', age: 38, department: 'Finance', salary: 72000, specialization: 'Taxation' },
    { id: 10, name: 'Emma Purple', age: 27, department: 'IT', salary: 53000, specialization: 'Javascript' },
    { id: 11, name: 'David Gray', age: 36, department: 'HR', salary: 75000, specialization: 'Performance Management' },
    { id: 12, name: 'Olivia Orange', age: 33, department: 'Finance', salary: 68000, specialization: 'Financial Analysis' },
    { id: 13, name: 'James Pink', age: 26, department: 'IT', salary: 54000, specialization: 'Ruby' },
    { id: 14, name: 'Sophia Cyan', age: 34, department: 'HR', salary: 49000, specialization: 'Compensation' },
    { id: 15, name: 'Liam Brown', age: 39, department: 'Finance', salary: 71000, specialization: 'Budgeting' },
    { id: 16, name: 'Ava Black', age: 30, department: 'IT', salary: 56000, specialization: 'PHP' },
    { id: 17, name: 'Noah White', age: 37, department: 'HR', salary: 77000, specialization: 'Talent Acquisition' },
    { id: 18, name: 'Mia Green', age: 29, department: 'Finance', salary: 69000, specialization: 'Risk Management' },
    { id: 19, name: 'Lucas Blue', age: 32, department: 'IT', salary: 58000, specialization: 'Swift' },
    { id: 20, name: 'Charlotte Yellow', age: 35, department: 'HR', salary: 50000, specialization: 'Employee Engagement' },
    //... More employee records can be added here
];

// Function to display all employees
function displayEmployees() {
    const totalEmployees = employees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
    document.getElementById('employeesDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees = employees.filter(employee => employee.department === 'HR');
     const hrEmployeesDisplay = hrEmployees.map((employee, index) => `<p>${employee.id}: ${employee.name}: ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`).join('');
     document.getElementById('employeesDetails').innerHTML = hrEmployeesDisplay;
}

function findEmployeeById(employeeId) {
    const foundEmployee = employees.find(employee => employee.id === employeeId);
    if (foundEmployee) {
    document.getElementById('employeesDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.name}: ${foundEmployee.name} - ${foundEmployee.department} - $${foundEmployee.salary} - ${foundEmployee.specialization}</p>`;
    }
    else{
      document.getElementById('employeesDetails').innerHTML = 'no employee has been found with this ID';

    }
}

function findEmployeeBySpecialization(specialization) {
    const specializedEmployees = employees.filter(employee => employee.specialization.toLowerCase() === specialization.toLowerCase());

    if (specializedEmployees.length > 0) {
        const employeeList = specializedEmployees.map(employee =>
            `<p>${employee.id}: ${employee.name} - ${employee.age} - ${employee.department} - $${employee.salary} - ${employee.specialization}</p>`
        ).join('');
        document.getElementById('employeesDetails').innerHTML = employeeList;
    } else {
        document.getElementById('employeesDetails').innerHTML = `No employees found with specialization "${specialization}".`;
    }
}

function handleSpecializationSearch() {
    const specialization = document.getElementById('specializationInput').value.trim();
    if (specialization) {
        findEmployeeBySpecialization(specialization);
    } else {
        document.getElementById('employeesDetails').innerHTML = 'Please enter a specialization.';
    }
}
