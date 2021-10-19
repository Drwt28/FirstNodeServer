export function buildResponse({data,message,code})
{
    return {
        code:code,
        data:data,
        message:message
    };
}