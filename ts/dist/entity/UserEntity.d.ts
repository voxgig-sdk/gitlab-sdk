import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { User, UserListMatch } from '../GitlabTypes';
declare class UserEntity extends GitlabEntityBase<User> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
}
export { UserEntity };
