import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesApplicationWithSecret, ApiEntitiesApplicationWithSecretCreateData } from '../GitlabTypes';
declare class ApiEntitiesApplicationWithSecretEntity extends GitlabEntityBase<ApiEntitiesApplicationWithSecret> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesApplicationWithSecretEntity): ApiEntitiesApplicationWithSecretEntity;
    create(this: any, reqdata?: ApiEntitiesApplicationWithSecretCreateData, ctrl?: Control): Promise<ApiEntitiesApplicationWithSecretEntity>;
}
export { ApiEntitiesApplicationWithSecretEntity };
