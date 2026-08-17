import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesResourceMilestoneEvent, ApiEntitiesResourceMilestoneEventLoadMatch, ApiEntitiesResourceMilestoneEventListMatch } from '../GitlabTypes';
declare class ApiEntitiesResourceMilestoneEventEntity extends GitlabEntityBase<ApiEntitiesResourceMilestoneEvent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesResourceMilestoneEventEntity): ApiEntitiesResourceMilestoneEventEntity;
    load(this: any, reqmatch?: ApiEntitiesResourceMilestoneEventLoadMatch, ctrl?: Control): Promise<ApiEntitiesResourceMilestoneEventEntity>;
    list(this: any, reqmatch?: ApiEntitiesResourceMilestoneEventListMatch, ctrl?: Control): Promise<ApiEntitiesResourceMilestoneEventEntity[]>;
}
export { ApiEntitiesResourceMilestoneEventEntity };
