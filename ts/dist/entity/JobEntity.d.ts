import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Job, JobLoadMatch, JobCreateData, JobUpdateData } from '../GitlabTypes';
declare class JobEntity extends GitlabEntityBase<Job> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    load(this: any, reqmatch?: JobLoadMatch, ctrl?: Control): Promise<JobEntity>;
    create(this: any, reqdata?: JobCreateData, ctrl?: Control): Promise<JobEntity>;
    update(this: any, reqdata?: JobUpdateData, ctrl?: Control): Promise<JobEntity>;
}
export { JobEntity };
