import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiPipelineScheduleDetail, ApiEntitiesCiPipelineScheduleDetailLoadMatch, ApiEntitiesCiPipelineScheduleDetailCreateData, ApiEntitiesCiPipelineScheduleDetailUpdateData } from '../GitlabTypes';
declare class ApiEntitiesCiPipelineScheduleDetailEntity extends GitlabEntityBase<ApiEntitiesCiPipelineScheduleDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiPipelineScheduleDetailEntity): ApiEntitiesCiPipelineScheduleDetailEntity;
    load(this: any, reqmatch?: ApiEntitiesCiPipelineScheduleDetailLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiPipelineScheduleDetailEntity>;
    create(this: any, reqdata?: ApiEntitiesCiPipelineScheduleDetailCreateData, ctrl?: Control): Promise<ApiEntitiesCiPipelineScheduleDetailEntity>;
    update(this: any, reqdata?: ApiEntitiesCiPipelineScheduleDetailUpdateData, ctrl?: Control): Promise<ApiEntitiesCiPipelineScheduleDetailEntity>;
}
export { ApiEntitiesCiPipelineScheduleDetailEntity };
