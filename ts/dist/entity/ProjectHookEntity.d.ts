import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectHook, ProjectHookRemoveMatch } from '../GitlabTypes';
declare class ProjectHookEntity extends GitlabEntityBase<ProjectHook> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectHookEntity): ProjectHookEntity;
    remove(this: any, reqmatch?: ProjectHookRemoveMatch, ctrl?: Control): Promise<ProjectHookEntity>;
}
export { ProjectHookEntity };
