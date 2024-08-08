let button1 = document.querySelector(".button1");
let button2 = document.querySelector(".button2");
let button3 = document.querySelector(".button3");
let button4 = document.querySelector(".button4");
let button5 = document.querySelector(".button5");
let body = document.querySelector("body");
let inputsrows;
let inputscols;
let inputscols2;
let evvelkirengrows;
let evvelkirengcols;

button1.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "flex";
    document.querySelector(".start").style.display = "none";
    document.querySelector(".level").style.display = "flex";
    document.querySelector(".basliq").style.display = "none";
})
button2.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "none";
    document.querySelector(".giris").style.display = "none";
    document.querySelector(".level").style.display = "none";
    document.querySelector(".easylevelmain").style.display = "block";
    document.querySelector(".hardlevelmain").style.display = "none";
    document.querySelector(".mediumlevelmain").style.display = "none";

})

button3.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "none";
    document.querySelector(".giris").style.display = "none";
    document.querySelector(".level").style.display = "none";
    document.querySelector(".easylevelmain").style.display = "none";
    document.querySelector(".mediumlevelmain").style.display = "block";
    document.querySelector(".hardlevelmain").style.display = "none";
})
button4.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "none";
    document.querySelector(".giris").style.display = "none";
    document.querySelector(".level").style.display = "none";
    document.querySelector(".easylevelmain").style.display = "none";
    document.querySelector(".mediumlevelmain").style.display = "none";
    document.querySelector(".hardlevelmain").style.display = "block";
})
let inputs = document.querySelectorAll(".myinput");
let evvelkiinput = "yox";
let geri = document.querySelector(".geri");
let bir = document.querySelector(".bir");
let iki = document.querySelector(".iki");
let uc = document.querySelector(".uc");
let table = document.querySelector("table");
let tr = document.querySelectorAll(".tere");
let butonlar = document.querySelectorAll(".buttons");
let anamenu = document.querySelector(".ana-menu");
let anamenu1 = document.querySelector(".ana-menu1");
let optionmenu1 = document.querySelector(".option-menu1")
let optionmenu = document.querySelector(".option-menu")
let closesetting = document.querySelector(".closesetting")
anamenu.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "block";
    document.querySelector(".start").style.display = "block";
    document.querySelector(".giris").style.display = "flex";
    document.querySelector(".easylevelmain").style.display = "none";
    document.querySelector(".mediumlevelmain").style.display = "none";
    document.querySelector(".hardlevelmain").style.display = "none";
})
anamenu1.addEventListener("click", function() {
    document.querySelector(".modalalert2").style.display = "flex";
    document.querySelector(".gerimodal2").addEventListener("click", function() {
        document.querySelector(".modalalert2").style.display = "none";
    })
    document.querySelector(".tamammodal2").addEventListener("click", function() {
        location.reload();
    })
})

function ikinci() {
    document.querySelector(".containersetting").style.display = "flex";
    document.querySelector(".start").style.display = "none";
    document.querySelector(".giris").style.display = "none";
    const select1 = document.getElementById("list");
    select1.addEventListener("change", function() {
        if (this.value === "Azərbaycan") {
            document.querySelector(".button1").innerHTML = "Başla";
            document.querySelector(".button2").innerHTML = "Asan";
            document.querySelector(".button3").innerHTML = "Orta";
            document.querySelector(".button4").innerHTML = "Çətin";
            document.querySelector(".button5").innerHTML = "Son";
            document.querySelector(".write").innerHTML = "Asan Səviyyə";
            document.querySelector(".writemd").innerHTML = "Orta Səviyyə";
            document.querySelector(".writehd").innerHTML = "Çətin Səviyyə";
            document.querySelector(".writesettings").innerHTML = "Parametrlər";
            document.querySelector(".first_p").innerHTML = "Dil";
            document.querySelector(".second_p").innerHTML = "Səs";
            document.querySelector(".modal_p").innerHTML = "Bu səviyyəni tamamladınız. Bu səviyyəni yenidən oynamaq istəyirsinizsə, səhifəni yenidən yükləyin";
            document.querySelector(".gerimodal").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".modal_p2").innerHTML = "Səhifə yenidən yüklənsin?";
            document.querySelector(".gerimodal2").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal2").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".tamammodal2").style.width = "130px";
            document.querySelector(".gerimodal2").style.width = "100px";
            document.querySelector(".tamammodal").style.marginLeft = "100px";
            document.querySelector(".tamammodal").style.width = "130px";
            document.querySelector(".gerimodal").style.marginRight = "10px";
            document.querySelector(".gerimodal").style.width = "100px";
            return;
        }
        if (this.value === "English") {
            document.querySelector(".button1").innerHTML = "Start";
            document.querySelector(".button2").innerHTML = "Easy";
            document.querySelector(".button3").innerHTML = "Medium";
            document.querySelector(".button4").innerHTML = "Hard";
            document.querySelector(".button5").innerHTML = "Finish";
            document.querySelector(".write").innerHTML = "Easy Level";
            document.querySelector(".writemd").innerHTML = "Medium Level";
            document.querySelector(".writehd").innerHTML = "Hard Level";
            document.querySelector(".writesettings").innerHTML = "Settings";
            document.querySelector(".first_p").innerHTML = "Language";
            document.querySelector(".second_p").innerHTML = "Sound";
            document.querySelector(".modal_p").innerHTML = "You have completed this level. If you want to play this level again, reload page"
            document.querySelector(".gerimodal").innerHTML = "Cancel";
            document.querySelector(".tamammodal").innerHTML = "Reload Page";
            document.querySelector(".modal_p2").innerHTML = "Reload the page?";
            document.querySelector(".gerimodal2").innerHTML = "Cancel";
            document.querySelector(".tamammodal2").innerHTML = "Reload Page";
            return;
        }

    })
    var offRadio = document.getElementById("offRadio");
    var onRadio = document.getElementById("onRadio");
    var audio = document.getElementById("myAudio");
    onRadio.addEventListener("change", function() {
        if (onRadio.checked) {
            audio.play();
            audio.loop = true;
        }
    });
    offRadio.addEventListener("change", function() {
        if (offRadio.checked) {
            audio.pause();
        }
    });
    closesetting.addEventListener("click", function() {
        document.querySelector(".containersetting").style.display = "none";
        document.querySelector(".start").style.display = "block";
        document.querySelector(".giris").style.display = "flex";
        document.querySelector(".easylevelmain").style.display = "none";
        document.querySelector(".level").style.display = "none";
        document.querySelector(".hardlevelmain").style.display = "none";
        document.querySelector(".mediumlevelmain").style.display = "none";

    })
}

function birinci() {
    document.querySelector(".containersetting").style.display = "flex";
    document.querySelector(".easylevelmain").style.display = "none";

    document.querySelector(".level").style.display = "none";
    const select1 = document.getElementById("list");
    select1.addEventListener("change", function() {
        if (this.value === "Azərbaycan") {
            document.querySelector(".button1").innerHTML = "Başla";
            document.querySelector(".button2").innerHTML = "Asan";
            document.querySelector(".button3").innerHTML = "Orta";
            document.querySelector(".button4").innerHTML = "Çətin";
            document.querySelector(".button5").innerHTML = "Son";
            document.querySelector(".write").innerHTML = "Asan Səviyyə";
            document.querySelector(".writemd").innerHTML = "Orta Səviyyə";
            document.querySelector(".writehd").innerHTML = "Çətin Səviyyə";
            document.querySelector(".writesettings").innerHTML = "Parametrlər";
            document.querySelector(".first_p").innerHTML = "Dil";
            document.querySelector(".second_p").innerHTML = "Səs";
            document.querySelector(".modal_p").innerHTML = "Bu səviyyəni tamamladınız. Bu səviyyəni yenidən oynamaq istəyirsinizsə, səhifəni yenidən yükləyin";
            document.querySelector(".gerimodal").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".modal_p2").innerHTML = "Səhifə yenidən yüklənsin?";
            document.querySelector(".gerimodal2").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal2").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".tamammodal2").style.width = "130px";
            document.querySelector(".gerimodal2").style.width = "100px";
            document.querySelector(".tamammodal").style.marginLeft = "100px";
            document.querySelector(".tamammodal").style.width = "130px";
            document.querySelector(".gerimodal").style.marginRight = "10px";
            document.querySelector(".gerimodal").style.width = "100px";
            return;
        }
        if (this.value === "English") {
            document.querySelector(".button1").innerHTML = "Start";
            document.querySelector(".button2").innerHTML = "Easy";
            document.querySelector(".button3").innerHTML = "Medium";
            document.querySelector(".button4").innerHTML = "Hard";
            document.querySelector(".button5").innerHTML = "Finish";
            document.querySelector(".write").innerHTML = "Easy Level";
            document.querySelector(".writemd").innerHTML = "Medium Level";
            document.querySelector(".writehd").innerHTML = "Hard Level";
            document.querySelector(".writesettings").innerHTML = "Settings";
            document.querySelector(".first_p").innerHTML = "Language";
            document.querySelector(".second_p").innerHTML = "Sound";
            document.querySelector(".modal_p").innerHTML = "You have completed this level. If you want to play this level again, reload page"
            document.querySelector(".gerimodal").innerHTML = "Cancel";
            document.querySelector(".tamammodal").innerHTML = "Reload Page";
            document.querySelector(".modal_p2").innerHTML = "Reload the page?";
            document.querySelector(".gerimodal2").innerHTML = "Cancel";
            document.querySelector(".tamammodal2").innerHTML = "Reload Page";
            return;
        }
    })
    var offRadio = document.getElementById("offRadio");
    var onRadio = document.getElementById("onRadio");
    var audio = document.getElementById("myAudio");
    onRadio.addEventListener("change", function() {
        if (onRadio.checked) {
            audio.play();
            audio.loop = true;
        }
    });
    offRadio.addEventListener("change", function() {
        if (offRadio.checked) {
            audio.pause();
        }
    });
    closesetting.addEventListener("click", function() {
        document.querySelector(".containersetting").style.display = "none";
        document.querySelector(".easylevelmain").style.display = "block";
        document.querySelector(".mediumlevelmain").style.display = "none";
        document.querySelector(".level").style.display = "none";
        document.querySelector(".giris").style.display = "none";
        document.querySelector(".hardlevelmain").style.display = "none";

    })

}

function ucuncu() {
    document.querySelector(".containersetting").style.display = "flex";
    document.querySelector(".mediumlevelmain").style.display = "none";
    document.querySelector(".level").style.display = "none";
    const select1 = document.getElementById("list");
    select1.addEventListener("change", function() {
        if (this.value === "Azərbaycan") {
            document.querySelector(".button1").innerHTML = "Başla";
            document.querySelector(".button2").innerHTML = "Asan";
            document.querySelector(".button3").innerHTML = "Orta";
            document.querySelector(".button4").innerHTML = "Çətin";
            document.querySelector(".button5").innerHTML = "Son";
            document.querySelector(".write").innerHTML = "Asan Səviyyə";
            document.querySelector(".writemd").innerHTML = "Orta Səviyyə";
            document.querySelector(".writehd").innerHTML = "Çətin Səviyyə";
            document.querySelector(".writesettings").innerHTML = "Parametrlər";
            document.querySelector(".first_p").innerHTML = "Dil";
            document.querySelector(".second_p").innerHTML = "Səs";
            document.querySelector(".modal_p").innerHTML = "Bu səviyyəni tamamladınız. Bu səviyyəni yenidən oynamaq istəyirsinizsə, səhifəni yenidən yükləyin";
            document.querySelector(".gerimodal").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".modal_p2").innerHTML = "Səhifə yenidən yüklənsin?";
            document.querySelector(".gerimodal2").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal2").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".tamammodal2").style.width = "130px";
            document.querySelector(".gerimodal2").style.width = "100px";
            document.querySelector(".tamammodal").style.marginLeft = "100px";
            document.querySelector(".tamammodal").style.width = "130px";
            document.querySelector(".gerimodal").style.marginRight = "10px";
            document.querySelector(".gerimodal").style.width = "100px";
            return;
        }
        if (this.value === "English") {
            document.querySelector(".button1").innerHTML = "Start";
            document.querySelector(".button2").innerHTML = "Easy";
            document.querySelector(".button3").innerHTML = "Medium";
            document.querySelector(".button4").innerHTML = "Hard";
            document.querySelector(".button5").innerHTML = "Finish";
            document.querySelector(".write").innerHTML = "Easy Level";
            document.querySelector(".writemd").innerHTML = "Medium Level";
            document.querySelector(".writehd").innerHTML = "Hard Level";
            document.querySelector(".writesettings").innerHTML = "Settings";
            document.querySelector(".first_p").innerHTML = "Language";
            document.querySelector(".second_p").innerHTML = "Sound";
            document.querySelector(".modal_p").innerHTML = "You have completed this level. If you want to play this level again, reload page"
            document.querySelector(".gerimodal").innerHTML = "Cancel";
            document.querySelector(".tamammodal").innerHTML = "Reload Page";
            document.querySelector(".modal_p2").innerHTML = "Reload the page?";
            document.querySelector(".gerimodal2").innerHTML = "Cancel";
            document.querySelector(".tamammodal2").innerHTML = "Reload Page";
            return;
        }
    })
    var offRadio = document.getElementById("offRadio");
    var onRadio = document.getElementById("onRadio");
    var audio = document.getElementById("myAudio");
    onRadio.addEventListener("change", function() {
        if (onRadio.checked) {
            audio.play();
            audio.loop = true;
        }
    });
    offRadio.addEventListener("change", function() {
        if (offRadio.checked) {
            audio.pause();
        }
    });
    closesetting.addEventListener("click", function() {
        document.querySelector(".containersetting").style.display = "none";
        document.querySelector(".mediumlevelmain").style.display = "block";
        document.querySelector(".easylevelmain").style.display = "none";
        document.querySelector(".level").style.display = "none";
        document.querySelector(".giris").style.display = "none";
        document.querySelector(".hardlevelmain").style.display = "none";
    })

}

function dorduncu() {
    document.querySelector(".containersetting").style.display = "flex";
    document.querySelector(".hardlevelmain").style.display = "none";
    document.querySelector(".level").style.display = "none";
    const select1 = document.getElementById("list");
    select1.addEventListener("change", function() {
        if (this.value === "Azərbaycan") {
            document.querySelector(".button1").innerHTML = "Başla";
            document.querySelector(".button2").innerHTML = "Asan";
            document.querySelector(".button3").innerHTML = "Orta";
            document.querySelector(".button4").innerHTML = "Çətin";
            document.querySelector(".button5").innerHTML = "Son";
            document.querySelector(".write").innerHTML = "Asan Səviyyə";
            document.querySelector(".writemd").innerHTML = "Orta Səviyyə";
            document.querySelector(".writehd").innerHTML = "Çətin Səviyyə";
            document.querySelector(".writesettings").innerHTML = "Parametrlər";
            document.querySelector(".first_p").innerHTML = "Dil";
            document.querySelector(".second_p").innerHTML = "Səs";
            document.querySelector(".modal_p").innerHTML = "Bu səviyyəni tamamladınız. Bu səviyyəni yenidən oynamaq istəyirsinizsə, səhifəni yenidən yükləyin";
            document.querySelector(".gerimodal").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".modal_p2").innerHTML = "Səhifə yenidən yüklənsin?";
            document.querySelector(".gerimodal2").innerHTML = "Ləğv Edin";
            document.querySelector(".tamammodal2").innerHTML = "Səhifəni yenidən yükləyin";
            document.querySelector(".tamammodal2").style.width = "130px";
            document.querySelector(".gerimodal2").style.width = "100px";
            document.querySelector(".tamammodal").style.marginLeft = "100px";
            document.querySelector(".tamammodal").style.width = "130px";
            document.querySelector(".gerimodal").style.marginRight = "10px";
            document.querySelector(".gerimodal").style.width = "100px";
            return;
        }
        if (this.value === "English") {
            document.querySelector(".button1").innerHTML = "Start";
            document.querySelector(".button2").innerHTML = "Easy";
            document.querySelector(".button3").innerHTML = "Medium";
            document.querySelector(".button4").innerHTML = "Hard";
            document.querySelector(".button5").innerHTML = "Finish";
            document.querySelector(".write").innerHTML = "Easy Level";
            document.querySelector(".writemd").innerHTML = "Medium Level";
            document.querySelector(".writehd").innerHTML = "Hard Level";
            document.querySelector(".writesettings").innerHTML = "Settings";
            document.querySelector(".first_p").innerHTML = "Language";
            document.querySelector(".second_p").innerHTML = "Sound";
            document.querySelector(".modal_p").innerHTML = "You have completed this level. If you want to play this level again, reload page"
            document.querySelector(".gerimodal").innerHTML = "Cancel";
            document.querySelector(".tamammodal").innerHTML = "Reload Page";
            document.querySelector(".modal_p2").innerHTML = "Reload the page?";
            document.querySelector(".gerimodal2").innerHTML = "Cancel";
            document.querySelector(".tamammodal2").innerHTML = "Reload Page";
            return;
        }
    })
    var offRadio = document.getElementById("offRadio");
    var onRadio = document.getElementById("onRadio");
    var audio = document.getElementById("myAudio");
    onRadio.addEventListener("change", function() {
        if (onRadio.checked) {
            audio.play();
            audio.loop = true;
        }
    });
    offRadio.addEventListener("change", function() {
        if (offRadio.checked) {
            audio.pause();
        }
    });
    closesetting.addEventListener("click", function() {
        document.querySelector(".containersetting").style.display = "none";
        document.querySelector(".hardlevelmain").style.display = "block";
        document.querySelector(".easylevelmain").style.display = "none";
        document.querySelector(".mediumlevelmain").style.display = "none";
        document.querySelector(".level").style.display = "none";
        document.querySelector(".giris").style.display = "none";

    })

}

let input111 = document.querySelector(".input111");
input111.addEventListener("click", function() {
    input111.style.color = "rgba(255, 0, 0, 0.5)";
    input222.style.color = "#00ccff";
});
let input222 = document.querySelector(".input222");
input222.addEventListener("click", function() {
    input222.style.color = "rgba(255, 0, 0, 0.5)";
    input111.style.color = "#00ccff";
});

for (let i = 0; i < tr.length; i++) {
    let td = tr[i].querySelectorAll("td");
    for (let j = 0; j < td.length; j++) {
        let input = td[j].querySelector(".myinput");
        input.addEventListener("click", function() {
            for (let a = 0; a < inputs.length; a++) {
                inputs[a].style.backgroundColor = 'white'
            }
            if (i === 0 && j === 0 ||
                i === 0 && j === 1 ||
                i === 0 && j === 2 ||
                i === 0 && j === 4 ||
                i === 0 && j === 5 ||
                i === 0 && j === 6 ||
                i === 0 && j === 7 ||
                i === 0 && j === 8 ||
                i === 1 && j === 0 ||
                i === 1 && j === 2 ||
                i === 1 && j === 4 ||
                i === 1 && j === 8 ||
                i === 2 && j === 0 ||
                i === 2 && j === 1 ||
                i === 2 && j === 4 ||
                i === 2 && j === 6 ||
                i === 2 && j === 7 ||
                i === 2 && j === 8 ||
                i === 3 && j === 0 ||
                i === 3 && j === 2 ||
                i === 3 && j === 4 ||
                i === 3 && j === 6 ||
                i === 3 && j === 8 ||
                i === 4 && j === 1 ||
                i === 4 && j === 2 ||
                i === 4 && j === 3 ||
                i === 4 && j === 5 ||
                i === 4 && j === 7 ||
                i === 5 && j === 0 ||
                i === 5 && j === 2 ||
                i === 5 && j === 4 ||
                i === 5 && j === 5 ||
                i === 5 && j === 6 ||
                i === 5 && j === 8 ||
                i === 6 && j === 0 ||
                i === 6 && j === 1 ||
                i === 6 && j === 2 ||
                i === 6 && j === 5 ||
                i === 6 && j === 6 ||
                i === 7 && j === 2 ||
                i === 7 && j === 4 ||
                i === 7 && j === 5 ||
                i === 8 && j === 0 ||
                i === 8 && j === 2 ||
                i === 8 && j === 4 ||
                i === 8 && j === 5 ||
                i === 8 && j === 6 ||
                i === 8 && j === 8
            ) {
                return;
            }
            if (evvelkiinput !== "yox") {
                evvelkiinput.style.backgroundColor = "white";
            }
            for (let k = 0; k < 9; k++) {

                inputsrows = td[k].querySelector(".myinput");
                evvelkirengrows = td[k].querySelector(".myinput").style.backgroundColor;
                td[k].querySelector(".myinput").style.backgroundColor = "#7CC8F9";
            }
            for (let z = 0; z < 9; z++) {
                inputscols = tr[z].querySelectorAll("td");
                inputscols2 = inputscols[j].querySelector(".myinput");
                inputscols2.style.backgroundColor = "#7CC8F9"
            }
            evvelkiinput = this;
            this.style.backgroundColor = "#269be9";
        });
    }
}

for (let v = 0; v < butonlar.length; v++) {
    butonlar[v].addEventListener("click", function() {
        if (evvelkiinput.style.color !== "blue") {
            if (this.classList.contains("bir")) {
                evvelkiinput.value = 1;
                if (evvelkiinput.parentElement.parentElement === tr[4] && evvelkiinput.parentElement === tr[4].querySelectorAll("td")[8]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[5] && evvelkiinput.parentElement === tr[5].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[8] && evvelkiinput.parentElement === tr[8].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("iki")) {
                evvelkiinput.value = 2;
                if (evvelkiinput.parentElement.parentElement === tr[3] && evvelkiinput.parentElement === tr[3].querySelectorAll("td")[1]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[0]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[8] && evvelkiinput.parentElement === tr[8].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("uc")) {
                evvelkiinput.value = 3;
                if (evvelkiinput.parentElement.parentElement === tr[1] && evvelkiinput.parentElement === tr[1].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[6] && evvelkiinput.parentElement === tr[6].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[1]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("dord")) {
                evvelkiinput.value = 4;
                if (evvelkiinput.parentElement.parentElement === tr[1] && evvelkiinput.parentElement === tr[1].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[2] && evvelkiinput.parentElement === tr[2].querySelectorAll("td")[2]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[4] && evvelkiinput.parentElement === tr[4].querySelectorAll("td")[6]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("bes")) {
                evvelkiinput.value = 5;
                if (evvelkiinput.parentElement.parentElement === tr[2] && evvelkiinput.parentElement === tr[2].querySelectorAll("td")[5]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[4] && evvelkiinput.parentElement === tr[4].querySelectorAll("td")[0]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[6] && evvelkiinput.parentElement === tr[6].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[8] && evvelkiinput.parentElement === tr[8].querySelectorAll("td")[1]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("alti")) {
                evvelkiinput.value = 6;
                if (evvelkiinput.parentElement.parentElement === tr[1] && evvelkiinput.parentElement === tr[1].querySelectorAll("td")[5]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[5] && evvelkiinput.parentElement === tr[5].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[6]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("yeddi")) {
                evvelkiinput.value = 7;
                if (evvelkiinput.parentElement.parentElement === tr[1] && evvelkiinput.parentElement === tr[1].querySelectorAll("td")[1]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[3] && evvelkiinput.parentElement === tr[3].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[6] && evvelkiinput.parentElement === tr[6].querySelectorAll("td")[8]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("sekkiz")) {
                evvelkiinput.value = 8;
                if (evvelkiinput.parentElement.parentElement === tr[2] && evvelkiinput.parentElement === tr[2].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[3] && evvelkiinput.parentElement === tr[3].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[4] && evvelkiinput.parentElement === tr[4].querySelectorAll("td")[4]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[5] && evvelkiinput.parentElement === tr[5].querySelectorAll("td")[1]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[8]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            } else if (this.classList.contains("doqquz")) {
                evvelkiinput.value = 9;
                if (evvelkiinput.parentElement.parentElement === tr[0] && evvelkiinput.parentElement === tr[0].querySelectorAll("td")[3]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[1] && evvelkiinput.parentElement === tr[1].querySelectorAll("td")[6]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[3] && evvelkiinput.parentElement === tr[3].querySelectorAll("td")[5]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[6] && evvelkiinput.parentElement === tr[6].querySelectorAll("td")[4]) {
                    evvelkiinput.style.color = "blue";
                } else if (evvelkiinput.parentElement.parentElement === tr[7] && evvelkiinput.parentElement === tr[7].querySelectorAll("td")[7]) {
                    evvelkiinput.style.color = "blue";
                } else {
                    evvelkiinput.style.color = "red";
                }
            }
            if (
                inputs[3].style.color === "blue" &&
                inputs[10].style.color === "blue" &&
                inputs[12].style.color === "blue" &&
                inputs[14].style.color === "blue" &&
                inputs[15].style.color === "blue" &&
                inputs[16].style.color === "blue" &&
                inputs[20].style.color === "blue" &&
                inputs[21].style.color === "blue" &&
                inputs[23].style.color === "blue" &&
                inputs[28].style.color === "blue" &&
                inputs[30].style.color === "blue" &&
                inputs[32].style.color === "blue" &&
                inputs[34].style.color === "blue" &&
                inputs[36].style.color === "blue" &&
                inputs[40].style.color === "blue" &&
                inputs[42].style.color === "blue" &&
                inputs[44].style.color === "blue" &&
                inputs[46].style.color === "blue" &&
                inputs[48].style.color === "blue" &&
                inputs[52].style.color === "blue" &&
                inputs[79].style.color === "blue" &&
                inputs[73].style.color === "blue" &&
                inputs[75].style.color === "blue" &&
                inputs[71].style.color === "blue" &&
                inputs[70].style.color === "blue" &&
                inputs[69].style.color === "blue" &&
                inputs[62].style.color === "blue" &&
                inputs[61].style.color === "blue" &&
                inputs[58].style.color === "blue" &&
                inputs[57].style.color === "blue" &&
                inputs[66].style.color === "blue" &&
                inputs[63].style.color === "blue" &&
                inputs[64].style.color === "blue"
            ) {
                if (document.getElementById("list").value == "English") {
                    document.querySelector(".easylevelmain").innerHTML += `
                    <div class="containerfinish">
                    <div class="win1">
                    <span></span>
                    </div>
                    <div class="win">
                        <span class="winwrite  winenglish" >You Win!</span>
                        <span class="level-button ana-menu2"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                        <span class="level-button play-menueasy"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                
                    </div>  
                    </div>`
                } else if (document.getElementById("list").value == "Azərbaycan") {
                    document.querySelector(".easylevelmain").innerHTML += `
                    <div class="containerfinish">
                    <div class="win1">
                    <span></span>
                    </div>
                    <div class="win">
                        <span class="winwrite winazerbaijan" >Siz Qalibsiniz!</span>
                        <span class="level-button ana-menu2"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                        <span class="level-button play-menueasy"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                
                    </div>
                    </div>`
                }
                document.querySelector(".easylevel").style.opacity = "0.5";
                document.querySelector(".main").style.opacity = "0.5";
                document.querySelector(".container").style.display = "none";
                document.querySelector(".geri").style.display = "none";
                if (document.querySelector(".easylevel").style.opacity == "0.5" && document.querySelector(".mediumlevelmd").style.opacity == "0.5" && document.querySelector(".hardlevelhd").style.opacity == "0.5") {
                    button5.style.display = "block";
                }
                document.querySelector(".ana-menu2").addEventListener("click", function() {

                    document.querySelector(".basliq").style.display = "block";
                    document.querySelector(".start").style.display = "block";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".easylevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button2").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button2").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".play-menueasy").addEventListener("click", function() {

                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".start").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".easylevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button2").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button2").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".button2").addEventListener("click", function() {

                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".easylevelmain").style.display = "none";
                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".modalalert").style.display = "flex";
                    document.querySelector(".gerimodal").addEventListener("click", function() {
                        document.querySelector(".modalalert").style.display = "none";
                    })
                    document.querySelector(".tamammodal").addEventListener('click', function() {
                        location.reload();
                    });
                    //easylevel bitdikden sonra menuya qayitdiqdan sonra yeniden easy level giis olmasin evezine modal acilsin
                })
            }
            geri.addEventListener("click", function() {
                if (evvelkiinput.style.color == "red") {
                    evvelkiinput.value = "";
                }
            })
        }
        var hatasayi = document.getElementById("hatasayi");
        if (evvelkiinput.style.color == "red") {
            hatasayi.innerText = parseInt(document.querySelector(".hatasayi").innerText) + 1;
            var hatasayi = document.getElementById("hatasayi").innerText;
        }
    });
}


/* mediummmm!!!*/
let inputsmd = document.querySelectorAll(".myinputmd");
let evvelkiinputmd = "yox";
let evvelkirengmd;
let evvelkirengrowsmd;
let evvelkirengcolsmd;
let gerimd = document.querySelector(".gerimd");
let tablemd = document.querySelector(".mainmd table");
let trmd = document.querySelectorAll(".teremd");
let butonmd = document.querySelectorAll(".buttonsmd");
let inputsrowsmd;
let inputscolsmd;
let inputscols2md;
let anamenumd = document.querySelector(".ana-menumd");
anamenumd.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "block";
    document.querySelector(".start").style.display = "block";
    document.querySelector(".giris").style.display = "flex";
    document.querySelector(".mediumlevelmain").style.display = "none";
    document.querySelector(".easylevelmain").style.display = "none";
})
for (let i = 0; i < trmd.length; i++) {
    let tdmd = trmd[i].querySelectorAll("td");
    for (let j = 0; j < tdmd.length; j++) {
        let inputmd = tdmd[j].querySelector(".myinputmd");
        inputmd.addEventListener("click", function() {
            for (let a = 0; a < inputsmd.length; a++) {
                inputsmd[a].style.backgroundColor = 'white'
            }
            if (i === 0 && j === 0 ||
                i === 0 && j === 1 ||
                i === 0 && j === 2 ||
                i === 0 && j === 3 ||
                i === 0 && j === 6 ||
                i === 1 && j === 5 ||
                i === 1 && j === 6 ||
                i === 2 && j === 0 ||
                i === 2 && j === 1 ||
                i === 2 && j === 3 ||
                i === 2 && j === 4 ||
                i === 2 && j === 8 ||
                i === 3 && j === 0 ||
                i === 3 && j === 1 ||
                i === 3 && j === 5 ||
                i === 3 && j === 7 ||
                i === 4 && j === 1 ||
                i === 4 && j === 5 ||
                i === 4 && j === 6 ||
                i === 4 && j === 7 ||
                i === 4 && j === 8 ||
                i === 5 && j === 4 ||
                i === 5 && j === 5 ||
                i === 5 && j === 6 ||
                i === 6 && j === 0 ||
                i === 6 && j === 3 ||
                i === 6 && j === 5 ||
                i === 6 && j === 7 ||
                i === 6 && j === 8 ||
                i === 7 && j === 1 ||
                i === 7 && j === 3 ||
                i === 7 && j === 6 ||
                i === 8 && j === 1 ||
                i === 8 && j === 4
            ) {
                return;
            }
            if (evvelkiinputmd !== "yox") {
                evvelkiinputmd.style.backgroundColor = "white";
            }
            for (let k = 0; k < 9; k++) {

                inputsrowsmd = tdmd[k].querySelector(".myinputmd");
                evvelkirengrowsmd = tdmd[k].querySelector(".myinputmd").style.backgroundColor;
                tdmd[k].querySelector(".myinputmd").style.backgroundColor = "#7CC8F9";
            }
            for (let z = 0; z < 9; z++) {
                inputscolsmd = trmd[z].querySelectorAll("td");
                inputscols2md = inputscolsmd[j].querySelector(".myinputmd");
                inputscols2md.style.backgroundColor = "#7CC8F9"
            }
            evvelkiinputmd = this;
            this.style.backgroundColor = "#269be9";
        });
    }
}

for (let v = 0; v < butonmd.length; v++) {
    butonmd[v].addEventListener("click", function() {
        if (evvelkiinputmd.style.color !== "blue") {
            if (this.classList.contains("bir")) {
                evvelkiinputmd.value = 1;
                if (evvelkiinputmd.parentElement.parentElement === trmd[0] && evvelkiinputmd.parentElement === trmd[0].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[4] && evvelkiinputmd.parentElement === trmd[4].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("iki")) {
                evvelkiinputmd.value = 2;
                if (evvelkiinputmd.parentElement.parentElement === trmd[0] && evvelkiinputmd.parentElement === trmd[0].querySelectorAll("td")[5]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[1]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[3] && evvelkiinputmd.parentElement === trmd[3].querySelectorAll("td")[6]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[4] && evvelkiinputmd.parentElement === trmd[4].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[3]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("uc")) {
                evvelkiinputmd.value = 3;
                if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[3] && evvelkiinputmd.parentElement === trmd[3].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[4] && evvelkiinputmd.parentElement === trmd[4].querySelectorAll("td")[3]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[0]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("dord")) {
                evvelkiinputmd.value = 4;
                if (evvelkiinputmd.parentElement.parentElement === trmd[0] && evvelkiinputmd.parentElement === trmd[0].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[0]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[2] && evvelkiinputmd.parentElement === trmd[2].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("bes")) {
                evvelkiinputmd.value = 5;
                if (evvelkiinputmd.parentElement.parentElement === trmd[2] && evvelkiinputmd.parentElement === trmd[2].querySelectorAll("td")[5]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[3] && evvelkiinputmd.parentElement === trmd[3].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[4] && evvelkiinputmd.parentElement === trmd[4].querySelectorAll("td")[0]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[3]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[6] && evvelkiinputmd.parentElement === trmd[6].querySelectorAll("td")[1]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("alti")) {
                evvelkiinputmd.value = 6;
                if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[3]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[7]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[6] && evvelkiinputmd.parentElement === trmd[6].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("yeddi")) {
                evvelkiinputmd.value = 7;
                if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[2] && evvelkiinputmd.parentElement === trmd[2].querySelectorAll("td")[6]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[3] && evvelkiinputmd.parentElement === trmd[3].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[1]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[5]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[0]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("sekkiz")) {
                evvelkiinputmd.value = 8;
                if (evvelkiinputmd.parentElement.parentElement === trmd[0] && evvelkiinputmd.parentElement === trmd[0].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[2] && evvelkiinputmd.parentElement === trmd[2].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[3] && evvelkiinputmd.parentElement === trmd[3].querySelectorAll("td")[3]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[5] && evvelkiinputmd.parentElement === trmd[5].querySelectorAll("td")[0]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[6] && evvelkiinputmd.parentElement === trmd[6].querySelectorAll("td")[6]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[5]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            } else if (this.classList.contains("doqquz")) {
                evvelkiinputmd.value = 9;
                if (evvelkiinputmd.parentElement.parentElement === trmd[1] && evvelkiinputmd.parentElement === trmd[1].querySelectorAll("td")[8]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[6] && evvelkiinputmd.parentElement === trmd[6].querySelectorAll("td")[4]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[7] && evvelkiinputmd.parentElement === trmd[7].querySelectorAll("td")[2]) {
                    evvelkiinputmd.style.color = "blue";
                } else if (evvelkiinputmd.parentElement.parentElement === trmd[8] && evvelkiinputmd.parentElement === trmd[8].querySelectorAll("td")[6]) {
                    evvelkiinputmd.style.color = "blue";
                } else {
                    evvelkiinputmd.style.color = "red";
                }
            }

            if (
                inputsmd[4].style.color === "blue" &&
                inputsmd[5].style.color === "blue" &&
                inputsmd[7].style.color === "blue" &&
                inputsmd[8].style.color === "blue" &&
                inputsmd[9].style.color === "blue" &&
                inputsmd[10].style.color === "blue" &&
                inputsmd[11].style.color === "blue" &&
                inputsmd[12].style.color === "blue" &&
                inputsmd[13].style.color === "blue" &&
                inputsmd[16].style.color === "blue" &&
                inputsmd[17].style.color === "blue" &&
                inputsmd[20].style.color === "blue" &&
                inputsmd[23].style.color === "blue" &&
                inputsmd[24].style.color === "blue" &&
                inputsmd[25].style.color === "blue" &&
                inputsmd[29].style.color === "blue" &&
                inputsmd[30].style.color === "blue" &&
                inputsmd[31].style.color === "blue" &&
                inputsmd[33].style.color === "blue" &&
                inputsmd[35].style.color === "blue" &&
                inputsmd[36].style.color === "blue" &&
                inputsmd[38].style.color === "blue" &&
                inputsmd[39].style.color === "blue" &&
                inputsmd[40].style.color === "blue" &&
                inputsmd[45].style.color === "blue" &&
                inputsmd[46].style.color === "blue" &&
                inputsmd[47].style.color === "blue" &&
                inputsmd[48].style.color === "blue" &&
                inputsmd[52].style.color === "blue" &&
                inputsmd[53].style.color === "blue" &&
                inputsmd[55].style.color === "blue" &&
                inputsmd[56].style.color === "blue" &&
                inputsmd[58].style.color === "blue" &&
                inputsmd[60].style.color === "blue" &&
                inputsmd[63].style.color === "blue" &&
                inputsmd[65].style.color === "blue" &&
                inputsmd[67].style.color === "blue" &&
                inputsmd[68].style.color === "blue" &&
                inputsmd[70].style.color === "blue" &&
                inputsmd[71].style.color === "blue" &&
                inputsmd[72].style.color === "blue" &&
                inputsmd[74].style.color === "blue" &&
                inputsmd[75].style.color === "blue" &&
                inputsmd[77].style.color === "blue" &&
                inputsmd[78].style.color === "blue" &&
                inputsmd[79].style.color === "blue" &&
                inputsmd[80].style.color === "blue"
            ) {
                if (document.getElementById("list").value == "English") {
                    document.querySelector(".mediumlevelmain").innerHTML += `
                    <div class="containerfinish">
                    <div class="win1">
                    <span></span>
                    </div>
                    <div class="win">
                        <span class="winwrite winenglish" >You Win!</span>
                        <span class="level-button ana-menu3"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                        <span class="level-button play-menumedium"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                
                    </div>  
                    </div>`
                } else if (document.getElementById("list").value == "Azərbaycan") {
                    document.querySelector(".mediumlevelmain").innerHTML += `
                    <div class="containerfinish">
                    <div class="win1">
                    <span></span>
                    </div>
                    <div class="win">
                        <span class="winwrite winazerbaijan">Siz Qalibsiniz!</span>
                        <span class="level-button ana-menu3"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                        <span class="level-button play-menumedium"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                
                    </div>
                    </div>`
                }
                document.querySelector(".mediumlevelmd").style.opacity = "0.5";
                document.querySelector(".mainmd").style.opacity = "0.5";
                document.querySelector(".containermd").style.display = "none";
                document.querySelector(".gerimd").style.display = "none";
                if (document.querySelector(".easylevel").style.opacity == "0.5" && document.querySelector(".mediumlevelmd").style.opacity == "0.5" && document.querySelector(".hardlevelhd").style.opacity == "0.5") {
                    button5.style.display = "block";
                }
                document.querySelector(".ana-menu3").addEventListener("click", function() {

                    document.querySelector(".basliq").style.display = "block";
                    document.querySelector(".start").style.display = "block";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".mediumlevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button3").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button3").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".play-menumedium").addEventListener("click", function() {

                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".start").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".mediumlevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button3").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button3").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".button3").addEventListener("click", function() {

                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".mediumlevelmain").style.display = "none";
                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".modalalert").style.display = "flex";
                    document.querySelector(".gerimodal").addEventListener("click", function() {
                        document.querySelector(".modalalert").style.display = "none";
                    })
                    document.querySelector(".tamammodal").addEventListener('click', function() {
                        location.reload();
                    });
                })
            }
            gerimd.addEventListener("click", function() {
                if (evvelkiinputmd.style.color == "red") {
                    evvelkiinputmd.value = "";
                }
            })
        }
        var hatasayimd = document.getElementById("hatasayi2");
        if (evvelkiinputmd.style.color == "red") {
            hatasayimd.innerText = parseInt(document.querySelector(".hatasayi2").innerText) + 1;
            var hatasayimd = document.getElementById("hatasayi2").innerText;


        }

    });
}




// hardddd!!!!!! levellllll


let inputshd = document.querySelectorAll(".myinputhd");
let evvelkiinputhd = "yox";
let evvelkirenghd;
let evvelkirengrowshd;
let evvelkirengcolshd;
let gerihd = document.querySelector(".gerihd");
let tablehd = document.querySelector(".mainhd table");
let trhd = document.querySelectorAll(".terehd");
let butonhd = document.querySelectorAll(".buttonshd");
let anamenuhd = document.querySelector(".ana-menuhd");
let inputsrowshd;
let inputscolshd;
let inputscols2hd;
anamenuhd.addEventListener("click", function() {
    document.querySelector(".basliq").style.display = "block";
    document.querySelector(".start").style.display = "block";
    document.querySelector(".giris").style.display = "flex";
    document.querySelector(".mediumlevelmain").style.display = "none";
    document.querySelector(".easylevelmain").style.display = "none";
    document.querySelector(".hardlevelmain").style.display = "none";
})
for (let i = 0; i < trhd.length; i++) {
    let tdhd = trhd[i].querySelectorAll("td");
    for (let j = 0; j < tdhd.length; j++) {
        let inputhd = tdhd[j].querySelector(".myinputhd");
        inputhd.addEventListener("click", function() {
            for (let a = 0; a < inputshd.length; a++) {
                inputshd[a].style.backgroundColor = 'white'
            }
            if (i === 0 && j === 0 ||
                i === 0 && j === 1 ||
                i === 0 && j === 3 ||
                i === 0 && j === 8 ||
                i === 1 && j === 0 ||
                i === 1 && j === 5 ||
                i === 1 && j === 6 ||
                i === 1 && j === 7 ||
                i === 2 && j === 2 ||
                i === 2 && j === 3 ||
                i === 2 && j === 4 ||
                i === 2 && j === 6 ||
                i === 2 && j === 7 ||
                i === 2 && j === 8 ||
                i === 3 && j === 0 ||
                i === 3 && j === 3 ||
                i === 3 && j === 5 ||
                i === 3 && j === 6 ||
                i === 4 && j === 0 ||
                i === 4 && j === 3 ||
                i === 4 && j === 8 ||
                i === 5 && j === 1 ||
                i === 5 && j === 3 ||
                i === 5 && j === 8 ||
                i === 6 && j === 3 ||
                i === 6 && j === 5 ||
                i === 7 && j === 4 ||
                i === 8 && j === 2 ||
                i === 8 && j === 3 ||
                i === 8 && j === 7
            ) {
                return;
            }

            if (evvelkiinputhd !== "yox") {
                evvelkiinputhd.style.backgroundColor = "white";
            }
            for (let k = 0; k < 9; k++) {

                inputsrowshd = tdhd[k].querySelector(".myinputhd");
                evvelkirengrowshd = tdhd[k].querySelector(".myinputhd").style.backgroundColor;
                tdhd[k].querySelector(".myinputhd").style.backgroundColor = "#7CC8F9";
            }
            for (let z = 0; z < 9; z++) {
                inputscolshd = trhd[z].querySelectorAll("td");
                inputscols2hd = inputscolshd[j].querySelector(".myinputhd");
                inputscols2hd.style.backgroundColor = "#7CC8F9"
            }
            evvelkiinputhd = this;
            this.style.backgroundColor = "#269be9";
        });
    }
}

for (let v = 0; v < butonhd.length; v++) {
    butonhd[v].addEventListener("click", function() {


        if (evvelkiinputhd.style.color !== "blue") {
            if (this.classList.contains("bir")) {
                evvelkiinputhd.value = 1;
                if (evvelkiinputhd.parentElement.parentElement === trhd[0] && evvelkiinputhd.parentElement === trhd[0].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[1] && evvelkiinputhd.parentElement === trhd[1].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[3] && evvelkiinputhd.parentElement === trhd[3].querySelectorAll("td")[8]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[0]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("iki")) {
                evvelkiinputhd.value = 2;
                if (evvelkiinputhd.parentElement.parentElement === trhd[1] && evvelkiinputhd.parentElement === trhd[1].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[3] && evvelkiinputhd.parentElement === trhd[3].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[0]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("uc")) {
                evvelkiinputhd.value = 3;
                if (evvelkiinputhd.parentElement.parentElement === trhd[0] && evvelkiinputhd.parentElement === trhd[0].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[2] && evvelkiinputhd.parentElement === trhd[2].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[3]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("dord")) {
                evvelkiinputhd.value = 4;
                if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[0]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("bes")) {
                evvelkiinputhd.value = 5;
                if (evvelkiinputhd.parentElement.parentElement === trhd[0] && evvelkiinputhd.parentElement === trhd[0].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("alti")) {
                evvelkiinputhd.value = 6;
                if (evvelkiinputhd.parentElement.parentElement === trhd[0] && evvelkiinputhd.parentElement === trhd[0].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[1] && evvelkiinputhd.parentElement === trhd[1].querySelectorAll("td")[3]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[3] && evvelkiinputhd.parentElement === trhd[3].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[8]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("yeddi")) {
                evvelkiinputhd.value = 7;
                if (evvelkiinputhd.parentElement.parentElement === trhd[1] && evvelkiinputhd.parentElement === trhd[1].querySelectorAll("td")[8]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[2] && evvelkiinputhd.parentElement === trhd[2].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[3] && evvelkiinputhd.parentElement === trhd[3].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[6]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("sekkiz")) {
                evvelkiinputhd.value = 8;
                if (evvelkiinputhd.parentElement.parentElement === trhd[1] && evvelkiinputhd.parentElement === trhd[1].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[0]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[8] && evvelkiinputhd.parentElement === trhd[8].querySelectorAll("td")[8]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            } else if (this.classList.contains("doqquz")) {
                evvelkiinputhd.value = 9;
                if (evvelkiinputhd.parentElement.parentElement === trhd[0] && evvelkiinputhd.parentElement === trhd[0].querySelectorAll("td")[4]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[2] && evvelkiinputhd.parentElement === trhd[2].querySelectorAll("td")[0]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[3] && evvelkiinputhd.parentElement === trhd[3].querySelectorAll("td")[1]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[4] && evvelkiinputhd.parentElement === trhd[4].querySelectorAll("td")[7]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[5] && evvelkiinputhd.parentElement === trhd[5].querySelectorAll("td")[5]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[6] && evvelkiinputhd.parentElement === trhd[6].querySelectorAll("td")[8]) {
                    evvelkiinputhd.style.color = "blue";
                } else if (evvelkiinputhd.parentElement.parentElement === trhd[7] && evvelkiinputhd.parentElement === trhd[7].querySelectorAll("td")[2]) {
                    evvelkiinputhd.style.color = "blue";
                } else {
                    evvelkiinputhd.style.color = "red";
                }
            }

            if (
                inputshd[2].style.color === "blue" &&
                inputshd[4].style.color === "blue" &&
                inputshd[5].style.color === "blue" &&
                inputshd[6].style.color === "blue" &&
                inputshd[7].style.color === "blue" &&
                inputshd[10].style.color === "blue" &&
                inputshd[11].style.color === "blue" &&
                inputshd[12].style.color === "blue" &&
                inputshd[13].style.color === "blue" &&
                inputshd[17].style.color === "blue" &&
                inputshd[18].style.color === "blue" &&
                inputshd[19].style.color === "blue" &&
                inputshd[23].style.color === "blue" &&
                inputshd[28].style.color === "blue" &&
                inputshd[29].style.color === "blue" &&
                inputshd[31].style.color === "blue" &&
                inputshd[34].style.color === "blue" &&
                inputshd[35].style.color === "blue" &&
                inputshd[37].style.color === "blue" &&
                inputshd[38].style.color === "blue" &&
                inputshd[40].style.color === "blue" &&
                inputshd[41].style.color === "blue" &&
                inputshd[42].style.color === "blue" &&
                inputshd[43].style.color === "blue" &&
                inputshd[45].style.color === "blue" &&
                inputshd[47].style.color === "blue" &&
                inputshd[49].style.color === "blue" &&
                inputshd[50].style.color === "blue" &&
                inputshd[51].style.color === "blue" &&
                inputshd[52].style.color === "blue" &&
                inputshd[54].style.color === "blue" &&
                inputshd[55].style.color === "blue" &&
                inputshd[56].style.color === "blue" &&
                inputshd[58].style.color === "blue" &&
                inputshd[60].style.color === "blue" &&
                inputshd[61].style.color === "blue" &&
                inputshd[62].style.color === "blue" &&
                inputshd[63].style.color === "blue" &&
                inputshd[64].style.color === "blue" &&
                inputshd[65].style.color === "blue" &&
                inputshd[66].style.color === "blue" &&
                inputshd[68].style.color === "blue" &&
                inputshd[69].style.color === "blue" &&
                inputshd[70].style.color === "blue" &&
                inputshd[71].style.color === "blue" &&
                inputshd[72].style.color === "blue" &&
                inputshd[73].style.color === "blue" &&
                inputshd[76].style.color === "blue" &&
                inputshd[77].style.color === "blue" &&
                inputshd[78].style.color === "blue" &&
                inputshd[80].style.color === "blue"
            ) {

                if (document.getElementById("list").value == "English") {
                    document.querySelector(".hardlevelmain").innerHTML += `
                        <div class="containerfinish">
                        <div class="win1">
                        <span></span>
                        </div>
                        <div class="win">
                            <span class="winwrite winenglish">You Win!</span>
                            <span class="level-button ana-menu4"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                            <span class="level-button play-menuhard"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                    
                        </div>  
                        </div>`
                } else if (document.getElementById("list").value == "Azərbaycan") {
                    document.querySelector(".hardlevelmain").innerHTML += `
                        <div class="containerfinish">
                        <div class="win1">
                        <span></span>
                        </div>
                        <div class="win">
                            <span class="winwrite winazerbaijan">Siz Qalibsiniz!</span>
                            <span class="level-button ana-menu4"><i class="fa fa-solid fa-house" style="color: white;"></i></span>
                            <span class="level-button play-menuhard"><i class="fa fa-solid fa-play" style="color: white;"></i></span>
                    
                        </div>
                        </div>`
                }
                document.querySelector(".hardlevelhd").style.opacity = "0.5";
                document.querySelector(".mainhd").style.opacity = "0.5";
                document.querySelector(".containerhd").style.display = "none";
                document.querySelector(".gerihd").style.display = "none";
                if (document.querySelector(".easylevel").style.opacity == "0.5" && document.querySelector(".mediumlevelmd").style.opacity == "0.5" && document.querySelector(".hardlevelhd").style.opacity == "0.5") {
                    document.querySelector(".button5").style.display = "block";
                }
                document.querySelector(".ana-menu4").addEventListener("click", function() {

                    document.querySelector(".basliq").style.display = "block";
                    document.querySelector(".start").style.display = "block";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".hardlevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button4").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button4").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".play-menuhard").addEventListener("click", function() {
                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".start").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".hardlevelmain").style.display = "none";
                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".button4").style.color = " rgb(108, 106, 106)";
                    document.querySelector(".button4").style.border = "1px solid rgb(108, 106, 106)";
                })
                document.querySelector(".button4").addEventListener("click", function() {

                    document.querySelector(".win").style.display = "none";
                    document.querySelector(".hardlevelmain").style.display = "none";
                    document.querySelector(".basliq").style.display = "none";
                    document.querySelector(".giris").style.display = "flex";
                    document.querySelector(".level").style.display = "flex";
                    document.querySelector(".modalalert").style.display = "flex";
                    document.querySelector(".gerimodal").addEventListener("click", function() {
                        document.querySelector(".modalalert").style.display = "none";
                    })
                    document.querySelector(".tamammodal").addEventListener('click', function() {
                        location.reload();
                    });
                })
            }
            gerihd.addEventListener("click", function() {
                if (evvelkiinputhd.style.color == "red") {
                    evvelkiinputhd.value = "";
                }
            })
        }
        var hatasayihd = document.getElementById("hatasayi3");
        if (evvelkiinputhd.style.color == "red") {
            hatasayihd.innerText = parseInt(document.querySelector(".hatasayi3").innerText) + 1;
            var hatasayihd = document.getElementById("hatasayi3").innerText;
        }
    });
}
document.querySelector(".button5").addEventListener("click", function() {
    let x = hatasayi.innerText;
    let y = hatasayi2.innerText;
    let z = hatasayi3.innerText;
    let iq, iqtam;
    if (x >= 10) {
        x = 9;
    }
    if (y >= 10) {
        y = 9;
    }
    if (z >= 10) {
        z = 9;
    }
    iq = (2 * (10 - x) + (4 * (10 - y)) + (6 * (10 - z)));
    iqtam = Math.floor(iq);
    document.querySelector(".button2").style.display = "none";
    document.querySelector(".button3").style.display = "none";
    document.querySelector(".button4").style.display = "none";
    document.querySelector(".button5").style.display = "none";
    if (document.getElementById("list").value == "English") {
        document.querySelector(".level").innerHTML += `
        <div class="containerfinish">
         <div class="sonluqfinish">
            <span></span>
            <div class="first_h"> <h1 class="youriq">Your IQ score: </h1></div>
               <div class="bal"><p id="sonbal"></p></div>
               <div class="first_pfinish"><p class="yourgame">Thanks for playing the game!</p></div>
            <div class="second_hfinish"><h1 class="created">Prepared by:</h1></div>
            <div class="namesfinish">
               <a href="https://instagram.com/alyvh29?igshid=NTc4MTIwNjQ2YQ==" target="_blank"> <p style="text-align: center;" class="second_pfinish">Aliyev Talib</p></a>
               <a href="https://instagram.com/elgun_.zade?igshid=NTc4MTIwNjQ2YQ==" target="_blank"> <p style="text-align: center;"  class="third_pfinish">Huseynzade Elgun</p></a>
            </div>
               <div class="fourth_pfinish">
                <p class="vacibsoz">"Big successes start with small steps"</p>
               </div>
               </div>
     </div>`
    } else if (document.getElementById("list").value == "Azərbaycan") {
        document.querySelector(".level").innerHTML += `
        <div class="containerfinish">
        <div class="sonluqfinish">
           <span></span>
           <div class="first_h"> <h1 class="youriq">Sizin IQ balınız:</div>
              <div class="bal"><p id="sonbal"></p></div>
              <div class="first_pfinish"><p class="yourgame">Oyunu oynadığınız üçün təşəkkür edirik!</p></div>
           <div class="second_hfinish"><h1 class="created">Hazırlayanlar:</h1></div>
           <div class="namesfinish">
              <a href="https://instagram.com/alyvh29?igshid=NTc4MTIwNjQ2YQ==" target="_blank"> <p style="text-align: center;" class="second_pfinish">Əliyev Talib</p></a>
              <a href="https://instagram.com/elgun_.zade?igshid=NTc4MTIwNjQ2YQ==" target="_blank"> <p style="text-align: center;"  class="third_pfinish">Hüseynzadə Elgün</p></a>
           </div>
              <div class="fourth_pfinish">
               <p class="vacibsoz vacibaz">"Böyük uğurlar, kiçik addımlarla başlayır"</p>
              </div>
              </div>
    </div>
        `
    }
    var iqbal = document.getElementById("sonbal");
    iqbal.innerText = iqtam;
})