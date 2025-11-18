// -------------------------------------------
// Assignment constructor
// -------------------------------------------
function Assignment(title, dueDate) {
    this.title = title;
    this.dueDate = dueDate;
}

// Print a single assignment line (with indentation)
Assignment.prototype.printAssignment = function () {
    console.log(`   Title: ${this.title} | Due Date: ${this.dueDate}`);
};


// -------------------------------------------
// Course constructor
// -------------------------------------------
function Course(courseName, instructor, creditHours, assignments = []) {
    this.courseName = courseName;
    this.instructor = instructor;
    this.creditHours = creditHours;
    this.assignments = assignments; // array of Assignment objects
}

// Print course info + all assignments in the required format
Course.prototype.courseInfo = function () {
    console.log(
        `Course: ${this.courseName} | Instructor: ${this.instructor} | Credit Hours: ${this.creditHours}`
    );
    console.log("Assignments >>>");
    this.assignments.forEach(a => a.printAssignment());
};


// -------------------------------------------
// Create object

