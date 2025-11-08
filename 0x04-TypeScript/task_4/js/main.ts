import { Subject } from './subjects/Subject';
import { Java, Teacher as JavaTeacher } from './subjects/Java';
import { Cpp, Teacher as CppTeacher} from './subjects/Cpp';
import { React, Teacher as ReactTeacher } from './subjects/React';

const cpp = new Cpp();
const cTeacher: CppTeacher = { firstName: 'John', lastName: 'Doe', experienceTeachingC: 10 };
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

const java = new Java();
const jTeacher: JavaTeacher = { firstName: 'Jane', lastName: 'Smith', experienceTeachingJava: 0 };
java.setTeacher(jTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

const react = new React();
const rTeacher: ReactTeacher = { firstName: 'Emily', lastName: 'Johnson', experienceTeachingReact: 5 };
react.setTeacher(rTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
