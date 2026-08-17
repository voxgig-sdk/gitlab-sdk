import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesDeployKey, ApiEntitiesDeployKeyListMatch, ApiEntitiesDeployKeyCreateData, ApiEntitiesDeployKeyUpdateData } from '../GitlabTypes';
declare class ApiEntitiesDeployKeyEntity extends GitlabEntityBase<ApiEntitiesDeployKey> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesDeployKeyEntity): ApiEntitiesDeployKeyEntity;
    list(this: any, reqmatch?: ApiEntitiesDeployKeyListMatch, ctrl?: Control): Promise<ApiEntitiesDeployKeyEntity[]>;
    create(this: any, reqdata?: ApiEntitiesDeployKeyCreateData, ctrl?: Control): Promise<ApiEntitiesDeployKeyEntity>;
    update(this: any, reqdata?: ApiEntitiesDeployKeyUpdateData, ctrl?: Control): Promise<ApiEntitiesDeployKeyEntity>;
}
export { ApiEntitiesDeployKeyEntity };
