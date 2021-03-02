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
    formatId(category: string, index:number) {
        return `${category}-0${index+1}`
    }
}