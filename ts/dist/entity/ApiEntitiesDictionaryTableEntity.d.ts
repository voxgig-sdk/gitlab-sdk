import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDictionaryTable, ApiEntitiesDictionaryTableLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesDictionaryTableEntity extends GitlabEntityBase<ApiEntitiesDictionaryTable> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDictionaryTableEntity): ApiEntitiesDictionaryTableEntity;
    load(this: any, reqmatch?: ApiEntitiesDictionaryTableLoadMatch, ctrl?: Control): Promise<ApiEntitiesDictionaryTableEntity>;
}
export { ApiEntitiesDictionaryTableEntity };
