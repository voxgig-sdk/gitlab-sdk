import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { DeployToken, DeployTokenRemoveMatch } from '../GitlabTypes';
declare class DeployTokenEntity extends GitlabEntityBase<DeployToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DeployTokenEntity): DeployTokenEntity;
    remove(this: any, reqmatch?: DeployTokenRemoveMatch, ctrl?: Control): Promise<DeployTokenEntity>;
}
export { DeployTokenEntity };
