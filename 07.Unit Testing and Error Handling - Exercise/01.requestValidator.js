function requestValidator(obj){
    let methods=['GET', 'POST', 'DELETE', 'CONNECT']
    let pattern=/^\*$|^[A-Za-z0-9.]+$/;
    let versions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let massageLettersException= /^([^<>\\&'"]*)$/;
if(!obj.hasOwnProperty('method') || !methods.includes(obj.method)){
    throw new Error('Invalid request header: Invalid Method');
}

    if(!obj.hasOwnProperty('uri') || !pattern.test(obj.uri)){
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!obj.hasOwnProperty('version') || !versions.includes(obj['version'])){
        throw new Error('Invalid request header: Invalid Version');
    }

    if(!obj.hasOwnProperty('message') || !massageLettersException.test(obj['message'])){
        throw new Error('Invalid request header: Invalid Message');
    }

    return obj;
}
requestValidator({
    method: 'POST',
    uri: 'home.bash',
    message: 'rm -rf /*'
})

console.log('============');

requestValidator({
 method: 'OPTIONS',
 uri: 'git.master',
 version: 'HTTP/1.1',
 message: '-recursive'
}
)