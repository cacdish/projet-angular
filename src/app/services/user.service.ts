import { User } from '../models/User.model';
import { Subject } from 'rxjs';
import { splitMatchedQueriesDsl } from '@angular/core/src/view/util';

export class UserService {
    private users: User[] = [
        {
            firstName: 'James',
            lastName: 'Smith',
            email: 'james@smith.com',
            drinkPreference: 'Coca',
            hobbies: [
                'coder',
                'La dégustation de café'
            ]
        }

    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}