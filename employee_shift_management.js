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
        console.log ("Name: " + employees[i].name);
        for(j=0; j<employees[i].shifts.length; j++){
            console.log("Day = " + employees[i].shifts[j].day+ " - "+employees[i].shifts[j].hours  + " hours");
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
    console.log(`${employeeName} already has a shift on ${day}.`);
  } else {
    // Add the new shift
    employees.push({ day, hours });
    console.log(`${employeeName} has been assigned ${hours} hours on ${day}.`);
  }
}

// Adding shift
assignShift('John', 'Monday', 6); 
assignShift('Mary', 'Wednesday', 4); 
assignShift('Cara', 'Tuesday', 5);

// Task 4
// Create calculateTotalHours function
function calculateTotalHours(employeeName) {
  let totalHours = 0;

  for (const employee of employees) {
    if (employee.name === employeeName) {
      for (const shift of employee.shifts) {
        totalHours += shift.hours;
      }
    }
  }

  return totalHours;
}

console.log(calculateTotalHours('Emily')); 
console.log(calculateTotalHours('Peter'));  