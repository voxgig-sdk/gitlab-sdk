import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Rubygem, RubygemLoadMatch } from '../GitlabTypes';
declare class RubygemEntity extends GitlabEntityBase<Rubygem> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: RubygemEntity): RubygemEntity;
    load(this: any, reqmatch?: RubygemLoadMatch, ctrl?: Control): Promise<RubygemEntity>;
}
export { RubygemEntity };
