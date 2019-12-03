
export default function(cityName, cityInfo) {
    return {
        type: 'UPDATE_CITY',
        cityName: cityName,
        cityInfo: cityInfo
    }
}