export function maskCell(num: string) {

    // num = num.replace()
    num = num.replace(/\D/g,'');
    num = num.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/,"+$1 ($2) $3-$4");
    num = num.replace(/(\d)(\d{4})$/,"$1-$2");

    return num;

    // return "(" + num.substring(0, 2) + ") " + num.substring(2, 3) + " " + num.substring(3, 7) + "-" + num.substring(7, 11);
}

export function formatarDataDia(date: string) {

    return date.substring(8, 10) + "/" + date.substring(5, 7) + "/" + date.substring(0, 4);
}
