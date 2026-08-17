import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { GoProxy, GoProxyLoadMatch } from '../GitlabTypes';
declare class GoProxyEntity extends GitlabEntityBase<GoProxy> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: GoProxyEntity): GoProxyEntity;
    load(this: any, reqmatch?: GoProxyLoadMatch, ctrl?: Control): Promise<GoProxyEntity>;
}
export { GoProxyEntity };
