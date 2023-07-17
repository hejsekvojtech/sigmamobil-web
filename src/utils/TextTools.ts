export function formatPhoneNumber(phoneNumber: string): string {
    let formattedNumber = "";

    for (let i = 0; i < phoneNumber.length; i++) {
        formattedNumber += phoneNumber[i];

        if ((i + 1) % 3 === 0 && i !== phoneNumber.length - 1) {
            formattedNumber += " ";
        }
    }

    return formattedNumber;
}
