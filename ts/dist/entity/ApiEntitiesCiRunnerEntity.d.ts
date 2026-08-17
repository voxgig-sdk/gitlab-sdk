import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiRunner, ApiEntitiesCiRunnerLoadMatch, ApiEntitiesCiRunnerCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiRunnerEntity extends GitlabEntityBase<ApiEntitiesCiRunner> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiRunnerEntity): ApiEntitiesCiRunnerEntity;
    load(this: any, reqmatch?: ApiEntitiesCiRunnerLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiRunnerEntity>;
    create(this: any, reqdata?: ApiEntitiesCiRunnerCreateData, ctrl?: Control): Promise<ApiEntitiesCiRunnerEntity>;
}
export { ApiEntitiesCiRunnerEntity };
