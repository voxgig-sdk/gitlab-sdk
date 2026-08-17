import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { MergeRequest, MergeRequestLoadMatch, MergeRequestUpdateData, MergeRequestRemoveMatch } from '../GitlabTypes';
declare class MergeRequestEntity extends GitlabEntityBase<MergeRequest> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MergeRequestEntity): MergeRequestEntity;
    load(this: any, reqmatch?: MergeRequestLoadMatch, ctrl?: Control): Promise<MergeRequestEntity>;
    update(this: any, reqdata?: MergeRequestUpdateData, ctrl?: Control): Promise<MergeRequestEntity>;
    remove(this: any, reqmatch?: MergeRequestRemoveMatch, ctrl?: Control): Promise<MergeRequestEntity>;
}
export { MergeRequestEntity };
