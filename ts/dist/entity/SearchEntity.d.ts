import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Search, SearchLoadMatch } from '../GitlabTypes';
declare class SearchEntity extends GitlabEntityBase<Search> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: SearchEntity): SearchEntity;
    load(this: any, reqmatch?: SearchLoadMatch, ctrl?: Control): Promise<SearchEntity>;
}
export { SearchEntity };
