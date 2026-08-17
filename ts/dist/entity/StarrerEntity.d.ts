import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Starrer, StarrerListMatch } from '../GitlabTypes';
declare class StarrerEntity extends GitlabEntityBase<Starrer> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: StarrerEntity): StarrerEntity;
    list(this: any, reqmatch?: StarrerListMatch, ctrl?: Control): Promise<StarrerEntity[]>;
}
export { StarrerEntity };
