import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanRevision, ApiEntitiesPackagesConanRevisionLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanRevisionEntity extends GitlabEntityBase<ApiEntitiesPackagesConanRevision> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanRevisionEntity): ApiEntitiesPackagesConanRevisionEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanRevisionLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanRevisionEntity>;
}
export { ApiEntitiesPackagesConanRevisionEntity };
