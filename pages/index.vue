<template>
  <Results :type="searchType" :results="results" />
</template>

<script>
export default {
  data() {
    return {
      videos: [
        {
          id: '3TiEPhsBrVQ',
          title: 'Introdução prática a Flutter',
          author: 'Wander da Souza',
          duration: '29min',
          postDate: '05/10/2020',
          description:
            'Nesse vídeo especial de um mês da iniciativa, o Wander veio falar um pouco sobre o Flutter, mostrando uma introdução prática!',
        },
        {
          id: 'yuidwUz1uLQ',
          title: 'Svelte',
          author: 'Ricardo Kojo',
          duration: '14min',
          postDate: '28/09/2020',
          description:
            'No vídeo de hoje o Ricardo veio falar um pouco sobre o Svelte, um framework web que vem se popularizando!',
        },
        {
          id: '0a0lqX2pFdM',
          title: 'Concretizando expectativas: introdução ao Jest',
          author: 'João Daniel',
          duration: '13min',
          postDate: '21/09/2020',
          description:
            'No vídeo de hoje o João veio falar um pouco sobre testes no JavaScript dando uma noção básica do framework Jest!No vídeo de hoje o João veio falar um pouco sobre testes no JavaScript dando uma noção básica do framework Jest!',
        },
      ],
      categories: [
        {
          name: 'Componentização',
          videos: [
            {
              title: 'Introdução prática a Flutter',
              duration: '29min',
            },
            {
              title: 'Svelte',
              duration: '14min',
            },
          ],
        },
        {
          name: 'Programação funcional',
          videos: [
            {
              title:
                'Concretizando expectativas: introdução ao Jest blablablablablablablabla',
              duration: '13min',
            },
          ],
        },
      ],
    }
  },
  computed: {
    searchType() {
      return this.$store.state.searchType
    },
    results() {
      return this.searchType === 'videos' ? this.videos : this.categories
    },
  },
}
</script>
