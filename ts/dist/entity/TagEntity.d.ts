import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Tag, TagRemoveMatch } from '../GitlabTypes';
declare class TagEntity extends GitlabEntityBase<Tag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    remove(this: any, reqmatch?: TagRemoveMatch, ctrl?: Control): Promise<TagEntity>;
}
export { TagEntity };
