import { Subject } from './Subject';
import { Teacher as BaseTeacher } from './Teacher';

export interface Teacher extends BaseTeacher {
        experienceTeachingC?: number;
}

export class Cpp extends Subject {
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingC === undefined 
            || this.teacher.experienceTeachingC < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}
