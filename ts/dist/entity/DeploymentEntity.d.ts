import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Deployment, DeploymentRemoveMatch } from '../GitlabTypes';
declare class DeploymentEntity extends GitlabEntityBase<Deployment> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DeploymentEntity): DeploymentEntity;
    remove(this: any, reqmatch?: DeploymentRemoveMatch, ctrl?: Control): Promise<DeploymentEntity>;
}
export { DeploymentEntity };
