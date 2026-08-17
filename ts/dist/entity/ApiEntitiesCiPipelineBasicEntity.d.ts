import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiPipelineBasic, ApiEntitiesCiPipelineBasicLoadMatch, ApiEntitiesCiPipelineBasicListMatch } from '../GitlabTypes';
declare class ApiEntitiesCiPipelineBasicEntity extends GitlabEntityBase<ApiEntitiesCiPipelineBasic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiPipelineBasicEntity): ApiEntitiesCiPipelineBasicEntity;
    load(this: any, reqmatch?: ApiEntitiesCiPipelineBasicLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiPipelineBasicEntity>;
    list(this: any, reqmatch?: ApiEntitiesCiPipelineBasicListMatch, ctrl?: Control): Promise<ApiEntitiesCiPipelineBasicEntity[]>;
}
export { ApiEntitiesCiPipelineBasicEntity };
