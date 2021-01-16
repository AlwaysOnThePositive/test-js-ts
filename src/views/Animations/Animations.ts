import { Vue, Component } from 'vue-property-decorator';

@Component
export default class AnimationsComponent extends Vue {
  async mounted(): Promise<void> {
    await this.$nextTick();

    const cardContainer = document.querySelector('.cards');

    cardContainer.addEventListener('click', e => {
      console.log('click');
      const cardInfoBtn = e.target.closest('.card__more-info');
      const cardLessBtn = e.target.closest('.card__less-info');

      if (cardInfoBtn) {
        cardInfoBtn.parentNode.parentNode.classList.add('card--open');
      }

      if (cardLessBtn) {
        cardLessBtn.parentNode.parentNode.classList.remove('card--open');
      }
    });
  }
}
