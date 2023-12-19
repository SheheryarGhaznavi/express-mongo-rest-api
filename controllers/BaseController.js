const asyncHandler = require('express-async-handler');

class BaseController {

    callFunction = (function_name) => {
        return asyncHandler(this[function_name]);
    }
}

module.exports = BaseController