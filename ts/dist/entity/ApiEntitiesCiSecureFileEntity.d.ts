import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesCiSecureFile, ApiEntitiesCiSecureFileLoadMatch, ApiEntitiesCiSecureFileCreateData } from '../GitlabTypes';
declare class ApiEntitiesCiSecureFileEntity extends GitlabEntityBase<ApiEntitiesCiSecureFile> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesCiSecureFileEntity): ApiEntitiesCiSecureFileEntity;
    load(this: any, reqmatch?: ApiEntitiesCiSecureFileLoadMatch, ctrl?: Control): Promise<ApiEntitiesCiSecureFileEntity>;
    create(this: any, reqdata?: ApiEntitiesCiSecureFileCreateData, ctrl?: Control): Promise<ApiEntitiesCiSecureFileEntity>;
}
export { ApiEntitiesCiSecureFileEntity };
