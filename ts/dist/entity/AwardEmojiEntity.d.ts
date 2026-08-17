import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { AwardEmoji, AwardEmojiRemoveMatch } from '../GitlabTypes';
declare class AwardEmojiEntity extends GitlabEntityBase<AwardEmoji> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: AwardEmojiEntity): AwardEmojiEntity;
    remove(this: any, reqmatch?: AwardEmojiRemoveMatch, ctrl?: Control): Promise<AwardEmojiEntity>;
}
export { AwardEmojiEntity };
