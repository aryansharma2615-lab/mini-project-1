// -------------------------------------------
// Assignment Constructor
// -------------------------------------------
function Assignment(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
}

// Method on Assignment prototype
Assignment.prototype.printAssignment = function () {
    console.log(`Title: ${this.title}, Due Date: ${this.dueDate}`);
};


// -------------------------------------------
// Course Constructor
// -------------------------------------------
function Course(courseName, instructor, creditHours, assignments = []) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments; // array of Assignment objects
}

// Method on Course prototype
Course.prototype.courseInfo = function () {
    console.log(`Course: ${this.courseName}`);
    console.log(`Instructor: ${this.instructor}`);
    console.log(`Credit Hours: ${this.creditHours}`);
    console.log("Assignments:");
    this.assignments.forEach(a => a.printAssignment());
};


// -------------------------------------------
// Create objects (must match plainObjects.js output)
// -------------------------------------------

// Example objects — replace these with the original values from plainObjects.js
const a1 = new Assignment("Homework 1", "2025-02-10");
const a2 = new Assignment("Lab Report", "2025-02-14");

const c1 = new Course("Data Structures", "Dr. Smith", 3, [a1, a2]);

// Print output (must match plainObjects.js FORMAT exactly)
c1.courseInfo();
