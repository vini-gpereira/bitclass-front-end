<template>
  <div>
    <Results type="videos" :results="results" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      results: [
        {
          id: '3TiEPhsBrVQ',
          title: 'Introdução prática a Flutter',
          author: 'Wander da Souza',
          duration: '29min',
          description:
            'Nesse vídeo especial de um mês da iniciativa, o Wander veio falar um pouco sobre o Flutter, mostrando uma introdução prática!',
        },
        {
          id: 'yuidwUz1uLQ',
          title: 'Svelte',
          author: 'Ricardo Kojo',
          duration: '14min',
          description:
            'No vídeo de hoje o Ricardo veio falar um pouco sobre o Svelte, um framework web que vem se popularizando!',
        },
        {
          id: '0a0lqX2pFdM',
          title: 'Concretizando expectativas: introdução ao Jest',
          author: 'João Daniel',
          duration: '13min',
          description:
            'No vídeo de hoje o João veio falar um pouco sobre testes no JavaScript dando uma noção básica do framework Jest!',
        },
      ],
    }
  },
}
</script>
