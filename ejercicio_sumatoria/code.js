// function sumatoria_p() {
//     let n = prompt("Cual es el numero?")
//     let suma = 0
//     for (let x = 1; x <= n; x++) {
//         suma = suma + x
//         console.log(suma)

//     }
// }

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
});


function sumatoria_p() {
    let n = document.querySelector("#numero").value
    let suma = 0
    for (let x = 1; x <= n; x++) {
        suma = suma + x
        console.log(suma)

    }

    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: '<a href="">Why do I have this issue?</a>'
            })
        }
    })
}