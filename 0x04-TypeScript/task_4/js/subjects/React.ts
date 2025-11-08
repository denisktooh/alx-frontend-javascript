import { Subject } from './Subject';
import { Teacher as BaseTeacher } from './Teacher';

export interface Teacher extends BaseTeacher {
    experienceTeachingReact?: number;
}

export class React extends Subject {
    teacher: Teacher;

    getRequirements(): string {
        return 'Here is the list of requirements for React';
    }

    getAvailableTeacher(): string {
        if (this.teacher === undefined 
            || this.teacher.experienceTeachingReact === undefined 
            || this.teacher.experienceTeachingReact < 1
        ) {
            return 'No available teacher';
        } else {
            return `Available Teacher: ${this.teacher.firstName}`;
        }
    }
}