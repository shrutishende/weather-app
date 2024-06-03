
export function ConvertKelvinTocelcius(tempInKelvin: number) {
    const tempInCelcius = tempInKelvin - 273.15;
    return Math.floor(tempInCelcius);
}
