import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectAvatar, ProjectAvatarLoadMatch } from '../GitlabTypes';
declare class ProjectAvatarEntity extends GitlabEntityBase<ProjectAvatar> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectAvatarEntity): ProjectAvatarEntity;
    load(this: any, reqmatch?: ProjectAvatarLoadMatch, ctrl?: Control): Promise<ProjectAvatarEntity>;
}
export { ProjectAvatarEntity };
