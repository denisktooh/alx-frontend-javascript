/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/React.ts" />

const cpp = new Subjects.Cpp();
const cTeacher: Subjects.Teacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Subjects.Java();
const jTeacher: Subjects.Teacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingJava: 0 };
java.setTeacher(jTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new Subjects.React();
const rTeacher: Subjects.Teacher = { firstName: 'Emily', lastName: 'Johnson', experienceTeachingReact: 5 };
react.setTeacher(rTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
