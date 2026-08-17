import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectsTopic, ApiEntitiesProjectsTopicLoadMatch, ApiEntitiesProjectsTopicCreateData, ApiEntitiesProjectsTopicUpdateData } from '../GitlabTypes';
declare class ApiEntitiesProjectsTopicEntity extends GitlabEntityBase<ApiEntitiesProjectsTopic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectsTopicEntity): ApiEntitiesProjectsTopicEntity;
    load(this: any, reqmatch?: ApiEntitiesProjectsTopicLoadMatch, ctrl?: Control): Promise<ApiEntitiesProjectsTopicEntity>;
    create(this: any, reqdata?: ApiEntitiesProjectsTopicCreateData, ctrl?: Control): Promise<ApiEntitiesProjectsTopicEntity>;
    update(this: any, reqdata?: ApiEntitiesProjectsTopicUpdateData, ctrl?: Control): Promise<ApiEntitiesProjectsTopicEntity>;
}
export { ApiEntitiesProjectsTopicEntity };
