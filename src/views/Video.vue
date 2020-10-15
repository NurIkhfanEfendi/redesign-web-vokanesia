<template>
  <div id="video">
    <div class="content-container">
      <div class="wrapper">
        <form style="margin:auto;max-width:300px">
          <input type="text" placeholder="Search.." name="search2" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
        </form>
        <div class="list-ebook">
          <div class="row mb-3">
            <div class="col-md-3 mt-4" v-for="item in courses" v-bind:key="item.id">
              <div class="card shadow card-ebook">
                <img
                  v-bind:src="'https://vokanesia.s3-id-jkt-1.kilatstorage.id/'+ item.cover"
                  class="card-img-top cover"
                />
                <div class="card-body">
                  <p class="card-title">{{item.name}}</p>
                  <p>
                    <strong>Rp. {{item.harga}}</strong>
                  </p>
                  <b-button
                    size="sm"
                    variant="primary"
                    v-on:click="Detail(item.id)"
                    v-b-modal.modalDetail
                  >Click for Detail</b-button>
                </div>
              </div>
            </div>
          </div>
          <br />
          <button class="btn btn-primary" @click="back">Back</button>&nbsp;
          <button class="btn btn-primary" @click="next">Next</button>
        </div>

        <b-modal
          id="modalDetail"
          size="lg"
          header-bg-variant="primary"
          header-text-variant="white"
          scrollable
          centered
          hide-footer
        >
          <template v-slot:modal-title>Detail Ebook</template>
          <template>
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <img
                    v-bind:src="'https://vokanesia.s3-id-jkt-1.kilatstorage.id/'+ detail_courses.cover"
                    style="max-width:300px;"
                  />
                </div>
                <br />
                <div class="col-lg-7">
                  <h4>
                    <strong>{{detail_courses.name}}</strong>
                  </h4>
                  <p>Mentor : {{penerbit.name}}</p>
                  <p>
                    <strong>Rp. {{detail_courses.harga}}</strong>
                  </p>
                  <a href="https://play.google.com/store/apps/details?id=id.vokanesia">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      width="150px"
                    />
                  </a>
                </div>
              </div>
              <br>
              <div class="card">
                <div class="card-header">Kelas ini meliputi :</div>
                <ul class="list-group list-group-flush" v-for="item in videos" v-bind:key="item.id">
                  <li class="list-group-item">{{item.name}}</li>
                </ul>
              </div>
            </div>
          </template>
        </b-modal>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  title: 'Vokanesia | Video',
  name: "Video",
  data() {
    return {
      courses: "",
      detail_courses: "",
      videos: "",
      penerbit: "",
      page: 1,
    };
  },
  methods: {
    next() {
      this.page += 1;
      this.getData();
    },
    back() {
      if (this.page > 0) {
        this.page -= 1;
        this.getData();
      }
    },
    getData: function () {
      this.axios
        .get("http://api.vokanesia.id/v1/courses?page=" + this.page)
        .then((res) => {
          this.courses = res.data.data.data;
          console.warn(res.data.data);
        });
    },
    Detail: function (id) {
      this.axios.get("http://api.vokanesia.id/v1/courses/" + id).then((res) => {
        this.detail_courses = res.data.data;
        this.penerbit = res.data.data.publisher;
        this.videos = res.data.data.videos;
        console.warn(res.data.data);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style>
.list-ebook {
  text-align: center;
  z-index: 1;
}
.card-ebook {
  margin-left: 10px;
  margin-right: 10px;
}
.cover {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  object-position: top;
}
.container {
  margin-top: 15px;
  margin-bottom: 15px;
}
</style>