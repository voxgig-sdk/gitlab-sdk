import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectsJobTokenScope, ProjectsJobTokenScopeUpdateData, ProjectsJobTokenScopeRemoveMatch } from '../GitlabTypes';
declare class ProjectsJobTokenScopeEntity extends GitlabEntityBase<ProjectsJobTokenScope> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectsJobTokenScopeEntity): ProjectsJobTokenScopeEntity;
    update(this: any, reqdata?: ProjectsJobTokenScopeUpdateData, ctrl?: Control): Promise<ProjectsJobTokenScopeEntity>;
    remove(this: any, reqmatch?: ProjectsJobTokenScopeRemoveMatch, ctrl?: Control): Promise<ProjectsJobTokenScopeEntity>;
}
export { ProjectsJobTokenScopeEntity };
