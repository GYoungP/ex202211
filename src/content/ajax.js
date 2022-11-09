$(document).ready(function() {
    // $.get('http://127.0.0.1:5500/product1.json')
    // .done(function(date){
    //     console.log(date);
    // })
    // .fail(function(){
    //     console.log('실패!')
    // })
    products.map(function(product){
        let temple = `
        <div class="col-sm-4">
        <img src="https://via.placeholder.com/600" class="w-100">
        <h5>${product.title}</h5>
        <p>가격 : ${product.price}</p>
      </div>
      `
        $('.row').append(temple);
        
    })

    // 한번클릭 1.json 두번클릭 2.json 세번 더보기 없애기
    let cnt = 1;

    $('#more').click(function(){
        if ( cnt >= 3) {
            return 
        } else {
            if(cnt === 1) {
                $.get('http://127.0.0.1:5500/product1.json')
                .done(function(date){
                    date.map(function(date){
                        console.log('11111', date)
                    let temple = `
                        <div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${date.title}</h5>
                        <p>가격 : ${date.price}</p>
                        </div>
                    `
                    $('.row').append(temple);
                    });
                    cnt++
                })
            } else if (cnt === 2 ) {
                $.get('http://127.0.0.1:5500/product2.json')
                .done(function(date){
                    date.map(function(date){
                        
                        console.log('2222',date)
                    let temple = `
                        <div class="col-sm-4">
                        <img src="https://via.placeholder.com/600" class="w-100">
                        <h5>${date.title}</h5>
                        <p>가격 : ${date.price}</p>
                        </div>
                    `
                    $('.row').append(temple);
                    });
                    $('#more').hide()
                    cnt++
                })
            } 
        }
        // $.get('http://127.0.0.1:5500/product1.json')
        // .done(function(date){
        //     date.map(function(date){
        //     let temple = `
        //         <div class="col-sm-4">
        //         <img src="https://via.placeholder.com/600" class="w-100">
        //         <h5>${date.title}</h5>
        //         <p>가격 : ${date.price}</p>
        //         </div>
        //     `
        //     $('.row').append(temple);
        //     })
        // })

    })
})