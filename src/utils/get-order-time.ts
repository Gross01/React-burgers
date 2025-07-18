export function getOrderTime(order: string): string[] {
    const today = new Date()
    const orderDay = new Date(order)

    const day = today.getDate() - orderDay.getDate() === 0
        ? 'Cегодня'
        : today.getDate() - orderDay.getDate() === 1
            ? 'Вчера'
            : today.getDate() - orderDay.getDate() === 2
                ? 'Позавчера'
                :  String(orderDay.getDate())

    const time = `${formatNumber(orderDay.getHours())}:${formatNumber(orderDay.getMinutes())}`

    return [day, time]
}

const formatNumber = (number: number): string | number => {
    if (number < 10) return '0' + number
    return number
}