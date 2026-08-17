import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesIssuableTimeStat, ApiEntitiesIssuableTimeStatLoadMatch, ApiEntitiesIssuableTimeStatCreateData } from '../GitlabTypes';
declare class ApiEntitiesIssuableTimeStatEntity extends GitlabEntityBase<ApiEntitiesIssuableTimeStat> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesIssuableTimeStatEntity): ApiEntitiesIssuableTimeStatEntity;
    load(this: any, reqmatch?: ApiEntitiesIssuableTimeStatLoadMatch, ctrl?: Control): Promise<ApiEntitiesIssuableTimeStatEntity>;
    create(this: any, reqdata?: ApiEntitiesIssuableTimeStatCreateData, ctrl?: Control): Promise<ApiEntitiesIssuableTimeStatEntity>;
}
export { ApiEntitiesIssuableTimeStatEntity };
