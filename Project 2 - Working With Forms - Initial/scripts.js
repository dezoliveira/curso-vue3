members = [
    {
        fname: 'Kurt',
        lname: 'Cobain',
        instrument: 'Guitarra e Vocal'
    },
    {
        fname: 'Pat',
        lname: 'Smear',
        instrument: 'Guitarra e Backvocal'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: { }
        }
    },
    methods: {
        addMember: function(){
            if(this.newMember.fname && this.newMember.lname && this.newMember.instrument){
              this.members.push(this.newMember)
                this.newMember = {}
            }else{
              alert('Todos os campos devem ser preenchidos!')
            }
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
