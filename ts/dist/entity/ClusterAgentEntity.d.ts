import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ClusterAgent, ClusterAgentRemoveMatch } from '../GitlabTypes';
declare class ClusterAgentEntity extends GitlabEntityBase<ClusterAgent> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ClusterAgentEntity): ClusterAgentEntity;
    remove(this: any, reqmatch?: ClusterAgentRemoveMatch, ctrl?: Control): Promise<ClusterAgentEntity>;
}
export { ClusterAgentEntity };
