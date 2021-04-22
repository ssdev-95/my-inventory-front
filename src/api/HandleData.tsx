export const Formateer = {
    formatDate(date: string) {
        let data = date.split('-')

        return `${data[2]}/${data[1]}/${data[0]}`
    },
    formatUnity(quantity: number) {
        return `${quantity} und`
    },
    formatCategory(category: string) {
        return category.replace(/([A-Z])\g/,`$1`).toLowerCase()
    },
    formatId(category: string, date:string) {
        const num = date.split('-')
        
        const id = `${category}-${Number(Formateer.evaluate(1, Number(num[0]))+Formateer.evaluate(1, Number(num[1]))+Formateer.evaluate(1, Number(num[2])))}`

        return id
    },
    evaluate(min: number, max: number) {
        return Math.round((Math.random()*(max-min)+min)*.65)
    }
}