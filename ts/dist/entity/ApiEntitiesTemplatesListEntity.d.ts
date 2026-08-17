import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTemplatesList, ApiEntitiesTemplatesListLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesTemplatesListEntity extends GitlabEntityBase<ApiEntitiesTemplatesList> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTemplatesListEntity): ApiEntitiesTemplatesListEntity;
    load(this: any, reqmatch?: ApiEntitiesTemplatesListLoadMatch, ctrl?: Control): Promise<ApiEntitiesTemplatesListEntity>;
}
export { ApiEntitiesTemplatesListEntity };
