import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ProjectSnippet, ProjectSnippetRemoveMatch } from '../GitlabTypes';
declare class ProjectSnippetEntity extends GitlabEntityBase<ProjectSnippet> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ProjectSnippetEntity): ProjectSnippetEntity;
    remove(this: any, reqmatch?: ProjectSnippetRemoveMatch, ctrl?: Control): Promise<ProjectSnippetEntity>;
}
export { ProjectSnippetEntity };
