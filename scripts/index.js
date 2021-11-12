new Vue({
    el: '#page',
    data: {
      header: {
        firstName: "Luis",
        lastName: "Manrique",
        title: "Junior developer of Transexpress Guatemala",
        contact: [
          {
            title: "lpmg11manrique@gmail.com",
            link: "mailto:lpmg11manrique@gmail.com",
            icon: "fa-envelope-o"
          },
          {
            title: "github.com/lpmg11",
            link: "https://github.com/lpmg11",
            icon: "fa-github"
          },
          {
            title: "WhatsApp",
            link: "https://wa.me/50252911416",
            icon: "fa-whatsapp"
          },
        ]
      },
      sections: [
        {
          title: "Education",
          subsections: [
            {
              title: "University student of Systems Engineering",
              subtitle: "Mariano Galvez University of Guatemala",
              content: [
                
              ]
            }
          ]
        },
        {
          title: "Skills",
          subsections: [
            {
              content: [
                [
                  [
                    "Frameworks",
                    "Django",
                    "Flask",
                    "Vue",
                    "Express",
                    "AngularJS"
                  ],
                  [
                    "Frontend",
                    "JavaScript",
                    "TypeScript",
                    "CSS - LESS, SCSS, Flex, Grid"
                  ],
                  [
                    "Backend",
                    "PHP",
                    "Node",
                    "SQL",
                    "Python"
                  ],
                  [
                      "Systems",
                      "Docker",
                      "Kubernetes",
                      "Git"
                  ]
                ]
              ]
            }
          ]
        },
        {
          title: "Experience",
          subsections: [
            {
              title: "Transexpress Guatemala",
              subtitle: "Junior developer",
              location: "Guatemala, City",
              date: "July 2021 - Present",
              content: [
                "Working developing system requirements for internal company processes and adding functionalities to the client platform.",
                "Emphasizing on improving the user experience and optimizing internal processes."
              ]
            },
          ]
        }
      ]
    }
  });

  
