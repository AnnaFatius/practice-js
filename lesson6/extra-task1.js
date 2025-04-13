function shortLongShort(str1 = '', str2 = '') {
    if(str1.length > str2.length) {
        console.log(`${str2}${str1}${str2}`)
    } else if (str1.length < str2.length) {
        console.log(`${str1}${str2}${str1}`)
    }
}

shortLongShort('AAAA', 'bbb')
shortLongShort('AA', 'bbb')
shortLongShort('1', '22')
shortLongShort('22', '1')
shortLongShort('  ', '1')