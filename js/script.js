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
        

    }
}).mount('#app');