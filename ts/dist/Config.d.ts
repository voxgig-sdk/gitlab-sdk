import { BaseFeature } from './feature/base/BaseFeature';
declare class Config {
    makeFeature(this: any, fn: string): BaseFeature;
    main: {
        name: string;
    };
    feature: {
        test: {
            options: {
                active: boolean;
            };
        };
    };
    options: {
        base: string;
        auth: {
            prefix: string;
        };
        headers: {
            "content-type": string;
        };
        entity: {
            api_entities_project_with_access: {};
            project: {};
        };
    };
    entity: {
        api_entities_project_with_access: {
            fields: ({
                name: string;
                type: string;
                short?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                load: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
        project: {
            fields: ({
                name: string;
                type: string;
                short?: undefined;
            } | {
                name: string;
                short: string;
                type: string;
            })[];
            name: string;
            op: {
                create: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                list: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            query: ({
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                                example?: undefined;
                            } | {
                                example: number;
                                kind: string;
                                name: string;
                                orig: string;
                                type: string;
                            })[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                remove: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
                update: {
                    input: string;
                    name: string;
                    points: {
                        args: {
                            params: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                            query: {
                                kind: string;
                                name: string;
                                orig: string;
                                reqd: boolean;
                                type: string;
                            }[];
                        };
                        kind: string;
                        method: string;
                        orig: string;
                        parts: string[];
                        select: {
                            exist: string[];
                        };
                        transform: {
                            req: string;
                            res: string;
                        };
                    }[];
                };
            };
            relations: {
                ancestors: never[];
            };
        };
    };
}
declare const config: Config;
export { config };
