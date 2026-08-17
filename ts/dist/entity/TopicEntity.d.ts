import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Topic, TopicRemoveMatch } from '../GitlabTypes';
declare class TopicEntity extends GitlabEntityBase<Topic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    remove(this: any, reqmatch?: TopicRemoveMatch, ctrl?: Control): Promise<TopicEntity>;
}
export { TopicEntity };
