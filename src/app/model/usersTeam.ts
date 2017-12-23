import {User} from './user';

export class UsersTeam {
  users: User[];
  activateDate: number;
  deactivateDate: number;

  constructor(
    users: User[],
    activateDate: number,
    deactivateDate: number
  ) {
    this.users = users;
    this.activateDate = activateDate;
    this.deactivateDate = deactivateDate;
  }
}
