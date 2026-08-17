import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiPipelineSchedule, ApiEntitiesCiPipelineScheduleListMatch } from '../GitlabTypes';
declare class ApiEntitiesCiPipelineScheduleEntity extends GitlabEntityBase<ApiEntitiesCiPipelineSchedule> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiPipelineScheduleEntity): ApiEntitiesCiPipelineScheduleEntity;
    list(this: any, reqmatch?: ApiEntitiesCiPipelineScheduleListMatch, ctrl?: Control): Promise<ApiEntitiesCiPipelineScheduleEntity[]>;
}
export { ApiEntitiesCiPipelineScheduleEntity };
