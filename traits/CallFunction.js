const asyncHandler = require('express-async-handler');

const callFunction = (function_name2, class_name) => {
    
    console.log(this);
    console.log(class_name);
    console.log(this.function_name2);
    return asyncHandler(this.get);
}

module.exports = callFunction;