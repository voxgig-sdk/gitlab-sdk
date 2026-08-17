import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiRunnerDetail, ApiEntitiesCiRunnerDetailLoadMatch, ApiEntitiesCiRunnerDetailUpdateData } from '../GitlabTypes';
declare class ApiEntitiesCiRunnerDetailEntity extends GitlabEntityBase<ApiEntitiesCiRunnerDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiRunnerDetailEntity): ApiEntitiesCiRunnerDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesCiRunnerDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiRunnerDetailEntity>;
    update(this: any, reqdata?: ApiEntitiesCiRunnerDetailUpdateData, ctrl?: Control): Promise<ApiEntitiesCiRunnerDetailEntity>;
}
export { ApiEntitiesCiRunnerDetailEntity };
