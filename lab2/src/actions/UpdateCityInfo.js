
export default function (cityName, cityHeader, cityInfo) {
    return {
        type: 'UPDATE_CITY',
        cityName: cityName,
        cityHeader : cityHeader,
        cityInfo: cityInfo
    }
}