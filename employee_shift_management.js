// Task 1
// Initialize employees with shift schedules
const employees = [
    { name: 'John', shifts: [{ day: 'Monday', hours: 5 }, { day: 'Tuesday', hours: 7 }] },
    { name: 'David', shifts: [{ day: 'Tuesday', hours: 6 }] },
    { name: 'Sara', shifts: [{ day: 'Monday', hours: 8 }, { day: 'Friday', hours: 7 }] },
    { name: 'Emily', shifts: [{ day: 'Friday', hours: 7 }] },
    { name: 'Joseph', shifts: [{ day: 'Monday', hours: 4 }, { day: 'Wednesday', hours: 5 }] },
    { name: 'Cara', shifts: [{ day: 'Wednesday', hours: 7 }, { day: 'Friday', hours: 5 }] },
    { name: 'Sam', shifts: [{ day: 'Monday', hours: 9 }] },
    { name: 'Mary', shifts: [{ day: 'Friday', hours: 9 }] }
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