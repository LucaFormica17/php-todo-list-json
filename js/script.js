const {createApp} = Vue;

createApp({
    data() {
        return {
            apiUrl: 'server.php',
            todolist: []
        }
    },
    mounted() {
        this.getTodolist();
    },
    methods: {
        getTodolist(){
            axios.get(this.apiUrl).then((response) => {
                this.todolist = response.data;
                console.log(this.todolist);
            })

        },
        toggleTodo(index){
            const data={
                taskIndex : index,
            }

            axios.post(this.apiUrl, data, {
                Headers: {'Content-type': 'multipart/form-data'}
            }).then((response) => {
                this.todolist = response.data
            });
        } 

    }
}).mount('#app');