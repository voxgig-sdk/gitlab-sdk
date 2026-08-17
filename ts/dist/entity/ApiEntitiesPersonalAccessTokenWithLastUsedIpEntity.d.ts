import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPersonalAccessTokenWithLastUsedIp, ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch, ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch } from '../GitlabTypes';
declare class ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity extends GitlabEntityBase<ApiEntitiesPersonalAccessTokenWithLastUsedIp> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity): ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity;
    load(this: any, reqmatch?: ApiEntitiesPersonalAccessTokenWithLastUsedIpLoadMatch, ctrl?: Control): Promise<ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity>;
    list(this: any, reqmatch?: ApiEntitiesPersonalAccessTokenWithLastUsedIpListMatch, ctrl?: Control): Promise<ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity[]>;
}
export { ApiEntitiesPersonalAccessTokenWithLastUsedIpEntity };
