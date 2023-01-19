import { Request, Response, NextFunction } from "express";
declare class UrlShortenerController {
    /**
     * Display listing of URLs.
     *
     * @param req
     * @param res
     * @param next
     */
    index: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    /**
     * Create a new short URL.
     *
     * @param req
     * @param res
     * @param next
     */
    store: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>>>;
    show: (req: Request, res: Response, next: NextFunction) => Promise<Response<any, Record<string, any>> | undefined>;
}
declare const _default: UrlShortenerController;
export default _default;
//# sourceMappingURL=UrlShortenerController.d.ts.map