import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Badge, BadgeRemoveMatch } from '../GitlabTypes';
declare class BadgeEntity extends GitlabEntityBase<Badge> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: BadgeEntity): BadgeEntity;
    remove(this: any, reqmatch?: BadgeRemoveMatch, ctrl?: Control): Promise<BadgeEntity>;
}
export { BadgeEntity };
