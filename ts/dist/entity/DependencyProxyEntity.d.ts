import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { DependencyProxy, DependencyProxyRemoveMatch } from '../GitlabTypes';
declare class DependencyProxyEntity extends GitlabEntityBase<DependencyProxy> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: DependencyProxyEntity): DependencyProxyEntity;
    remove(this: any, reqmatch?: DependencyProxyRemoveMatch, ctrl?: Control): Promise<DependencyProxyEntity>;
}
export { DependencyProxyEntity };
