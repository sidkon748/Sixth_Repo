// Task 1
// Initialize employees with shift schedules
const employees = [
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 7 }] },
    { name: 'Joseph', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Wednesday', hours: 5 }] },
    { name: 'Petra', shifts: [{ day: 'Wednesday', hours: 7 }, { day: 'Friday', hours: 5 }] },
    { name: 'Sammy', shifts: [{ day: 'Monday', hours: 9 }] },
    { name: 'Mollie', shifts: [{ day: 'Friday', hours: 9 }] },
    { name: 'Daniel', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Tuesday', hours: 8 }] },
    { name: 'Elizabeth', shifts: [{ day: 'Tuesday', hours: 5 }, { day: 'Wednesday', hours: 5 }] },
    { name: 'Peter', shifts: [{ day: 'Friday', hours: 6 }] }
    ];

// Task 2
// Create displayEmployeeShifts function
function displayEmployeeShifts(){
    for (i=0; i< employees.length; i++){
        var line;
        console.log ("Name: " + employees[i].name);/// Logs employee names
        for(j=0; j<employees[i].shifts.length; j++){
            console.log("Day = " + employees[i].shifts[j].day+ " - "+employees[i].shifts[j].hours  + " hours");// Logs employee shifts (days/hours)
        }
    }
}
displayEmployeeShifts(); 

// Task 3
// Create assignShift function
function assignShift(day, hours, employeeName){
    const findEmployee = employees.find(emp => emp.name === employeeName);

    // Check if the employee exists
  if (!employees) {
    console.log(` ${employeeName} not found.`);
    return;
  }

  // Check if the employee already has a shift for that day
  const presentShift = employees.find(shift => shift.day === day);
  
  if (presentShift) { 
    console.log(`${employeeName} already has a shift on ${day}.`); // Declares that an employee already has a shift on that day
  } else {
    employees.push({ day, hours });
    console.log(`${employeeName} has been assigned ${hours} hours on ${day}.`); // Adds the new shift when none already present
  }
}

// Adding shifts
assignShift('John', 'Monday', 6); 
assignShift('Mary', 'Wednesday', 4); 
assignShift('Cara', 'Tuesday', 5);

// Task 4
// Create calculateTotalHours function
function calculateTotalHours(employeeName) {
  let totalHours = 0;

  // Adds hours for each day worked per employee
  for (const employee of employees) {
    if (employee.name === employeeName) {
      for (const shift of employee.shifts) {
        totalHours += shift.hours;
      }
    }
  }

  return totalHours;
}

// Logs certain employees total working hours
console.log(calculateTotalHours('Emily')); 
console.log(calculateTotalHours('Peter'));  

// Task 5
// Create a Function to List Employees with Free Days
function listAvailableEmployees(day) {
  const availableEmployees = employees
  employees.filter(employee => !employee.shifts.(shift => shift.day === day))
  employees.filter(employee => employee.name);

console.log(`Available employees on ${day}: ${available.join(', ')}` : `No employees available for ${day}.`);
}

// Function listing employee availability in the workweek  
listAvailableEmployees('Monday');
listAvailableEmployees('Tuesday');
listAvailableEmployees('Wednesday');
listAvailableEmployees('Thursday');
listAvailableEmployees('Friday');
