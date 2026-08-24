import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Project, ProjectListMatch, ProjectCreateData, ProjectUpdateData, ProjectRemoveMatch } from '../GitlabTypes';
declare class ProjectEntity extends GitlabEntityBase<Project> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectEntity): ProjectEntity;
    list(this: any, reqmatch?: ProjectListMatch, ctrl?: Control): Promise<ProjectEntity[]>;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntity>;
    update(this: any, reqdata?: ProjectUpdateData, ctrl?: Control): Promise<ProjectEntity>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntity>;
}
export { ProjectEntity };
