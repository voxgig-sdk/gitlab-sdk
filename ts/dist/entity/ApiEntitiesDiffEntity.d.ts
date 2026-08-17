import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDiff, ApiEntitiesDiffLoadMatch, ApiEntitiesDiffListMatch } from '../GitlabTypes';
declare class ApiEntitiesDiffEntity extends GitlabEntityBase<ApiEntitiesDiff> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDiffEntity): ApiEntitiesDiffEntity;
    load(this: any, reqmatch?: ApiEntitiesDiffLoadMatch, ctrl?: Control): Promise<ApiEntitiesDiffEntity>;
    list(this: any, reqmatch?: ApiEntitiesDiffListMatch, ctrl?: Control): Promise<ApiEntitiesDiffEntity[]>;
}
export { ApiEntitiesDiffEntity };
