import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectImport, ProjectImportCreateData } from '../GitlabTypes';
declare class ProjectImportEntityClient extends GitlabEntityBase<ProjectImport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectImportEntityClient): ProjectImportEntityClient;
    create(this: any, reqdata?: ProjectImportCreateData, ctrl?: Control): Promise<ProjectImportEntityClient>;
}
export { ProjectImportEntityClient };
