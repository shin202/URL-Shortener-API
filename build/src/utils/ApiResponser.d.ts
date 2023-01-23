import { Response } from "express";
declare class ApiResponser {
    successResponse: (res: Response, data: any, msg: string) => Response<any, Record<string, any>>;
    successCreatedResponse: (res: Response, data: any) => Response<any, Record<string, any>>;
    notFoundResponse: (res: Response) => Response<any, Record<string, any>>;
}
declare const _default: ApiResponser;
export default _default;
//# sourceMappingURL=ApiResponser.d.ts.map