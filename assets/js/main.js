// $("#button1").click(function () {
//     let email1 = $("#email1").val();
//     let modal = $("#modal").hide();
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var emailMinLength = 11;
//     var specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
//     $(".closeModal").click(function () {
//         $(modal).hide();
//     });

//     if (email1.indexOf("@gmail.com") !== -1 && !specialChars.test(email1)) {
//         if (email1.lenght >= emailMinLength && emailRegex.test(email1)) {
//             $(modal).show();
//             $(".modal__title").text("Đăng nhập thất bại ");
//             $(".modal__body").text(
//                 "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
//             );
//             $(".modal__showEmail").text("vd: abc@gmail.com");
//             $(".modal__showEmail").css("color", "#000");
//             $(".closeModal").click(function () {
//                 $("#email1").focus();
//             });
//         }
//         $(modal).show();
//         $(".modal__title").text("Đăng nhập thành công");
//         $(".modal__body").text("Bạn đang đăng nhập với email là : ");
//         $(".modal__showEmail").css("color", "#1106af");
//         $(".modal__showEmail").text(email1);
//         $(".closeModal").click(function () {
//             $("#email1").val("").blur();
//         });
//     } else {
//         $(modal).show();
//         $(".modal__title").text("Đăng nhập thất bại ");
//         $(".modal__body").text(
//             "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
//         );
//         $(".modal__showEmail").text("vd: abc@gmail.com");
//         $(".modal__showEmail").css("color", "#000");
//         $(".closeModal").click(function () {
//             $("#email1").focus();
//         });
//     }
// });

// $("#button2").click(function () {
//     let email2 = $("#email2").val();
//     let modal = $("#modal").hide();
//     var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     var emailMinLength = 11;
//     var specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
//     $(".closeModal").click(function () {
//         $(modal).hide();
//     });

//     if (email2.indexOf("@gmail.com") !== -1 && !specialChars.test(email2)) {
//         if (email2.lenght >= emailMinLength && emailRegex.test(email2)) {
//             $(modal).show();
//             $(".modal__title").text("Đăng nhập thất bại ");
//             $(".modal__body").text(
//                 "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
//             );
//             $(".modal__showEmail").text("vd: abc@gmail.com");
//             $(".modal__showEmail").css("color", "#000");
//             $(".closeModal").click(function () {
//                 $("#email2").focus().val(email2);
//             });
//         }
//         $(modal).show();
//         $(".modal__title").text("Đăng kí thành công");
//         $(".modal__body").text("Bạn đang đăng nhập với email là : ");
//         $(".modal__showEmail").css("color", "#1106af");
//         $(".modal__showEmail").text(email2);
//         $(".closeModal").click(function () {
//             $("#email2").val("").blur();
//         });
//     } else {
//         $(modal).show();
//         $(".modal__title").text("Đăng nhập thất bại ");
//         $(".modal__body").text(
//             "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
//         );
//         $(".modal__showEmail").text("vd: abc@gmail.com");
//         $(".modal__showEmail").css("color", "#000");
//         $(".closeModal").click(function () {
//             $("#email2").focus().val(email2);
//         });
//     }
// });

$("#button1").click(function () {
    let email = $("#email1").val();
    let success = $(".alet__success").hide();
    let error = $(".alet__error").hide();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailMinLength = 10;
    let specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    if (email.indexOf("@gmail.com") !== -1 && !specialChars.test(email)) {
        if (email.lenght >= emailMinLength && emailRegex.test(email)) {
            error.show();
            $("#email1").focus();
            setTimeout(() => {
                error.hide();
            }, 4000);
        }
        success.show();
        $("#email1").val("").blur();
        setTimeout(() => {
            success.hide();
        }, 4000);
    } else {
        error.show();
        $("#email1").focus();
        setTimeout(() => {
            error.hide();
        }, 4000);
    }
});

$("#button2").click(function () {
    let email = $("#email2").val();
    let success = $(".alet__success").hide();
    let error = $(".alet__error").hide();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let emailMinLength = 10;
    let specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    if (email.indexOf("@gmail.com") !== -1 && !specialChars.test(email)) {
        if (email.lenght >= emailMinLength && emailRegex.test(email)) {
            error.show();
            $("#email2").focus();
            setTimeout(() => {
                error.hide();
            }, 4000);
        }
        success.show();
        $("#email2").val("").blur();
        setTimeout(() => {
            success.hide();
        }, 4000);
    } else {
        error.show();
        $("#email2").focus();
        setTimeout(() => {
            error.hide();
        }, 4000);
    }
});