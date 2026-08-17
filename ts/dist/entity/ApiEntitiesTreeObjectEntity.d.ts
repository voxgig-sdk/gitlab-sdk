import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesTreeObject, ApiEntitiesTreeObjectLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesTreeObjectEntity extends GitlabEntityBase<ApiEntitiesTreeObject> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesTreeObjectEntity): ApiEntitiesTreeObjectEntity;
    load(this: any, reqmatch?: ApiEntitiesTreeObjectLoadMatch, ctrl?: Control): Promise<ApiEntitiesTreeObjectEntity>;
}
export { ApiEntitiesTreeObjectEntity };
