import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryUserService implements InMemoryDbService {
    createDb() {
        let users = [
            {uid: '', name: 'Mr. Nice', skype: 'nice123', slack: '@nise'},
            {uid: 'Olya', name: 'Narco', skype: 'narik', slack: '@narcobaron'},
            {uid: 'bill', name: 'Bombasto', skype: 'businka', slack: '@bomba'},
            {uid: 'bob', name: 'Celeritas', skype: 'celeritas', slack: '@rita'},
            {uid: 'john', name: 'Magneta', skype: 'magnit', slack: '@magnetron'},
            {uid: 'max', name: 'RubberMan', skype: 'man456', slack: '@rumba'},
            {uid: 'petr', name: 'Dynama', skype: 'dyma789', slack: '@dinamo'}
        ];
        return {users};
    }
}

