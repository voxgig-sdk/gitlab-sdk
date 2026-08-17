import { GitlabEntityBase } from '../GitlabEntityBase';
import type { GitlabSDK } from '../GitlabSDK';
import type { Control } from '../types';
import type { ApiEntitiesAwardEmoji, ApiEntitiesAwardEmojiLoadMatch, ApiEntitiesAwardEmojiListMatch, ApiEntitiesAwardEmojiCreateData } from '../GitlabTypes';
declare class ApiEntitiesAwardEmojiEntity extends GitlabEntityBase<ApiEntitiesAwardEmoji> {
    constructor(client: GitlabSDK, entopts: any);
    make(this: ApiEntitiesAwardEmojiEntity): ApiEntitiesAwardEmojiEntity;
    load(this: any, reqmatch?: ApiEntitiesAwardEmojiLoadMatch, ctrl?: Control): Promise<ApiEntitiesAwardEmojiEntity>;
    list(this: any, reqmatch?: ApiEntitiesAwardEmojiListMatch, ctrl?: Control): Promise<ApiEntitiesAwardEmojiEntity[]>;
    create(this: any, reqdata?: ApiEntitiesAwardEmojiCreateData, ctrl?: Control): Promise<ApiEntitiesAwardEmojiEntity>;
}
export { ApiEntitiesAwardEmojiEntity };
