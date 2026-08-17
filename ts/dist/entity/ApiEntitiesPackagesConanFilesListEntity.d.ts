import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesPackagesConanFilesList, ApiEntitiesPackagesConanFilesListLoadMatch } from '../GitlabTypes';
declare class ApiEntitiesPackagesConanFilesListEntity extends GitlabEntityBase<ApiEntitiesPackagesConanFilesList> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesPackagesConanFilesListEntity): ApiEntitiesPackagesConanFilesListEntity;
    load(this: any, reqmatch?: ApiEntitiesPackagesConanFilesListLoadMatch, ctrl?: Control): Promise<ApiEntitiesPackagesConanFilesListEntity>;
}
export { ApiEntitiesPackagesConanFilesListEntity };
