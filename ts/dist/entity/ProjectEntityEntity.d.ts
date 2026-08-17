import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectEntity, ProjectEntityCreateData } from '../GitlabTypes';
declare class ProjectEntityEntity extends GitlabEntityBase<ProjectEntity> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectEntityEntity): ProjectEntityEntity;
    create(this: any, reqdata?: ProjectEntityCreateData, ctrl?: Control): Promise<ProjectEntityEntity>;
}
export { ProjectEntityEntity };
