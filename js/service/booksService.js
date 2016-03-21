define(['app'],function(app){
    //Service比较特殊，加载后还需要手动注入控制器
    app.register.service('booksService', function(){
        this.books = [
            {
                id: 0,
                name: 'javascript权威指南'
            },
            {
                id: 1,
                name: 'javascript高级程序设计'
            }
        ];
    })
})