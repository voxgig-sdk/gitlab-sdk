import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProtectedTag, ProtectedTagRemoveMatch } from '../GitlabTypes';
declare class ProtectedTagEntity extends GitlabEntityBase<ProtectedTag> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProtectedTagEntity): ProtectedTagEntity;
    remove(this: any, reqmatch?: ProtectedTagRemoveMatch, ctrl?: Control): Promise<ProtectedTagEntity>;
}
export { ProtectedTagEntity };
