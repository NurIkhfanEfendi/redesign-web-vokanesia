<template>
  <div id="news">
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
            <div class="col-md-3 mt-4" v-for="item in blogs" v-bind:key="item.id">
              <div class="card shadow card-ebook">
                <img
                  v-bind:src="'https://vokanesia.s3-id-jkt-1.kilatstorage.id/'+ item.cover"
                  class="card-img-top cover"
                />
                <div class="card-body">
                  <p class="card-title">{{item.name}}</p>
                  <p><strong>Rp. {{item.harga}}</strong></p>
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
          <!-- <button class="btn btn-primary" @click="back">Back</button>&nbsp;
          <button class="btn btn-primary" @click="next">Next</button> -->
        </div>

        <b-modal
          id="modalDetail"
          size="lg"
          header-bg-variant="primary"
          header-text-variant="white"
          centered
          hide-footer
        >
          <template v-slot:modal-title>Detail Ebook</template>
          <template>
            <div class="container">
              <div class="row">
                <div class="col-lg-5">
                  <img v-bind:src="'https://vokanesia.s3-id-jkt-1.kilatstorage.id/'+ detail_blogs.cover" style="max-width:300px;margin:15px 0">
                </div>
                <br>
                <div class="col-lg-7">
                  <h4><strong>{{detail_blogs.name}}</strong></h4>
                  <br>
                  <p>Nama Penerbit : {{penerbit.name}}</p>
                  <p><strong>Rp. {{detail_blogs.harga}}</strong></p>
                  <a href="https://play.google.com/store/apps/details?id=id.vokanesia"><img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" width="150px"></a>
                </div>
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
  title: 'Vokanesia | News',
  name: "News",
  data() {
    return {
      blogs: "",
      detail_blogs: "",
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
        .get("http://api.vokanesia.id/v1/blogs?page=" + this.page)
        .then((res) => {
          this.blogs = res.data.data.data;
          console.warn(res.data.data);
        });
    },
    Detail: function (id) {
      this.axios.get("http://api.vokanesia.id/v1/blogs/" + id).then((res) => {
        this.detail_blogs = res.data.data;
        this.penerbit = res.data.data.publisher;
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
</style>