import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { Participant, ParticipantListMatch } from '../GitlabTypes';
declare class ParticipantEntity extends GitlabEntityBase<Participant> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ParticipantEntity): ParticipantEntity;
    list(this: any, reqmatch?: ParticipantListMatch, ctrl?: Control): Promise<ParticipantEntity[]>;
}
export { ParticipantEntity };
