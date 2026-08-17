import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { DeployKey, DeployKeyRemoveMatch } from '../GitlabTypes';
declare class DeployKeyEntity extends GitlabEntityBase<DeployKey> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DeployKeyEntity): DeployKeyEntity;
    remove(this: any, reqmatch?: DeployKeyRemoveMatch, ctrl?: Control): Promise<DeployKeyEntity>;
}
export { DeployKeyEntity };
