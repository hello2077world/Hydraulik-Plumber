window.onload = start;

// const ile jest boxow z rurami
const amout_of_boxes = 32;
// czas na rozwiazanie
const time_for_solution = 60;
// czy jest wlaczona animacja
var it_is_animated = false;
// ktory box bufor (poprzednia rura)
var which_box_bufor = 0;
// ktory poziom
var level = 1;
// punkty za pozosaly czas i timer
var timer_setTimeOut = false;
var points_time_left = 0;
// punkty za ruchy i ilosc ruchow
var moves = 0;
var points_moves = 0;
// punkty za rury i ilosc rur
var pipes = 0;
var points_pipes = 0;
// punkty wszystkie
var points_total = 0;
// zienne audio
var flush_water_audio = new Audio("sounds/flush_water.wav");
var rotate_pipe_audio = new Audio("sounds/rotate_pipe.wav");
var lose_audio = new Audio("sounds/lose.wav");
var next_level_audio = new Audio("sounds/next_level.wav");
var end_game_audio = new Audio("sounds/end_game.wav");

//! FUNCTION start() - wywoluje funkcje po zaladowaniu strony
function start() {

    //* switch na kazdy level, dodaje odpowiednie rury zaleznie od levelu
    switch (level) {

        /** ULOZONE RURY DO TESTOW */
        /*case 1:

            //TODO wypisz level
            $('.valve_p_level').html(level);

            //? dodaj rury dla level1 oraz losowy obrot
            for (i = 0; i < amout_of_boxes; i++) {

                // array kolejnosci rur dla danego levelu
                let tab_pipes_level = [
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(0)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(1)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(2)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(3)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(4)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(5)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(6)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(7)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(8)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(9)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(10)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(11)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(12)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(13)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(14)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(15)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(16)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(17)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(18)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(19)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(20)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(21)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(22)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(23)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(24)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(25)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(26)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(27)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(28)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(29)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(30)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(31)">',
                ];
                // array 4 obrotow
                let tab_rotate = ['0deg', '90deg', '180deg', '270deg'];
                // losowa liczba od 0 do 3
                let random = Math.floor(Math.random() * 4);

                //TODO dodaj po kolei <img> z tab_pipes_level
                $('.boxes_box:eq(' + i + ')').html(tab_pipes_level[i]);

            }

            $('.boxes_box_img:eq(0)').css({
                "transition-duration": "0ms",
                "transform": "rotate(90deg)"
            });

            $('.boxes_box_img:eq(8)').css({
                "transition-duration": "0ms",
                "transform": "rotate(90deg)"
            });

            $('.boxes_box_img:eq(16)').css({
                "transition-duration": "0ms",
                "transform": "rotate(270deg)"
            });

            $('.boxes_box_img:eq(17)').css({
                "transition-duration": "0ms",
                "transform": "rotate(180deg)"
            });

            $('.boxes_box_img:eq(11)').css({
                "transition-duration": "0ms",
                "transform": "rotate(90deg)"
            });

            $('.boxes_box_img:eq(19)').css({
                "transition-duration": "0ms",
                "transform": "rotate(270deg)"
            });

            $('.boxes_box_img:eq(22)').css({
                "transition-duration": "0ms",
                "transform": "rotate(90deg)"
            });

            $('.boxes_box_img:eq(30)').css({
                "transition-duration": "0ms",
                "transform": "rotate(270deg)"
            });

            $('.boxes_box_img:eq(31)').css({
                "transition-duration": "0ms",
                "transform": "rotate(90deg)"
            });
            break;*/

        case 1:
            //TODO wypisz level
            $('.valve_p_level').html(level);

            //? dodaj rury dla level1 oraz losowy obrot
            for (i = 0; i < amout_of_boxes; i++) {

                // array kolejnosci rur dla danego levelu
                let tab_pipes_level = [
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(0)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(1)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(2)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(3)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(4)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(5)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(6)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(7)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(8)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(9)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(10)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(11)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(12)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(13)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(14)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(15)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(16)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(17)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(18)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(19)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(20)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(21)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(22)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(23)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(24)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(25)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(26)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(27)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(28)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(29)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(30)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(31)">',
                ];
                // array 4 obrotow
                let tab_rotate = ['0deg', '90deg', '180deg', '270deg'];
                // losowa liczba od 0 do 3
                let random = Math.floor(Math.random() * 4);

                //TODO dodaj po kolei <img> z tab_pipes_level
                $('.boxes_box:eq(' + i + ')').html(tab_pipes_level[i]);

                //TODO dodaj losowy obrót
                $('.boxes_box_img:eq(' + i + ')').css({
                    "transition-duration": "0ms",
                    "transform": "rotate(" + tab_rotate[random] + ")"
                });
            }
            break;

        case 2:
            //TODO wypisz level
            $('.valve_p_level').html(level);

            //? dodaj rury dla level1 oraz losowy obrot
            for (i = 0; i < amout_of_boxes; i++) {

                // array kolejnosci rur dla danego levelu
                let tab_pipes_level = [
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(0)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(1)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(2)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(3)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(4)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(5)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(6)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(7)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(8)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(9)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(10)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(11)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(12)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(13)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(14)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(15)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(16)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(17)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(18)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(19)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(20)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(21)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(22)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(23)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(24)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(25)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(26)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(27)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(28)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(29)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(30)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(31)">',
                ];
                // array 4 obrotow
                let tab_rotate = ['0deg', '90deg', '180deg', '270deg'];
                // losowa liczba od 0 do 3
                let random = Math.floor(Math.random() * 4);

                //TODO dodaj po kolei <img> z tab_pipes_level
                $('.boxes_box:eq(' + i + ')').html(tab_pipes_level[i]);

                //TODO dodaj losowy obrót
                $('.boxes_box_img:eq(' + i + ')').css({
                    "transition-duration": "0ms",
                    "transform": "rotate(" + tab_rotate[random] + ")"
                });
            }
            break;

        case 3:
            //TODO wypisz level
            $('.valve_p_level').html(level);

            //? dodaj rury dla level1 oraz losowy obrot
            for (i = 0; i < amout_of_boxes; i++) {

                // array kolejnosci rur dla danego levelu
                let tab_pipes_level = [
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(0)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(1)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(2)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(3)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(4)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(5)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(6)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(7)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(8)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(9)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(10)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(11)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(12)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(13)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(14)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(15)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(16)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(17)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(18)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(19)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(20)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(21)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(22)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(23)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(24)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(25)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(26)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(27)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(28)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(29)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(30)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(31)">',
                ];
                // array 4 obrotow
                let tab_rotate = ['0deg', '90deg', '180deg', '270deg'];
                // losowa liczba od 0 do 3
                let random = Math.floor(Math.random() * 4);

                //TODO dodaj po kolei <img> z tab_pipes_level
                $('.boxes_box:eq(' + i + ')').html(tab_pipes_level[i]);

                //TODO dodaj losowy obrót
                $('.boxes_box_img:eq(' + i + ')').css({
                    "transition-duration": "0ms",
                    "transform": "rotate(" + tab_rotate[random] + ")"
                });
            }
            break;

        case 4:
            //TODO wypisz level
            $('.valve_p_level').html(level);

            //? dodaj rury dla level1 oraz losowy obrot
            for (i = 0; i < amout_of_boxes; i++) {

                // array kolejnosci rur dla danego levelu
                let tab_pipes_level = [
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(0)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(1)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(2)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(3)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(4)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(5)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(6)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(7)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(8)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(9)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(10)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(11)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(12)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(13)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(14)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(15)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(16)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(17)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(18)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(19)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(20)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(21)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(22)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(23)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(24)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(25)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(26)">',
                    '<img class="boxes_box_img" src="img/pipe1.png" onclick="rotate(27)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(28)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(29)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(30)">',
                    '<img class="boxes_box_img" src="img/pipe2.png" onclick="rotate(31)">',
                ];
                // array 4 obrotow
                let tab_rotate = ['0deg', '90deg', '180deg', '270deg'];
                // losowa liczba od 0 do 3
                let random = Math.floor(Math.random() * 4);

                //TODO dodaj po kolei <img> z tab_pipes_level
                $('.boxes_box:eq(' + i + ')').html(tab_pipes_level[i]);

                //TODO dodaj losowy obrót
                $('.boxes_box_img:eq(' + i + ')').css({
                    "transition-duration": "0ms",
                    "transform": "rotate(" + tab_rotate[random] + ")"
                });
            }
            break;

    } // end switch (level)

} // end start()

//! FUNCTION rotate() - wywolywana zostaje po kliknieciu
function rotate(what_is_clicked) {

    //* zacznij odliczac czas
    if (timer_setTimeOut === false) timer(time_for_solution);

    //* if sprawdza co zostalo klikniete
    //TODO if klikniety zostal zawor (valve)
    if (what_is_clicked === 'valve') {

        //* if animacja jest zatrzymana, rozpocznij animacje > else return false
        if (it_is_animated === false) $(".valve_img").addClass('rotate_valve');
        else return false;

        //TODO animacja start (zablokuj animacje valve)
        it_is_animated = true;

        flush_water_audio.load();
        flush_water_audio.play();

        //? zablokuj mozliwosc obracania rur
        for (i = 0; i < amout_of_boxes; i++) {
            $('.boxes_box:eq(i)').children("img").attr('onclick', 'false');
        }

        //TODO odswiez img zaworu (valve) po wykonaniu animacji (usun i dodaj caly element <img>)
        setTimeout(function () {

            //TODO usuwa i dodaje img zaworu (odswieza)
            $(".valve_img").remove();
            $("#game_valve").append('<img class="valve_img" src="img/valve.png" alt="valve" onclick="rotate(\'valve\')">');

        }, 1000);

        //TODO odkrec wode do .boxes_box[0]
        turn_water(0);

        return true;
    }
    //TODO if klikniety zostal ktorys z boxow (rura)
    else if (what_is_clicked !== 'valve' && it_is_animated === false) {

        //* if klikniety box ma rotate(360deg) -> ustaw rotate(0deg)
        if ($('.boxes_box_img:eq(' + what_is_clicked + ')').css("transform") === 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)') {
            //TODO zmien rotate 360deg na 0deg i usun animacje
            $('.boxes_box_img:eq(' + what_is_clicked + ')').css({
                "transition-duration": "0ms",
                "transform": "rotate(0deg)"
            });
        }

        //* switch obraca klikniety box, na podstawie jego transform: rotate() (obraca o 90/180/270/360 stopni)
        switch ($('.boxes_box_img:eq(' + what_is_clicked + ')').css("transform")) {

            //TODO case rotate(0deg)
            case 'matrix(1, 0, 0, 1, 0, 0)':
                $('.boxes_box_img:eq(' + what_is_clicked + ')').css({
                    "transition-duration": "300ms",
                    "transform": "rotate(90deg)"
                });
                rotate_pipe_audio.load();
                rotate_pipe_audio.play();

                it_is_animated = false;
                moves++;
                $('.moves_result').html(moves);

                break;

            //TODO case rotate(90deg)
            case 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)':
                $('.boxes_box_img:eq(' + what_is_clicked + ')').css({
                    "transition-duration": "300ms",
                    "transform": "rotate(180deg)"
                });
                rotate_pipe_audio.load();
                rotate_pipe_audio.play();

                it_is_animated = false;
                moves++;
                $('.moves_result').html(moves);

                break;

            //TODO case rotate(270deg)
            case 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)':
                $('.boxes_box_img:eq(' + what_is_clicked + ')').css({
                    "transition-duration": "300ms",
                    "transform": "rotate(270deg)"
                });
                rotate_pipe_audio.load();
                rotate_pipe_audio.play();

                it_is_animated = false;
                moves++;
                $('.moves_result').html(moves);

                break;

            //TODO case rotate(360deg/0deg)
            case 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)':
                $('.boxes_box_img:eq(' + what_is_clicked + ')').css({
                    "transition-duration": "300ms",
                    "transform": "rotate(360deg)"
                });
                rotate_pipe_audio.load();
                rotate_pipe_audio.play();

                it_is_animated = false;
                moves++;
                $('.moves_result').html(moves);

                break;
        }

        return true;

    }
    else return false;

} // end rotate()

//! FUNCTION turn_water() - wywoluje sie po kliklnieiu w zawor (valve) > odkreca wode
function turn_water(which_box) {

    //TODO po odkreceniu zaworu zatrzymaj czas
    timer('stop');

    //* which_box = 39 === zawór + rura przelewowa = connected
    if (which_box === 39) return successfully_connected();

    //*** if kierunek wody idzie z GÓRY (TOP)
    if ((which_box === 0) || (which_box >= 0 && which_box - 8 === which_box_bufor && which_box <= 31)) {

        //  console.log("KIERUNEK: Z GÓRY");

        //** if w aktualnym boxie jest pipe1
        if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe1.png') {

            //* if pipe1 jest rotate(90deg || 270deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe1-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z GÓRY NA DÓŁ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 8);
                }, 200);
            }
            //* else return false
            else return unsuccessfully_connected();

        } // end if **

        //** else if w aktualnym boxie jest pipe2
        else if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe2.png') {

            //* if pipe2 jest rotate(180deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z GÓRY DO LEWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 1);
                }, 200);
            }

            //* else if pipe2 jest rotate(270deg)
            else if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z GÓRY DO PRAWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 1);
                }, 200);
            }

            //* else return false
            else return unsuccessfully_connected();

        } // end else if **

        //** else return false
        else return unsuccessfully_connected();


    } // end if *** (TOP)

    //*** if kierunek wody idzie z PRAWEJ (RIGHT)
    else if (which_box >= 0 && which_box + 1 === which_box_bufor && which_box !== 7 && which_box !== 15 && which_box !== 23 && which_box <= 31) {

        // console.log("KIERUNEK: Z PRAWEJ");

        //** if w aktualnym boxie jest pipe1
        if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe1.png') {

            //* if pipe1 jest rotate(0/360deg || 180deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, 0, 0, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {

                // console.log("PIPE1 - 0/360deg || 180deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe1-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(1, 0, 0, 1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z LEWEJ DO PRAWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 1);
                }, 200);
            }
            //* else return false
            else return unsuccessfully_connected();

        } // end if **

        //** else if w aktualnym boxie jest pipe2
        else if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe2.png') {

            //* else if pipe2 jest rotate(0deg || 360deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, 0, 0, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)') {

                // console.log("PIPE2 - 0deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(1, 0, 0, 1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z PRAWEJ NA DÓŁ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 8);
                }, 200);
            }

            //* if pipe2 jest rotate(2700deg)
            else if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {

                // console.log("PIPE2 - 270deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z PRAWEJ DO GÓRY)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 8);
                }, 200);
            }

            //* else return false
            else return unsuccessfully_connected();

        } // end else if **

        //** else return false
        else return unsuccessfully_connected();

    } // end else if *** (RIGHT)

    //*** if kierunek wody idzie z DOŁU (BOTTOM)
    else if (which_box >= 0 && which_box + 8 === which_box_bufor && which_box <= 31) {

        // console.log("KIERUNEK: Z DOŁU");

        //** if w aktualnym boxie jest pipe1
        if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe1.png') {

            //* if pipe1 jest rotate(90deg || 270deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1.83697e-16, -1, 1, -1.83697e-16, 0, 0)') {

                // console.log("PIPE1 - 90deg || 270deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe1-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z GÓRY NA DÓŁ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 8);
                }, 200);
            }
            //* else return false
            else return unsuccessfully_connected();

        } // end if **

        //** else if w aktualnym boxie jest pipe2
        else if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe2.png') {


            //* else if pipe2 jest rotate(0deg || 360deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, 0, 0, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)') {

                // console.log("PIPE2 - 0deg || 360deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(1, 0, 0, 1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z DOŁU DO PRAWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 1);
                }, 200);
            }

            //* else if pipe2 jest rotate(90deg)
            else if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)') {

                // console.log("PIPE2 - 90deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z DOŁU DO LEWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 1);
                }, 200);
            }

            //* else return false
            else return unsuccessfully_connected();

        } // end else if **

        //** else return false
        else return unsuccessfully_connected();


    } // end else if *** (BOTTOM)

    //*** if kierunek wody idzie z LEWEJ (LEFT)
    else if (which_box >= 0 && which_box - 1 === which_box_bufor && which_box !== 8 && which_box !== 16 && which_box !== 24 && which_box <= 31) {

        // console.log("KIERUNEK: Z LEWEJ");

        //** if w aktualnym boxie jest pipe1
        if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe1.png') {

            //* if pipe1 jest rotate(0/360deg || 180deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, 0, 0, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(1, -2.44929e-16, 2.44929e-16, 1, 0, 0)' || $('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {

                // console.log("PIPE1 - 0/360deg || 180deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe1-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(1, 0, 0, 1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z LEWEJ DO PRAWEJ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 1);
                }, 200);
            }
            //* else return false
            else return unsuccessfully_connected();

        } // end if **

        //** else if w aktualnym boxie jest pipe2
        else if ($('.boxes_box:eq(' + which_box + ')').children().attr('src') === 'img/pipe2.png') {

            //* else if pipe2 jest rotate(90deg)
            if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)') {

                // console.log("PIPE2 - 90deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(6.12323e-17, 1, -1, 6.12323e-17, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z LEWEJ NA DÓŁ)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box + 8);
                }, 200);
            }

            //* if pipe2 jest rotate(180deg)
            else if ($('.boxes_box_img:eq(' + which_box + ')').css("transform") === 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)') {

                // console.log("PIPE2 - 180deg");

                //TODO zmien rure na niebieską
                $('.boxes_box')[which_box].innerHTML = '<img class="boxes_box_img" src="img/pipe2-water.png">';
                //TODO obroc rure zgodnie z ifem / else ifem
                $('.boxes_box_img:eq(' + which_box + ')').css("transform", 'matrix(-1, 1.22465e-16, -1.22465e-16, -1, 0, 0)');

                //TODO przejdz do nastepnego boxu wywolujac funkcje (Z LEWEJ DO GÓRY)
                which_box_bufor = which_box;

                //TODO wywolaj funkcje turn_water(Ktory_box_nastepny)
                setTimeout(function () {
                    pipes++;
                    return turn_water(which_box - 8);
                }, 200);
            }

            //* else return false
            else return unsuccessfully_connected();

        } // end else if **

        //** else return false
        else {
            console.log("ELSE");
            return unsuccessfully_connected();
        }

    } // end else if *** (LEFT)

    //*** else
    else {
        return unsuccessfully_connected();
    } // end else ***

} // end turn_water(which_box)

//! FUNCTION successfully_connected() - wywoluje sie po odpowiednim poleczeniu rur
function successfully_connected() {

    //* if zostal rozwiazany ostatni level -> end_game()
    if (level === 4) return end_game();

    //TODO odegraj jesli jest dostepny nastepny level
    next_level_audio.load();
    next_level_audio.play();

    //TODO pokaz menu zamieniajac none na flex
    $('#game_menu').toggleClass("display_none");
    $('#game_menu').toggleClass("display_flex");

    //TODO pokaz okno win zamieniajac none na flex
    $('.window_win').toggleClass("display_none");
    $('.window_win').toggleClass("display_flex");

    //zmienna ile pozostalo sekund
    let time_seconds_left = 0;

    //* wpisz zatrzymany czas z .time_result do zmiennej time_seconds_left
    if ($('.time_result').text() === '1:00') {
        time_seconds_left = 60;
    }
    else {
        //TODO zamien zatrzymany czas na array
        time_seconds_left = $('.time_result').text().split('');
        //TODO usuń dwie pierwsze pozycje z array (0, :)
        time_seconds_left.shift();
        time_seconds_left.shift();
        //TODO zamien otrzymany czas w array na string a potem od razu na int
        time_seconds_left = parseInt(time_seconds_left.join(''));
    }

    //TODO punkty za pozostaly czas
    points_time_left = time_seconds_left * 10;

    //* if dodaje points_moves (od 0 do 300) zaleznie od wykonanych ruchow
    if (moves < 20) points_moves = 300;
    else if (moves < 30) points_moves = 200;
    else if (moves < 40) points_moves = 100;
    else points_moves = 0;

    //TODO punkty za uzyte rury
    points_pipes = pipes * 100;
    //TODO suma wszystkich punktow (czas/ruchy/rury)
    points_total += points_time_left + points_moves + points_pipes;

    //TODO dodaj ilosc i punkty level/czasu/ruchów/rur
    $('.level_level').html(level);
    $('.results_time').html(time_seconds_left + ' =');
    $('.results_time_points').html(points_time_left);
    $('.results_moves').html(moves + ' =');
    $('.results_moves_points').html(points_moves);
    $('.results_pipes').html(pipes + ' =');
    $('.results_pipes_points').html(points_pipes);
    $('.results_all_points').html(points_total);

    //TODO wypisz sume punktow w info score
    $('.score_result').html(points_total);

} // end successfully_connected()

//! FUNCTION unsuccessfully_connected() - wywoluje sie jesli nie udalo sie polaczyc rur
function unsuccessfully_connected() {

    //TODO odegraj jesli przegrana
    lose_audio.load();
    lose_audio.play();

    //TODO pokaz menu zamieniajac none na flex
    $('#game_menu').toggleClass("display_none");
    $('#game_menu').toggleClass("display_flex");

    //TODO pokaz okno win zamieniajac none na flex
    $('.window_lose').toggleClass("display_none");
    $('.window_lose').toggleClass("display_flex");

    //TODO dodaj koncowy wynik
    $('.lose_score').html(points_total);

} // end unsuccessfully_connected()

//! FUNCTION reset_game() - wywolana po przycisku 'Nowa Gra' lub 'Zagraj ponownie'
function reset_game() {

    //TODO usun display FLEX i dodaj NONE
    $('#game_menu').addClass("display_none");
    $('#game_menu').removeClass("display_flex");
    $('.window_win').addClass("display_none");
    $('.window_win').removeClass("display_flex");
    $('.window_lose').addClass("display_none");
    $('.window_lose').removeClass("display_flex");
    $('.window_end').addClass("display_none");
    $('.window_end').removeClass("display_flex");

    //TODO poczatkowe parametry/wartosci
    it_is_animated = false;
    which_box_bufor = 0;
    timer_setTimeOut = false;
    points_time_left = 0;
    moves = 0;
    points_moves = 0;
    pipes = 0;
    points_pipes = 0;
    points_total = 0;

    //TODO zresetuj trzy info okna do wartosci poczatkowych
    $('.moves_result').html(points_moves);
    $('.score_result').html(points_total);
    $('.time_result').html('1:00');

    //TODO ustaw level = 1
    level = 1;

    //TODO rozpocznij od nowa
    return start();

} // end reset_game()

//! FUNCTION next_level() - wywolana po przycisku 'Następny poziom'
function next_level() {

    //TODO usun display FLEX i dodaj NONE
    $('#game_menu').addClass("display_none");
    $('#game_menu').removeClass("display_flex");
    $('.window_win').addClass("display_none");
    $('.window_win').removeClass("display_flex");
    $('.window_lose').addClass("display_none");
    $('.window_lose').removeClass("display_flex");

    //TODO domyslne dla kazdej planszy parametry/wartosci
    it_is_animated = false;
    which_box_bufor = 0;
    points_time_left = 0;
    moves = 0;
    points_moves = 0;
    pipes = 0;
    points_pipes = 0;

    //TODO zresetuj trzy info okna do wartosci poczatkowych
    $('.moves_result').html(points_moves);
    $('.score_result').html(points_total);
    $('.time_result').html('1:00');

    //TODO nastepny level
    level++;

    //TODO rozpocznij odliczanie czasu od 60 i start()
    timer(time_for_solution);
    return start();

} // end next_level()

//! FUNCTION timer() - odlicza od 60 sekund w dol i na biezaco wypisuje sekundy
function timer(time_update) {

    //* if 'stop' -> zatrzymaj zegar
    if (time_update === 'stop') {
        clearTimeout(timer_setTimeOut);
        return false;
    }

    //* zmniejsz o sekunde if 60
    if (time_update === 60) time_update = 59;

    //TODO odwieza czas a jesli koniec czasu zwroc unsuccessfully_connected()
    timer_setTimeOut = setTimeout(function () {
        //!* odswiezaj czas co sekunde
        if (time_update >= 10) $('.time_result').html('0:' + time_update + '');
        else if (time_update > 0) $('.time_result').html('0:0' + time_update + '');
        else {
            $('.time_result').html('0:00');
            return unsuccessfully_connected();
        }

        return timer(time_update - 1);
    }, 1000);

} // end timer(time_update)

//! FUNCTION end_game() - wywolywana zostaje po ukoneczniu ostatniego poziomu
function end_game() {

    //TODO odegraj gdy ukonczono wszystkie poziomy
    end_game_audio.load();
    end_game_audio.play();

    //zmienna ile pozostalo sekund
    let time_seconds_left = 0;

    //* wpisz zatrzymany czas z .time_result do zmiennej time_seconds_left
    if ($('.time_result').text() === '1:00') {
        time_seconds_left = 60;
    }
    else {
        //TODO zamien zatrzymany czas na array
        time_seconds_left = $('.time_result').text().split('');
        //TODO usuń dwie pierwsze pozycje z array (0, :)
        time_seconds_left.shift();
        time_seconds_left.shift();
        //TODO zamien otrzymany czas w array na string a potem od razu na int
        time_seconds_left = parseInt(time_seconds_left.join(''));
    }

    //TODO punkty za pozostaly czas
    points_time_left = time_seconds_left * 10;

    //* if dodaje points_moves (od 0 do 300) zaleznie od wykonanych ruchow
    if (moves < 20) points_moves = 300;
    else if (moves < 30) points_moves = 200;
    else if (moves < 40) points_moves = 100;
    else points_moves = 0;

    //TODO punkty za uzyte rury
    points_pipes = pipes * 100;
    //TODO suma wszystkich punktow (czas/ruchy/rury)
    points_total += points_time_left + points_moves + points_pipes;

    //TODO pokaz menu zamieniajac none na flex
    $('#game_menu').toggleClass("display_none");
    $('#game_menu').toggleClass("display_flex");

    //TODO pokaz okno win zamieniajac none na flex
    $('.window_end').toggleClass("display_none");
    $('.window_end').toggleClass("display_flex");

    //TODO dodaj koncowy wynik do info i do end_game okienka
    $('.score_result').html(points_total);
    $('.end_score').html(points_total);

} // end end_game()
