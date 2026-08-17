import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Cluster, ClusterRemoveMatch } from '../GitlabTypes';
declare class ClusterEntity extends GitlabEntityBase<Cluster> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ClusterEntity): ClusterEntity;
    remove(this: any, reqmatch?: ClusterRemoveMatch, ctrl?: Control): Promise<ClusterEntity>;
}
export { ClusterEntity };
