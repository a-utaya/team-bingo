$(() => {
    const make_col = (base) => {
        let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
        let list = [];
        for (let i = 1; i <= 5; i++) {
            // ランダムで値を取得
            let a = parseInt(Math.random() * arr.length);
            list.push(arr[a] + base);
            // 数字を重複させないため、元々のリストから値を削除する
            arr.splice(a, 1);
        }
        return list;
    };

    const make_table = () => {
        // B列、I列...とそれぞれで5つの数字をランダムで取得
        const col_b = make_col(1);
        const col_i = make_col(20);
        const col_n = make_col(40);
        const col_g = make_col(60);
        const col_o = make_col(80);

        const list = new Array(25);
        for (let i = 0; i < 5; i++) {
            list[i * 5 + 0] = col_b[i];
            list[i * 5 + 1] = col_i[i];
            list[i * 5 + 2] = col_n[i];
            list[i * 5 + 3] = col_g[i];
            list[i * 5 + 4] = col_o[i];
        }
        list[12] = 'free';
        return list;
    };

    const create_card = () => {
        let row = make_table();
        for (let i = 0; i < row.length; i++) {
            $('#bi' + i).text(row[i]);
        }
    };

    //ローカルストレージへ番号保存
    const number_save = () => {
        const bingo_number = [];
        let row = make_table();
        for (let i = 0; i < row.length; i++) {
            const number = $('#bi' + i).text();
            bingo_number.push(number);
        }
        console.log(bingo_number);
        const jsonBingo_number = JSON.stringify(bingo_number);
        localStorage.setItem('bingo_number', jsonBingo_number);
        console.log(jsonBingo_number);
    };

    //リロード判定行い、リロード時にローカルストレージへ保存した番号再表示
    //カードを選びなおす非表示
    // const arter_reload = () => {
    //     var perfEntries = performance.getEntriesByType("navigation");
    //     perfEntries.forEach(function (pe) {
    //         if (pe.type == 'reload') {
    //             let jsonBingo_number = localStorage.getItem('bingo_number');
    //             let reloadBingp_number = JSON.parse(jsonBingo_number);
    //             console.log(reloadBingp_number);
    //             for (let i = 0; i < reloadBingp_number.length; i++) {
    //                 $('#bi' + i).text(reloadBingp_number[i]);
    //             };
    //         $('#button').hide();
    //         };
    //     });
    // }
    const arter_reload = () => {
        if (performance.navigation.type === 1) {
            let jsonBingo_number = localStorage.getItem('bingo_number');
            let reloadBingp_number = JSON.parse(jsonBingo_number);
            console.log(reloadBingp_number);
            for (let i = 0; i < reloadBingp_number.length; i++) {
                $('#bi' + i).text(reloadBingp_number[i]);
            };
            $('#button').hide();
        };
    }

    // 初期化関数
    const init = () => {
        create_card();

        // チェック状態を外す
        $('#bingo td').each(() => {
            $(this).removeClass('check');
        });
    };

    // 初期
    init();

    //freeタップ時イベント
    $('#bi12').click(() => {
        number_save();
    });

    // カード作成 ボタンをクリックすると、初期化
    $('#bingo-create').click(() => {
        init();
    });


    //リロード後

    arter_reload();

    // 番号をクリックすると、スタイルを変更するクラスをつけ外しできる
    $('#bingo td').click(function() {
        $(this).toggleClass('check');
        if ($("#bi0").hasClass('check') && $("#bi1").hasClass('check') && $("#bi2").hasClass('check') && $("#bi3").hasClass('check') && $("#bi4").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi5").hasClass('check') && $("#bi6").hasClass('check') && $("#bi7").hasClass('check') && $("#bi8").hasClass('check') && $("#bi9").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi10").hasClass('check') && $("#bi11").hasClass('check') && $("#bi12").hasClass('check') && $("#bi13").hasClass('check') && $("#bi14").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi15").hasClass('check') && $("#bi16").hasClass('check') && $("#bi17").hasClass('check') && $("#bi18").hasClass('check') && $("#bi19").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi20").hasClass('check') && $("#bi21").hasClass('check') && $("#bi22").hasClass('check') && $("#bi23").hasClass('check') && $("#bi24").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi0").hasClass('check') && $("#bi6").hasClass('check') && $("#bi12").hasClass('check') && $("#bi18").hasClass('check') && $("#bi24").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi4").hasClass('check') && $("#bi8").hasClass('check') && $("#bi12").hasClass('check') && $("#bi16").hasClass('check') && $("#bi20").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi0").hasClass('check') && $("#bi5").hasClass('check') && $("#bi10").hasClass('check') && $("#bi15").hasClass('check') && $("#bi20").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi1").hasClass('check') && $("#bi6").hasClass('check') && $("#bi11").hasClass('check') && $("#bi16").hasClass('check') && $("#bi21").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi2").hasClass('check') && $("#bi7").hasClass('check') && $("#bi12").hasClass('check') && $("#bi17").hasClass('check') && $("#bi22").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi3").hasClass('check') && $("#bi8").hasClass('check') && $("#bi13").hasClass('check') && $("#bi18").hasClass('check') && $("#bi23").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        } else if ($("#bi4").hasClass('check') && $("#bi9").hasClass('check') && $("#bi14").hasClass('check') && $("#bi19").hasClass('check') && $("#bi24").hasClass('check')) {
            $("#result").html("BINGO!");
            return;
        }
    });

});