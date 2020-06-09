<template>
  <div>
    <main-header />
    <main>
      <router-view />
    </main>
    <main-footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'Layout',
  components: {
    'main-header': Header,
    'main-footer': Footer
  }
};
</script>
