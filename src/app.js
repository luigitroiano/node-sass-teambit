let app = new Vue({
  el: "#root",
  data: {
    menuNavbar: [
      {
        name: "Solutions",
        url: "#",
      },
      {
        name: "Pricing",
        url: "#",
      },
      {
        name: "Blog",
        url: "#",
      },
      {
        name: "Sign in",
        url: "#",
      },
    ],
    footerLink: [
      {
        label: "Product",
        downMenu: [{
          name: "Feedback",
          url: "#feedback",
        },
        {
          name: "Surveys",
          url: "#survey",
        },
        {
          name: "Reviews",
          url: "#review",
        },
        {
          name: "Praise",
          url: "#praise",
        },
        {
          name: "Slack",
          url: "#",
        },
        {
          name: "Integration",
          url: "#"
        },
        {
          name: "Schedule a demo",
          url: "#"
        },
        {
          name: "Pricing",
          url: "#"
        },
        ],
      },
      {
        label: "About",
        downMenu: [{
          name: "Feedback",
          url: "#feedback",
        },
        {
          name: "Surveys",
          url: "#survey",
        },
        {
          name: "Reviews",
          url: "#review",
        },
        {
          name: "Praise",
          url: "#praise",
        }],
      },
      {
        label: "Connect",
        downMenu: [{
          name: "Feedback",
          url: "#feedback",
        },
        {
          name: "Surveys",
          url: "#survey",
        },
        {
          name: "Reviews",
          url: "#review",
        },
        {
          name: "Praise",
          url: "#praise",
        }],
      },
      {
        label: "Lobs",
        downMenu: [{
          name: "Feedback",
          url: "#feedback",
        },
        {
          name: "Surveys",
          url: "#survey",
        },
        {
          name: "Reviews",
          url: "#review",
        },
        {
          name: "Praise",
          url: "#praise",
        }],
      },
      {
        label: "From the blog",
        downMenu: [{
          name: "How to change your company culture: a four-step framework",
          url: "#",
        },
        {
          name: "How teams can be more productive by killing 8-hour workday",
          url: "#",
        },
        {
          name: "How to build high performing teams inspired by nature ",
          url: "#",
        },
        {
          name: "View all",
          url: "#",
        }],
      },
    ],  
  },
  methods: {

  },
});