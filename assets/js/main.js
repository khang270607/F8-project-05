// $("#emailBtn").click(function () {

//     var emailClick = $("#emailBtn").val();

//     var input = $("#emailText").val();

//     if (input.indexOf("@gmail.com") !== -1) {

//         if (input.lenght < 9) {

//             $(".alet__error").show();

//             $("#emailText").addClass("border__error").focus();

//             setTimeout(function () {

//                 $(".alet__error").hide();

//             }, 5000);
//         }

//         else if (input.lenght > 9 ) {

//             $(".alet__succsess").show();

//             $("#emailText").val("");

//             $("#emailText").removeClass("border__error");

//             setTimeout(function () {

//                 $(".alet__succsess").hide();

//             }, 5000);
//         }

//         $(".alet__succsess").show();

//         $("#emailText").val("");

//         $("#emailText").removeClass("border__error");

//         setTimeout(function () {
//             $(".alet__succsess").hide();
//         }, 5000);
//     }

//     else {

//         $(".alet__error").show();

//         $("#emailText").addClass("border__error").focus();

//         setTimeout(function () {

//             $(".alet__error").hide();

//         }, 5000);
//     }
// });

$("#button1").click(function () {
    let email1 = $("#email1").val();
    let modal = $("#modal").hide();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailMinLength = 11;
    var specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    $(".closeModal").click(function () {
        $(modal).hide();
    });

    if (email1.indexOf("@gmail.com") !== -1 && !specialChars.test(email1)) {
        if (email1.lenght >= emailMinLength && emailRegex.test(email1)) {
            $(modal).show();
            $(".modal__title").text("Đăng nhập thất bại ");
            $(".modal__body").text(
                "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
            );
            $(".modal__showEmail").text("vd: abc@gmail.com");
            $(".modal__showEmail").css("color", "#000");
            $(".closeModal").click(function () {
                $("#email1").focus();
            });
        }
        $(modal).show();
        $(".modal__title").text("Đăng nhập thành công");
        $(".modal__body").text("Bạn đang đăng nhập với email là : ");
        $(".modal__showEmail").css("color", "#1106af");
        $(".modal__showEmail").text(email1);
        $(".closeModal").click(function () {
            $("#email1").val("").blur();
        });
    } else {
        $(modal).show();
        $(".modal__title").text("Đăng nhập thất bại ");
        $(".modal__body").text(
            "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
        );
        $(".modal__showEmail").text("vd: abc@gmail.com");
        $(".modal__showEmail").css("color", "#000");
        $(".closeModal").click(function () {
            $("#email1").focus();
        });
    }
});

$("#button2").click(function () {
    let email2 = $("#email2").val();
    let modal = $("#modal").hide();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var emailMinLength = 11;
    var specialChars = /[!#$%^&*()_+\-=\[\]{};':"\\|,<>\/?]+/;
    $(".closeModal").click(function () {
        $(modal).hide();
    });

    if (email2.indexOf("@gmail.com") !== -1 && !specialChars.test(email2)) {
        if (email2.lenght >= emailMinLength && emailRegex.test(email2)) {
            $(modal).show();
            $(".modal__title").text("Đăng nhập thất bại ");
            $(".modal__body").text(
                "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
            );
            $(".modal__showEmail").text("vd: abc@gmail.com");
            $(".modal__showEmail").css("color", "#000");
            $(".closeModal").click(function () {
                $("#email2").focus().val(email2);
            });
        }
        $(modal).show();
        $(".modal__title").text("Đăng kí thành công");
        $(".modal__body").text("Bạn đang đăng nhập với email là : ");
        $(".modal__showEmail").css("color", "#1106af");
        $(".modal__showEmail").text(email2);
        $(".closeModal").click(function () {
            $("#email2").val("").blur();
        });
    } else {
        $(modal).show();
        $(".modal__title").text("Đăng nhập thất bại ");
        $(".modal__body").text(
            "Bạn cần nhập đúng định dạng email, phải có từ 11 kí tự trở lên và không chứa kí tự đặt biệt"
        );
        $(".modal__showEmail").text("vd: abc@gmail.com");
        $(".modal__showEmail").css("color", "#000");
        $(".closeModal").click(function () {
            $("#email2").focus().val(email2);
        });
    }
});
