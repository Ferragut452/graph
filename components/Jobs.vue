<template>
  <div>
    <ul
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <li class="job" :key="index" v-for="(card, index) in jobs">
        <t-card class="test" :header="card.company.name">
          <img
            v-if="card.company.logoUrl"
            class="job__logo"
            :src="card.company.logoUrl"
            alt="Logo"
          />
          <img
            class="job__logo"
            v-else
            src="https://via.placeholder.com/50?text=No+Logo"
            alt="Logo"
          />
          <p>{{ card.title }}</p>

          <div class="cities">
            <h4 class="cities__title">Cities:</h4>
            <div class="cities__list" v-if="card.cities.length > 0">
              <t-tag
                :key="index"
                v-for="(city, index) in card.cities"
                tag-name="span"
                variant="badge"
                >{{ city.name }}</t-tag
              >
            </div>
            <div class="cities__title" v-else>Any city</div>
          </div>
        </t-card>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["jobs"],
};
</script>

<style lang="scss" scoped>
.job {
  text-align: left;
  position: relative;
  margin-bottom: 10px;
  & > div {
    background-color: rgba(181, 238, 255, 0.589);
  }
  &__logo {
    position: absolute;
    top: 0;
    right: 0;
    height: 49px;
    width: 49px;
    border-radius: 3px;
  }
}

.cities {
  &__title {
    font-size: 12px;
  }
  &__list {
    display: flex;
    span {
      margin-right: 5px;
    }
  }
}

.test {
  min-height: 100%;
}
</style>
