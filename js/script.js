// массив данных погоды на 10 дней
let items = [{
        date: 1564603200000,
        temperature: {
            night: 16,
            day: 26,
        },
        cloudiness: 'Ясно',
        snow: false,
        rain: false,
    },
    {
        date: 1564689600000,
        temperature: {
            night: 19,
            day: 29,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: true,
    },
    {
        date: 1564776000000,
        temperature: {
            night: 12,
            day: 21,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: false,
    },
    {
        date: 1564862400000,
        temperature: {
            night: 16,
            day: 26,
        },
        cloudiness: 'Ясно',
        snow: false,
        rain: false,
    },
    {
        date: 1564948800000,
        temperature: {
            night: 19,
            day: 23,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: true,
    },
    {
        date: 1565035200000,
        temperature: {
            night: 12,
            day: 21,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: false,
    },
    {
        date: 1565121600000,
        temperature: {
            night: 16,
            day: 26,
        },
        cloudiness: 'Ясно',
        snow: false,
        rain: false,
    },
    {
        date: 1565208000000,
        temperature: {
            night: 19,
            day: 29,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: true,
    },

    {
        date: 1565294400000,
        temperature: {
            night: 12,
            day: 21,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: false,
    },

    {
        date: 1565380800000,
        temperature: {
            night: 12,
            day: 21,
        },
        cloudiness: 'Облачно',
        snow: false,
        rain: false,
    }
]

let time = new Date().getTime()

let itemWidth = 150

let slider = document.querySelector(".slider")
let sliderContainer = document.querySelector(".slider-container")
let sliderRow = document.querySelector(".slider-rows")

let childElItem;
for (let i = 0; i < items.length; i++) {
    let item = items[i]
    let itemDate = new Date(item.date)
    let divWeather = document.querySelector(".weather")

    childElItem = document.createElement("div")
    childElItem.setAttribute("class", "weather-item")

    divWeather.appendChild(childElItem)

    let precipitation = ""

    switch (true) {
        case !item.snow && !item.rain:
            precipitation = "без осадков"
            break
        case !item.snow && item.rain:
            precipitation = "Дождь"
            break
        case item.snow && !item.rain:
            precipitation = "Снег"
            break
        default:
            precipitation = "Снег c Дождем"
            break
    }


    let iconWeather = ""
    switch (true) {
        case !item.snow && !item.rain && item.cloudiness !== 'Облачно':
            iconWeather = "icon-sun"
            break
        case !item.snow && !item.rain && item.cloudiness == 'Облачно':
            iconWeather = "icon-cloud"
            break
        case !item.snow && item.rain:
            iconWeather = "icon-rain"
            break
        case item.snow && !item.rain:
            iconWeather = "Снег"
            break
        default:
            iconWeather = "Снег c Дождем"
            break
    }

    // Add items
    const divItem = divWeather.children[i]
    divItem.innerHTML = `<div class='weather-item-bar'><div class='weather-item-date'>
     <p class='day_of_the_week capitalize text_small'>${new Date(item.date)
    .getDay() == new Date().getDay() ? 'Сегодня' : new Date(item.date).toLocaleString('ru', {
        weekday: "long"
    })}</p>
    <p class='text_bold'>${new Date(item.date).toLocaleString('ru', {
        month: "long",
        day: "numeric"
    })}</p>
    </div>
    <div class='weather-item-icon ${iconWeather}'></div><div class='weather-item-temperature'>
    <p class='temp_day '>Днём ${item.temperature.day}&deg</p>
    <p class='text_grey text_small'>ночью ${item.temperature.night}&deg
    </p>
    </div>
    <div class='weather-item-cloudiness text_grey text_small'>
        <p class='capitalize'>
            ${item.cloudiness}
            </p>
        <p>${precipitation}</p></div>
        </div>`
}

// Slide left and right
sliderWidth = childElItem.offsetWidth * items.length
sliderContainer.style.width = sliderWidth + "px"
sliderContainer.style.left = 0 + "px"

let rightRow = sliderRow.querySelector(".right")
let leftRow = sliderRow.querySelector(".left")
leftRow.classList.add("left", "disabled")

rightRow.onclick = function () {

    if (slider.offsetWidth == sliderContainer.offsetWidth + parseInt(sliderContainer.style.left, 10)) {
        return false
    } else {
        sliderContainer.style.left = parseInt(sliderContainer.style.left, 10) - childElItem.offsetWidth + "px"
    }

    leftRow.classList.remove("disabled")

    if (slider.offsetWidth >= sliderContainer.offsetWidth + parseInt(sliderContainer.style.left, 10)) {
        rightRow.classList.add("right", "disabled")
    }
};

leftRow.onclick = function () {
    if (parseInt(sliderContainer.style.left, 10) == 0) {
        return false
    } else {
        sliderContainer.style.left = parseInt(sliderContainer.style.left, 10) + childElItem.offsetWidth + "px"
    }

    rightRow.classList.remove("disabled")

    if (parseInt(sliderContainer.style.left, 10) >= 0) {
        leftRow.classList.add("left", "disabled")
    }
}