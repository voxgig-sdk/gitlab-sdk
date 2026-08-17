import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { IssuesStatistic, IssuesStatisticLoadMatch } from '../GitlabTypes';
declare class IssuesStatisticEntity extends GitlabEntityBase<IssuesStatistic> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: IssuesStatisticEntity): IssuesStatisticEntity;
    load(this: any, reqmatch?: IssuesStatisticLoadMatch, ctrl?: Control): Promise<IssuesStatisticEntity>;
}
export { IssuesStatisticEntity };
