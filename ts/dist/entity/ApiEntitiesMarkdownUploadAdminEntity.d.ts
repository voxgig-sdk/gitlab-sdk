import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesMarkdownUploadAdmin, ApiEntitiesMarkdownUploadAdminListMatch } from '../GitlabTypes';
declare class ApiEntitiesMarkdownUploadAdminEntity extends GitlabEntityBase<ApiEntitiesMarkdownUploadAdmin> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesMarkdownUploadAdminEntity): ApiEntitiesMarkdownUploadAdminEntity;
    list(this: any, reqmatch?: ApiEntitiesMarkdownUploadAdminListMatch, ctrl?: Control): Promise<ApiEntitiesMarkdownUploadAdminEntity[]>;
}
export { ApiEntitiesMarkdownUploadAdminEntity };
