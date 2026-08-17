import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Wiki, WikiRemoveMatch } from '../GitlabTypes';
declare class WikiEntity extends GitlabEntityBase<Wiki> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: WikiEntity): WikiEntity;
    remove(this: any, reqmatch?: WikiRemoveMatch, ctrl?: Control): Promise<WikiEntity>;
}
export { WikiEntity };
