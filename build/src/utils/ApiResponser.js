"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ApiResponser {
    constructor() {
        this.successResponse = (res, data, msg) => {
            return res.status(200).json({
                data: {
                    status: 'success',
                    msg: msg,
                    short_url: data,
                }
            });
        };
        this.successCreatedResponse = (res, data) => {
            return res.status(201).json({
                data: {
                    status: 'success',
                    msg: 'Successfully created new short url.',
                    short_url: data,
                }
            });
        };
        this.notFoundResponse = (res) => {
            return res.status(404).json({
                data: {
                    status: 'error',
                    msg: 'Cannot found this url.',
                    short_url: null,
                }
            });
        };
    }
}
exports.default = new ApiResponser;
//# sourceMappingURL=ApiResponser.js.map