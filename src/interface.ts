interface Husband{
    sex: string;
    interest: string;
    mai?: boolean
}

const my:Husband = {
    sex: 'male',
    interest: 'read',
    mai: true,
};

console.log(my);

interface SearchMan{
    (source: string, sunString: string): boolean;
}

const mySearch:SearchMan = (source: string, subString: string):boolean => {
    return source.indexOf(subString) !== -1;
}

console.log(mySearch('高富帅', '穷'));
