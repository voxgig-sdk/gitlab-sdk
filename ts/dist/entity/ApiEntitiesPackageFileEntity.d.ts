import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackageFile, ApiEntitiesPackageFileListMatch } from '../GitlabTypes';
declare class ApiEntitiesPackageFileEntity extends GitlabEntityBase<ApiEntitiesPackageFile> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackageFileEntity): ApiEntitiesPackageFileEntity;
    list(this: any, reqmatch?: ApiEntitiesPackageFileListMatch, ctrl?: Control): Promise<ApiEntitiesPackageFileEntity[]>;
}
export { ApiEntitiesPackageFileEntity };
