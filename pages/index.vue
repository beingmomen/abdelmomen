<template>
  <div
    class="
      container
      d-flex
      justify-content-center
      align-items-center
      flex-column
    "
  >
    <p class="fs-1 fw-bold">Landing Page</p>
    <b-button variant="primary">
      <nuxt-link to="/dashboard" class="text-white">Dashboard</nuxt-link>
    </b-button>
    <input v-model="obj.title" placeholder="title" type="text" />
    <input v-model="obj.author" placeholder="author" type="text" />
    <button @click="addData">add</button>
    <button @click="orderData">order</button>
    <button @click="getSingleData">get one</button>
    <button @click="updateData">update</button>
    <button @click="signUp">Sign Up</button>
    <button @click="signOut">Sign Out</button>
    <button @click="signIn">Sign In</button>
    <button @click="deleteData">delete</button>
  </div>
</template>

<script>
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  getDoc,
  updateDoc,
} from "firebase/firestore";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const db = getFirestore();
const auth = getAuth();
const colRef = collection(db, "books");
const docRef = doc(db, "books", "EAzOhaKB0qWpMH32C2WH");
const q = query(
  colRef,
  // where("author", "==", "momen"),
  orderBy("createdAt") // desc  order from z to a
  // orderBy("title", "desc")    // desc  order from z to a
);
export default {
  name: "IndexPage",
  data() {
    return {
      obj: {
        title: "",
        author: "",
      },
    };
  },
  mounted() {
    // getDocs(colRef).then((res) => {
    //   let books = [];
    //   res.docs.forEach((x) => books.push({ ...x.data(), id: x.id }));
    //   console.warn("books", books);
    // });
    onSnapshot(colRef, (res) => {
      let books = [];
      res.docs.forEach((x) => books.push({ ...x.data(), id: x.id }));
      console.warn("books", books);
    });
    onAuthStateChanged(auth, (user) => {
      console.warn("user change ::", user);
    });
  },
  methods: {
    addData() {
      addDoc(colRef, {
        ...this.obj,
        createdAt: serverTimestamp(),
      }).then(() => {});
    },
    orderData() {
      onSnapshot(q, (res) => {
        let books = [];
        res.docs.forEach((x) => books.push({ ...x.data(), id: x.id }));
        console.warn("books", books);
      });
    },
    getSingleData() {
      // getDoc(docRef).then((res) =>
      //   console.warn("res.data()", res.data(), res.id)
      // );
      onSnapshot(docRef, (res) => {
        console.warn("res.data()", res.data(), res.id);
      });
    },
    updateData() {
      updateDoc(docRef, this.obj);
    },
    signUp() {
      createUserWithEmailAndPassword(auth, this.obj.title, this.obj.author)
        .then((res) => {
          // console.warn("sign up res :::", res.user);
        })
        .catch((err) => {
          // console.warn("sign up err ::", err.message);
        });
    },
    signOut() {
      signOut(auth);
    },
    signIn() {
      signInWithEmailAndPassword(auth, this.obj.title, this.obj.author)
        .then((res) => {
          // console.warn("sign in res :::", res.user);
        })
        .catch((err) => {
          // console.warn("sign in err ::", err.message);
        });
    },

    deleteData() {
      deleteDoc(docRef).then(() => {});
    },
  },
};
</script>


<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>