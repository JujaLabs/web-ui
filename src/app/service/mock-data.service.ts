import { InMemoryDbService } from 'angular-in-memory-web-api';

export class MockDataService implements InMemoryDbService {
    createDb() {
        const activeKeepers = [
            {uuid: '002fafbe-0a96-4c9a-a876-d35a783325c6', directions: ["dir1", "dir2"]},
            {uuid: '01f1d246-cc99-4658-b256-7cc6631fdde8', directions: ["dir1", "dir2"]},
            {uuid: '02629c8b-f268-4296-ae6f-ee01a4b0dede', directions: ["dir1", "dir2"]},
            {uuid: '02de9640-5900-4805-b384-7cc33ab74081', directions: ["dir1", "dir2"]}
        ];
        return {activeKeepers};
    }
}
