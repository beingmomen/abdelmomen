<template>
  <b-card no-body class="card-statistics">
    <b-card-header>
      <!-- <b-card-title>Statistics</b-card-title> -->
      <!-- <b-card-text class="mr-25 mb-0"> Updated 1 month ago </b-card-text> -->
    </b-card-header>
    <b-card-body class="statistics-body">
      <b-row>
        <b-col md="3" sm="6" class="mb-2 mb-md-0 mt-4">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" variant="primary">
                <font-awesome-icon :icon="`fa-solid fa-bolt`" />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">Skills</h4>
              <b-card-text class="font-small-3 mb-0">
                {{ getSkillsCount }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col md="3" sm="6" class="mb-2 mb-md-0 mt-4">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" variant="primary">
                <font-awesome-icon :icon="`fa-solid fa-diagram-project`" />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">Projects</h4>
              <b-card-text class="font-small-3 mb-0">
                {{ getProjectsCount }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col md="3" sm="6" class="mb-2 mb-md-0 mt-4">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" variant="primary">
                <font-awesome-icon :icon="`fa-solid fa-building`" />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">Companies</h4>
              <b-card-text class="font-small-3 mb-0">
                {{ getCompaniesCount }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col md="3" sm="6" class="mb-2 mb-md-0 mt-4">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" variant="primary">
                <font-awesome-icon :icon="`fa-solid fa-message`" />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">Messages</h4>
              <b-card-text class="font-small-3 mb-0">
                {{ getMessagesCount }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
        <b-col md="3" sm="6" class="mb-2 mb-md-0 mt-4">
          <b-media no-body>
            <b-media-aside class="mr-2">
              <b-avatar size="48" variant="primary">
                <font-awesome-icon :icon="`fa-solid fa-hand-dots`" />
              </b-avatar>
            </b-media-aside>
            <b-media-body class="my-auto">
              <h4 class="font-weight-bolder mb-0">Hire Me</h4>
              <b-card-text class="font-small-3 mb-0">
                {{ getHireMeCount }}
              </b-card-text>
            </b-media-body>
          </b-media>
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
</style>