import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Page, PageLoadMatch, PageUpdateData, PageRemoveMatch } from '../GitlabTypes';
declare class PageEntity extends GitlabEntityBase<Page> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: PageEntity): PageEntity;
    load(this: any, reqmatch?: PageLoadMatch, ctrl?: Control): Promise<PageEntity>;
    update(this: any, reqdata?: PageUpdateData, ctrl?: Control): Promise<PageEntity>;
    remove(this: any, reqmatch?: PageRemoveMatch, ctrl?: Control): Promise<PageEntity>;
}
export { PageEntity };
