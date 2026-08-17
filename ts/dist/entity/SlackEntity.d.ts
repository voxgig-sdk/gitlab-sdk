import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Slack, SlackCreateData } from '../GitlabTypes';
declare class SlackEntity extends GitlabEntityBase<Slack> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: SlackEntity): SlackEntity;
    create(this: any, reqdata?: SlackCreateData, ctrl?: Control): Promise<SlackEntity>;
}
export { SlackEntity };
