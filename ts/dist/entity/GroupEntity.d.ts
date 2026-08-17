import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Group, GroupLoadMatch, GroupCreateData, GroupUpdateData, GroupRemoveMatch } from '../GitlabTypes';
declare class GroupEntity extends GitlabEntityBase<Group> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GroupEntity): GroupEntity;
    load(this: any, reqmatch?: GroupLoadMatch, ctrl?: Control): Promise<GroupEntity>;
    create(this: any, reqdata?: GroupCreateData, ctrl?: Control): Promise<GroupEntity>;
    update(this: any, reqdata?: GroupUpdateData, ctrl?: Control): Promise<GroupEntity>;
    remove(this: any, reqmatch?: GroupRemoveMatch, ctrl?: Control): Promise<GroupEntity>;
}
export { GroupEntity };
