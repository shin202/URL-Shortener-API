import { Response } from "express"

class ApiResponser {
    successResponse = (res: Response, data: any, msg: string) => {
        return res.status(200).json({
            data: {
                status: 'success',
                msg: msg,
                short_url: data,
            }
        });
    }

    successCreatedResponse = (res: Response, data: any) => {
        return res.status(201).json({
            data: {
                status: 'success',
                msg: 'Successfully created new short url.',
                short_url: data,
            }
        });
    }

    notFoundResponse = (res: Response) => {
        return res.status(404).json({
            data: {
                status: 'error',
                msg: 'Cannot found this url.',
                short_url: null,
            }
        });
    }
}

export default new ApiResponser;