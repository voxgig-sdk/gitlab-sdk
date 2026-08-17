import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectExport, ProjectExportLoadMatch, ProjectExportCreateData } from '../GitlabTypes';
declare class ProjectExportEntity extends GitlabEntityBase<ProjectExport> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectExportEntity): ProjectExportEntity;
    load(this: any, reqmatch?: ProjectExportLoadMatch, ctrl?: Control): Promise<ProjectExportEntity>;
    create(this: any, reqdata?: ProjectExportCreateData, ctrl?: Control): Promise<ProjectExportEntity>;
}
export { ProjectExportEntity };
