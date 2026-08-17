import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiRunnerManager, ApiEntitiesCiRunnerManagerLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesCiRunnerManagerEntity extends GitlabEntityBase<ApiEntitiesCiRunnerManager> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiRunnerManagerEntity): ApiEntitiesCiRunnerManagerEntity;
    load(this: any, reqmatch?: ApiEntitiesCiRunnerManagerLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiRunnerManagerEntity>;
}
export { ApiEntitiesCiRunnerManagerEntity };
