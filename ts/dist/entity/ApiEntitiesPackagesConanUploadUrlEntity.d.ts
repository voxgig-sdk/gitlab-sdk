import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanUploadUrl, ApiEntitiesPackagesConanUploadUrlCreateData } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanUploadUrlEntity extends GitlabEntityBase<ApiEntitiesPackagesConanUploadUrl> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanUploadUrlEntity): ApiEntitiesPackagesConanUploadUrlEntity;
    create(this: any, reqdata?: ApiEntitiesPackagesConanUploadUrlCreateData, ctrl?: Control): Promise<ApiEntitiesPackagesConanUploadUrlEntity>;
}
export { ApiEntitiesPackagesConanUploadUrlEntity };
