import { Subject } from "./Subject";
import { Teacher as BaseTeacher } from './Teacher';

export interface Teacher extends BaseTeacher {
    experienceTeachingJava?: number;
}

export class Java extends Subject {
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingJava === undefined 
            || this.teacher.experienceTeachingJava < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}