import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPublicGroupDetail, ApiEntitiesPublicGroupDetailListMatch } from '../GitlabTypes';
declare class ApiEntitiesPublicGroupDetailEntity extends GitlabEntityBase<ApiEntitiesPublicGroupDetail> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPublicGroupDetailEntity): ApiEntitiesPublicGroupDetailEntity;
    list(this: any, reqmatch?: ApiEntitiesPublicGroupDetailListMatch, ctrl?: Control): Promise<ApiEntitiesPublicGroupDetailEntity[]>;
}
export { ApiEntitiesPublicGroupDetailEntity };
