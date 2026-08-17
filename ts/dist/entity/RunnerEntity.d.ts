import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Runner, RunnerCreateData, RunnerRemoveMatch } from '../GitlabTypes';
declare class RunnerEntity extends GitlabEntityBase<Runner> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RunnerEntity): RunnerEntity;
    create(this: any, reqdata?: RunnerCreateData, ctrl?: Control): Promise<RunnerEntity>;
    remove(this: any, reqmatch?: RunnerRemoveMatch, ctrl?: Control): Promise<RunnerEntity>;
}
export { RunnerEntity };
