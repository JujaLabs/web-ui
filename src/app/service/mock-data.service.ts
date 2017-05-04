import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
    createDb() {
        let userActivity = [
            {to: '', point: 1},
            {to: 'Olya', point: 1},
            {to: 'bill', point: 2},
            {to: 'bob', point: 11},
            {to: 'john', point: 6},
            {to: 'max', point: 11},
            {to: 'petr', point: 2}
        ];
        let users = [
            {uid: '', name: 'Mr. Nice', skype: 'nice123', slack: '@nise'},
            {uid: 'Olya', name: 'Narco', skype: 'narik', slack: '@narcobaron'},
            {uid: 'bill', name: 'Bombasto', skype: 'businka', slack: '@bomba'},
            {uid: 'bob', name: 'Celeritas', skype: 'celeritas', slack: '@rita'},
            {uid: 'john', name: 'Magneta', skype: 'magnit', slack: '@magnetron'},
            {uid: 'max', name: 'RubberMan', skype: 'man456', slack: '@rumba'},
            {uid: 'petr', name: 'Dynama', skype: 'dyma789', slack: '@dinamo'}
        ];
        return {userActivity, users};
    }
}