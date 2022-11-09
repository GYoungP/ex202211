$(document).ready(function(){

    let pants = [28, 30, 34];



    $('.form-select').eq(0).on('click', function(e){
        
        let title = e.currentTarget.value;
        // if(조건식)
        // removeClass <-지우는거
        // addClass <- 만드는거
        if(title === "셔츠") {
            $('.form-select').eq(1).html('');
            $('.form-select').eq(1).removeClass('form-hide')
            
            let temple = `
            <option>95</option>
            <option>100</option>
            `
            
            $('.form-select').eq(1).removeClass('form-hide').append(temple)
        } else if(title ==='바지') {
            $('.form-select').eq(1).removeClass('form-hide')
            // $('.form-select').eq(1).html(''); <-hrml 태그를 넣어줌 공백은'' <-전부 없앰
            $('.form-select').eq(1).html('');
            // let temple = `
            // <option>30</option>
            // <option>32</option>
            // `
            pants.map(function(pants){
                $('.form-select').eq(1).append(`
                <option>${pants}</option>
                `)
            })


            $('.form-select').eq(1).removeClass('form-hide').append(temple)
        } else {
            $('.form-select').eq(1).addClass('form-hide')
        }
      
    })
});