import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { GroupAvatar, GroupAvatarLoadMatch } from '../GitlabTypes';
declare class GroupAvatarEntity extends GitlabEntityBase<GroupAvatar> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GroupAvatarEntity): GroupAvatarEntity;
    load(this: any, reqmatch?: GroupAvatarLoadMatch, ctrl?: Control): Promise<GroupAvatarEntity>;
}
export { GroupAvatarEntity };
