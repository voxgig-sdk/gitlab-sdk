import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Application, ApplicationRemoveMatch } from '../GitlabTypes';
declare class ApplicationEntity extends GitlabEntityBase<Application> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApplicationEntity): ApplicationEntity;
    remove(this: any, reqmatch?: ApplicationRemoveMatch, ctrl?: Control): Promise<ApplicationEntity>;
}
export { ApplicationEntity };
