Vue.http.headers.common['X-CSRF-TOKEN'] = $("#token").attr("value");

new Vue({

    el: '#manage-vue',

    data: {
        items: [],
        pagination: {
            total: 0,
            per_page: 2,
            from: 1,
            to: 0,
            current_page: 1
        },
        offset: 4,
        formErrors:{},
        formErrorsUpdate:{},
        newUser : {'username':'','password':''},
        fillItem : {'username':'','password':'','id':''}
    },

    computed: {
        isActived: function () {
            return this.pagination.current_page;
        },
        pagesNumber: function () {
            if (!this.pagination.to) {
                return [];
            }
            var from = this.pagination.current_page - this.offset;
            if (from < 1) {
                from = 1;
            }
            var to = from + (this.offset * 2);
            if (to >= this.pagination.last_page) {
                to = this.pagination.last_page;
            }
            var pagesArray = [];
            while (from <= to) {
                pagesArray.push(from);
                from++;
            }
            return pagesArray;
        }
    },

    ready : function(){
        this.getUsers(this.pagination.current_page);
    },

    methods : {

        getUsers: function(page){
            this.$http.get('/users.json?page='+page).then((response) => {
                this.$set('items', response.data.data);
                this.$set('pagination', response.data.pagination);
            });
        },

        createUser: function(){
            var input = this.newUser;
            this.$http.post('/users',input).then((response) => {
                this.changePage(this.pagination.current_page);
                this.newUser = {'username':'','password':''};
                $("#create-user").modal('hide');
                toastr.success('成功建立新使用者', 'Success Alert', {timeOut: 5000});
            }, (response) => {
                this.formErrors = response.data;
                console.log(response);
            });
        },

        deleteItem: function(item){
            this.$http.delete('/vueitems/'+item.id).then((response) => {
                this.changePage(this.pagination.current_page);
                toastr.success('Item Deleted Successfully.', 'Success Alert', {timeOut: 5000});
            });
        },

        editItem: function(item){
            this.fillItem.username = item.username;
            this.fillItem.id = item.id;
            this.fillItem.password = item.password;
            $("#edit-item").modal('show');
        },

        updateItem: function(id){
            var input = this.fillItem;
            this.$http.put('/vueitems/'+id,input).then((response) => {
                this.changePage(this.pagination.current_page);
                this.fillItem = {'username':'','password':'','id':''};
                $("#edit-item").modal('hide');
                toastr.success('Item Updated Successfully.', 'Success Alert', {timeOut: 5000});
            }, (response) => {
                this.formErrorsUpdate = response.data;
            });
        },

        changePage: function (page) {
            this.pagination.current_page = page;
            this.getUsers(page);
        }

    }

});
