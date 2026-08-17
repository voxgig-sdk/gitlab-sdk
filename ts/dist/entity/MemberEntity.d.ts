import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Member, MemberRemoveMatch } from '../GitlabTypes';
declare class MemberEntity extends GitlabEntityBase<Member> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: MemberEntity): MemberEntity;
    remove(this: any, reqmatch?: MemberRemoveMatch, ctrl?: Control): Promise<MemberEntity>;
}
export { MemberEntity };
