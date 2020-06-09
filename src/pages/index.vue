<template>
  <div>
    <hero />
    <products :products="$page.products.edges" />
  </div>
</template>

<page-query>
query {
  products: allSanityProduct {
    edges {
      node {
        _id
        title
        slug {
          current
        }
        defaultProductVariant {
          title
          price
        }
        variants {
          price
        }
      }
    }
  }
}

</page-query>

<script>
import Hero from '~/components/Hero.vue';
import Products from '~/components/Products.vue';
// import getProducts from '~/queries/getProducts';

export default {
  components: {
    hero: Hero,
    products: Products
  }
};
</script>
