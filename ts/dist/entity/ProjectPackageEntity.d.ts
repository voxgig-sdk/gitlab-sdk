import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectPackage, ProjectPackageRemoveMatch } from '../GitlabTypes';
declare class ProjectPackageEntity extends GitlabEntityBase<ProjectPackage> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectPackageEntity): ProjectPackageEntity;
    remove(this: any, reqmatch?: ProjectPackageRemoveMatch, ctrl?: Control): Promise<ProjectPackageEntity>;
}
export { ProjectPackageEntity };
