import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { AccessRequest, AccessRequestRemoveMatch } from '../GitlabTypes';
declare class AccessRequestEntity extends GitlabEntityBase<AccessRequest> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: AccessRequestEntity): AccessRequestEntity;
    remove(this: any, reqmatch?: AccessRequestRemoveMatch, ctrl?: Control): Promise<AccessRequestEntity>;
}
export { AccessRequestEntity };
