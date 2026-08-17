import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesErrorTrackingClientKey, ApiEntitiesErrorTrackingClientKeyListMatch, ApiEntitiesErrorTrackingClientKeyCreateData } from '../GitlabTypes';
declare class ApiEntitiesErrorTrackingClientKeyEntity extends GitlabEntityBase<ApiEntitiesErrorTrackingClientKey> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesErrorTrackingClientKeyEntity): ApiEntitiesErrorTrackingClientKeyEntity;
    list(this: any, reqmatch?: ApiEntitiesErrorTrackingClientKeyListMatch, ctrl?: Control): Promise<ApiEntitiesErrorTrackingClientKeyEntity[]>;
    create(this: any, reqdata?: ApiEntitiesErrorTrackingClientKeyCreateData, ctrl?: Control): Promise<ApiEntitiesErrorTrackingClientKeyEntity>;
}
export { ApiEntitiesErrorTrackingClientKeyEntity };
