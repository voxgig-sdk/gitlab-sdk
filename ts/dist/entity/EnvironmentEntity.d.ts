import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentCreateData, EnvironmentRemoveMatch } from '../GitlabTypes';
declare class EnvironmentEntity extends GitlabEntityBase<Environment> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    create(this: any, reqdata?: EnvironmentCreateData, ctrl?: Control): Promise<EnvironmentEntity>;
    remove(this: any, reqmatch?: EnvironmentRemoveMatch, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
