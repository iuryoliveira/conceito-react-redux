const INITIAL_STATE = {
  activeModule: {},
  activeModuleLessons: {},
  cards: [
    {
      id: 0,
      title: 'GIT',
      about: 'GIT trainning',
      lessons: [
        {
          id: 0,
          title: 'O que é GIT',
          abstract: 'Ferramenta de controle de versão' 
        },
        {
          id: 1,
          title: 'Comandos básicos',
          abstract: 'git clone, commit, pull, push' 
        },
      ],
    },
    {
      id: 1,
      title: 'ReactJS',
      about: 'ReactJS trainning',
      lessons: [
        {
          id: 0,
          title: 'O que é ReactJS',
          abstract: 'Biblioteca frontend' 
        },
        {
          id: 1,
          title: 'Libs básicas',
          abstract: 'React, Redux' 
        },
      ],
    },
    {
      id: 2,
      title: 'Android',
      about: 'Android trainning',
      lessons: [
        {
          id: 0,
          title: 'O que é Android',
          abstract: 'Android é um SO open source'
        },
      ],
    },
  ]
}

export default function card(state = INITIAL_STATE, action) {
  if(action.type === 'TOGGLE_CARD') {
    console.log(action.card.lessons);
    return { ...state, activeModule: action.card, activeModuleLessons: action.card.lessons}
  }
  return state;
}
