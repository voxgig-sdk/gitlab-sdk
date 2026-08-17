import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { UnleashApi, UnleashApiLoadMatch } from '../GitlabTypes';
declare class UnleashApiEntity extends GitlabEntityBase<UnleashApi> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: UnleashApiEntity): UnleashApiEntity;
    load(this: any, reqmatch?: UnleashApiLoadMatch, ctrl?: Control): Promise<UnleashApiEntity>;
}
export { UnleashApiEntity };
