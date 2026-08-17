import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectImportEntity, ProjectImportEntityCreateData } from '../GitlabTypes';
declare class ProjectImportEntityEntity extends GitlabEntityBase<ProjectImportEntity> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectImportEntityEntity): ProjectImportEntityEntity;
    create(this: any, reqdata?: ProjectImportEntityCreateData, ctrl?: Control): Promise<ProjectImportEntityEntity>;
}
export { ProjectImportEntityEntity };
