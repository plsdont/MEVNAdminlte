<template>
  <div id="app">
    <div class="wrapper">
      <MyHeader />
      <MyAside />
      <div class="content-wrapper">
        <section class="content-header">
          <h1>
            Dashboard
            <small>Version 2.0</small>
          </h1>
          <ol class="breadcrumb">
            <li><a href="#"><i class="fa fa-dashboard"></i> Home</a></li>
            <li class="active">Dashboard</li>
          </ol>
        </section>

    <!-- Main content -->
    <section class="content">
      <router-view/>
    </section>
      </div>
       <!-- <router-view/> -->
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader'
import MyAside from '@/components/MyAside'
import HelloWorld from '@/components/HelloWorld'
export default {
  name: 'App',
  components: {
    MyHeader,
    MyAside,
    HelloWorld
  }
}
</script>

<style>
</style>
