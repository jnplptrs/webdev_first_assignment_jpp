function validateAdd(){
    let DOBinput = document.getElementById("DOB").value
    const DOB = new Date(DOBinput).setHours(0,0,0,0)

    let today = new Date()
    let year = today.getFullYear()
    let month = today.getMonth()
    let day = today.getDate()

    let maxDate = new Date(year - 17, month, day)
    let minDate = new Date(year - 60, month, day)

    if (DOB > minDate && DOB <= maxDate) {
        return false
    } else {
        alert("Invalid DOB")
    }
}

function setMaxDate() {
    let currentDate = new Date()

    let maxDate = new Date(currentDate)

    maxDate.setDate(currentDate.getDate() - 1)
    document.getElementById("DOB").setAttribute("max", maxDate.toISOString().split('T')[0])
}

