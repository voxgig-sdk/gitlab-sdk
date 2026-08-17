import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesProjectUpload, ApiEntitiesProjectUploadCreateData } from '../GitlabTypes';
declare class ApiEntitiesProjectUploadEntity extends GitlabEntityBase<ApiEntitiesProjectUpload> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesProjectUploadEntity): ApiEntitiesProjectUploadEntity;
    create(this: any, reqdata?: ApiEntitiesProjectUploadCreateData, ctrl?: Control): Promise<ApiEntitiesProjectUploadEntity>;
}
export { ApiEntitiesProjectUploadEntity };
