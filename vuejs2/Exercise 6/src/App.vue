<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <Header></Header>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
              <ServerList></ServerList>
            </div>
            <div class="col-xs-12 col-sm-6">
                <ServerDetails></ServerDetails>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-xs-12">
                <Footer></Footer>
            </div>
        </div>
    </div>
</template>

<script>
import Header from './Header.vue';
import ServerList from './ServerList.vue';
import ServerDetails from './ServerDetails.vue';
import Footer from './Footer.vue';
export default {
  components: {
    Header,
    ServerList,
    ServerDetails,
    Footer
  }
};
</script>

<style>
</style>
