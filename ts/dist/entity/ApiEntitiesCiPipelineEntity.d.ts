import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiPipeline, ApiEntitiesCiPipelineCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiPipelineEntity extends GitlabEntityBase<ApiEntitiesCiPipeline> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiPipelineEntity): ApiEntitiesCiPipelineEntity;
    create(this: any, reqdata?: ApiEntitiesCiPipelineCreateData, ctrl?: Control): Promise<ApiEntitiesCiPipelineEntity>;
}
export { ApiEntitiesCiPipelineEntity };
