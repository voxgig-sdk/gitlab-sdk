import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Namespace, NamespaceRemoveMatch } from '../GitlabTypes';
declare class NamespaceEntity extends GitlabEntityBase<Namespace> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: NamespaceEntity): NamespaceEntity;
    remove(this: any, reqmatch?: NamespaceRemoveMatch, ctrl?: Control): Promise<NamespaceEntity>;
}
export { NamespaceEntity };
