import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiBridge, ApiEntitiesCiBridgeListMatch } from '../GitlabTypes';
declare class ApiEntitiesCiBridgeEntity extends GitlabEntityBase<ApiEntitiesCiBridge> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiBridgeEntity): ApiEntitiesCiBridgeEntity;
    list(this: any, reqmatch?: ApiEntitiesCiBridgeListMatch, ctrl?: Control): Promise<ApiEntitiesCiBridgeEntity[]>;
}
export { ApiEntitiesCiBridgeEntity };
