import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Project, ProjectLoadMatch, ProjectCreateData, ProjectUpdateData, ProjectRemoveMatch } from '../GitlabTypes';
declare class ProjectEntityClient extends GitlabEntityBase<Project> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectEntityClient): ProjectEntityClient;
    load(this: any, reqmatch?: ProjectLoadMatch, ctrl?: Control): Promise<ProjectEntityClient>;
    create(this: any, reqdata?: ProjectCreateData, ctrl?: Control): Promise<ProjectEntityClient>;
    update(this: any, reqdata?: ProjectUpdateData, ctrl?: Control): Promise<ProjectEntityClient>;
    remove(this: any, reqmatch?: ProjectRemoveMatch, ctrl?: Control): Promise<ProjectEntityClient>;
}
export { ProjectEntityClient };
