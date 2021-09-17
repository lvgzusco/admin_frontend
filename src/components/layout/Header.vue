<template>
    <div class="header" ref="header">
        <v-btn @click.stop="setDrawer" icon >
            <v-icon large color="white">mdi-menu</v-icon>
        </v-btn> 
        <div class="header__info">
            <v-btn icon >
                <v-icon large color="white">mdi-magnify</v-icon>
            </v-btn>
            <div class="notification__icon mx-2">
                <div class="notificaiton__icon--detail">
                    458
                </div>
                <v-btn icon >
                    <v-icon large color="white">mdi-bell-outline</v-icon>
                </v-btn>
            </div>
            <div class="ml-3">
                <h3 class="user_name">Welcome, Zusco Administrator</h3>
                <p class="text-right last_login">Last login 12 jan 11:20PM</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            drawer: true,
            headerHeight: ''
        }
    },
    mounted(){
        this.getHeaderHeight()
        this.$emit('setHeaderHeight', this.headerHeight)
    },
    methods:{
        setDrawer(){
            this.drawer = !this.drawer
            this.$emit('setDrawer', this.drawer)
        },
        getHeaderHeight(){
           let height = this.$refs.header.clientHeight
           this.headerHeight = `${height}px`
        }
    }
}
</script>

<style>

    .header{
        padding: .5rem 1.5rem;
        background: #1AB7CC;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #fff;
        position: fixed;
        top:0;
        width: 100%;
        z-index: 5;
    }

    .header__info{
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    .user_name{
        font-size: 1rem;
        font-weight: 300;
    }

   .header__info p.last_login{
        margin-bottom: 0;
        font-size: .8rem;

    }

    .notification__icon{
        position: relative;
    }
    .notificaiton__icon--detail{
        position: absolute;
        top: 1px;
        right: -3px;
        background-color: #DC2518;
        color: #fff;
        font-size: .6rem;
        border-radius: 10px;
        padding: 1px 3px;
        z-index: 3;
    }
</style>