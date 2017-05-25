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
            {uuid: '', name: 'Mr. Nice', skype: 'nice123', slack: '@nise'},
            {uuid: 'Olya', name: 'Narco', skype: 'narik', slack: '@narcobaron'},
            {uuid: 'bill', name: 'Bombasto', skype: 'businka', slack: '@bomba'},
            {uuid: 'bob', name: 'Celeritas', skype: 'celeritas', slack: '@rita'},
            {uuid: 'john', name: 'Magneta', skype: 'magnit', slack: '@magnetron'},
            {uuid: 'max', name: 'RubberMan', skype: 'man456', slack: '@rumba'},
            {uuid: 'petr', name: 'Dynama', skype: 'dyma789', slack: '@dinamo'}
        ];
        let nameByUuid = [
            {uuid:"bob",name:"Bob"},
            {uuid:"max",name:"Max"}
        ];
        return {userActivity, users, nameByUuid};
    }
}