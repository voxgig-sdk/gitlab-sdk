import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { PersonalAccessToken, PersonalAccessTokenRemoveMatch } from '../GitlabTypes';
declare class PersonalAccessTokenEntity extends GitlabEntityBase<PersonalAccessToken> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: PersonalAccessTokenEntity): PersonalAccessTokenEntity;
    remove(this: any, reqmatch?: PersonalAccessTokenRemoveMatch, ctrl?: Control): Promise<PersonalAccessTokenEntity>;
}
export { PersonalAccessTokenEntity };
