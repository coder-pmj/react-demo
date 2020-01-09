import BMap from 'BMap';
export default {
    formateDate(time) {
        if (!time) {
            return null
        }
        let date = new Date(time)
        return `${date.getFullYear()}/${this.format(date.getMonth() + 1)}/${this.format(date.getDate())}  ${this.format(date.getHours())}:${this.format(date.getMinutes())}:${this.format(date.getSeconds())}`
    },
    //
    format(v) {
        if (v >= 10) {
            return v
        }
        return `0${v}`
    },
    setLocation(ref) {
        const myCity = new BMap.LocalCity();
        myCity.get(function (result) {
            const cityName = result.name
            ref.current.innerHTML = `当前城市：<span style="color:red;float:right">${cityName}</span>`
        })
    }

}