<template>
  <div class="app-content content">
    <CardsNormalCard />
    <CardsLargeCard :items="statisticsItems" />
    <TablesNormalTable :headers="tableHeader" :items="tableItems" />
  </div>
</template>

<script>
export default {
  layout: "admin",
  data() {
    return {
      statisticsItems: [
        {
          icon: "TrendingUpIcon",
          color: "light-primary",
          title: "230k",
          subtitle: "Sales",
          customClass: "mb-2 mb-xl-0",
        },
        {
          icon: "UserIcon",
          color: "light-info",
          title: "8.549k",
          subtitle: "Customers",
          customClass: "mb-2 mb-xl-0",
        },
        {
          icon: "BoxIcon",
          color: "light-danger",
          title: "1.423k",
          subtitle: "Products",
          customClass: "mb-2 mb-sm-0",
        },
        {
          icon: "DollarSignIcon",
          color: "light-success",
          title: "$9745",
          subtitle: "Revenue",
          customClass: "",
        },
      ],
      tableHeader: [
        {
          key: "id",
          label: "Id",
          sortable: true,
        },
        {
          key: "avatar",
          label: "Avatar",
        },
        { key: "full_name", label: "Full Name", sortable: true },
        { key: "post", label: "Post", sortable: true },
        "email",
        "city",
        "start_date",
        "salary",
        "age",
        "experience",
        { key: "status", label: "Status", sortable: true },
      ],
      tableItems: [
        {
          id: 1,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/10-small.png"),
          full_name: "Korrie O'Crevy",
          post: "Nuclear Power Engineer",
          email: "kocrevy0@thetimes.co.uk",
          city: "Krasnosilka",
          start_date: "09/23/2016",
          salary: "$23896.35",
          age: "61",
          experience: "1 Year",
          status: 2,
        },
        {
          id: 2,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/1-small.png"),
          full_name: "Bailie Coulman",
          post: "VP Quality Control",
          email: "bcoulman1@yolasite.com",
          city: "Hinigaran",
          start_date: "05/20/2018",
          salary: "$13633.69",
          age: "63",
          experience: "3 Years",
          status: 2,
        },
        {
          id: 3,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/9-small.png"),
          full_name: "Stella Ganderton",
          post: "Operator",
          email: "sganderton2@tuttocitta.it",
          city: "Golcowa",
          start_date: "03/24/2018",
          salary: "$13076.28",
          age: "66",
          experience: "6 Years",
          status: 5,
        },
        {
          id: 4,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/3-small.png"),
          full_name: "Dorolice Crossman",
          post: "Cost Accountant",
          email: "dcrossman3@google.co.jp",
          city: "Paquera",
          start_date: "12/03/2017",
          salary: "$12336.17",
          age: "22",
          experience: "2 Years",
          status: 2,
        },
        {
          id: 5,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/4-small.png"),
          full_name: "Harmonia Nisius",
          post: "Senior Cost Accountant",
          email: "hnisius4@gnu.org",
          city: "Lucan",
          start_date: "08/25/2017",
          salary: "$10909.52",
          age: "33",
          experience: "3 Years",
          status: 2,
        },
        {
          id: 6,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/5-small.png"),
          full_name: "Genevra Honeywood",
          post: "Geologist",
          email: "ghoneywood5@narod.ru",
          city: "Maofan",
          start_date: "06/01/2017",
          salary: "$17803.80",
          age: "61",
          experience: "1 Year",
          status: 1,
        },
        {
          id: 7,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/7-small.png"),
          full_name: "Eileen Diehn",
          post: "Environmental Specialist",
          email: "ediehn6@163.com",
          city: "Lampuyang",
          start_date: "10/15/2017",
          salary: "$18991.67",
          age: "59",
          experience: "9 Years",
          status: 3,
        },
        {
          id: 8,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/9-small.png"),
          full_name: "Richardo Aldren",
          post: "Senior Sales Associate",
          email: "raldren7@mtv.com",
          city: "Skoghall",
          start_date: "11/05/2016",
          salary: "$19230.13",
          age: "55",
          experience: "5 Years",
          status: 3,
        },
        {
          id: 9,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/2-small.png"),
          full_name: "Allyson Moakler",
          post: "Safety Technician",
          email: "amoakler8@shareasale.com",
          city: "Mogilany",
          start_date: "12/29/2018",
          salary: "$11677.32",
          age: "39",
          experience: "9 Years",
          status: 5,
        },
        {
          id: 10,
          // eslint-disable-next-line global-require
          avatar: require("@/assets/images/avatars/6-small.png"),
          full_name: "Merline Penhalewick",
          post: "Junior Executive",
          email: "mpenhalewick9@php.net",
          city: "Kanuma",
          start_date: "04/19/2019",
          salary: "$15939.52",
          age: "23",
          experience: "3 Years",
          status: 2,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
