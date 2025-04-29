function decimalToBase62(decimal) {
    const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let hsed_str = '';
    while(decimal > 0) {
        hsed_str = str[decimal % 62] + hsed_str;
        decimal = Math.floor(decimal/62);
    }
    return hsed_str;
}