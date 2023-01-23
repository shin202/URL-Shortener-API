import { Request, Response } from "express";
declare class UrlShortenerController {
    /**
    * Display listing of urls.
    *
    * @param _req
    * @param res
    * @returns
    */
    index: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    /**
     * Create a new short url.
     *
     * @param req
     * @param res
     * @returns
     */
    store: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    /**
     * Redirect to the original url.
     *
     * @param req
     * @param res
     * @returns
     */
    show: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    destroy: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}
declare const _default: UrlShortenerController;
export default _default;
//# sourceMappingURL=UrlShortenerController.d.ts.map