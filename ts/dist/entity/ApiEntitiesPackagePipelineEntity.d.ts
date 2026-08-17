import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagePipeline, ApiEntitiesPackagePipelineLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagePipelineEntity extends GitlabEntityBase<ApiEntitiesPackagePipeline> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagePipelineEntity): ApiEntitiesPackagePipelineEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagePipelineLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagePipelineEntity>;
}
export { ApiEntitiesPackagePipelineEntity };
