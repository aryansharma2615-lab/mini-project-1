// -------------------------------------------
// Assignment class
// -------------------------------------------
class Assignment {
    constructor(title, dueDate) {
        this.title = title;
        this.dueDate = dueDate;
    }

    printAssignment() {
        console.log(`   Title: ${this.title} | Due Date: ${this.dueDate}`);
    }
}


// -------------------------------------------
// Course class
// -------------------------------------------
class Course {
    constructor(courseName, instructor, creditHours, assignments = []) {
        this.courseName = courseName;
        this.instructor = instructor;
        this.creditHours = creditHours;
        this.assignments = assignments; // array of Assignment objects
    }

    courseInfo() {
        console.log(
            `Course: ${this.courseName} | Instructor: ${this.instructor} | Credit Hours: ${this.creditHours}`
        );
        console.log("Assignments >>>");
        this.assignments.forEach(a => a.printAssignment());
    }
}


// -------------------------------------------
// Create objects and print
// -------------------------------------------

const assignment1 = new Assignment("Project Proposal", "Jan 15");
const assignment2 = new Assignment("Midterm Report", "Feb 20");

const course = new Course("Software Engineering", "Dr. Pepper", 3, [
    assignment1,
    assignment2,
]);

course.courseInfo();
