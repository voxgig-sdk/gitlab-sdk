import { ApiEntitiesProjectWithAccessEntity } from './entity/ApiEntitiesProjectWithAccessEntity';
import { ProjectEntity } from './entity/ProjectEntity';
export type * from './GitlabTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { GitlabEntityBase } from './GitlabEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
declare class GitlabSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    _rawRequest(fetchargs?: any): Promise<Error | {
        ok: boolean;
        status: number;
        headers: any;
        data: any;
        err?: undefined;
    } | {
        ok: boolean;
        err: any;
        status?: undefined;
        headers?: undefined;
        data?: undefined;
    }>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    ApiEntitiesProjectWithAccess(entopts?: Record<string, any>): ApiEntitiesProjectWithAccessEntity;
    Project(entopts?: Record<string, any>): ProjectEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): GitlabSDK;
    tester(testopts?: any, sdkopts?: any): GitlabSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof GitlabSDK;
export { stdutil, config, BaseFeature, GitlabEntityBase, GitlabSDK, SDK, };
