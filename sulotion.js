function checkVariable(input) {
    switch (typeof input) {
        case 'string':
            return "string";
        case 'number':
            return "number";
        case 'boolean':
            return "boolean";
        case 'bigint':
            return "bigint";
        case 'undefined':
            return "undefined";
        case 'object':
            // This handles both null and actual objects
            return "object";
        default:
            return "unknown";
    }
}
