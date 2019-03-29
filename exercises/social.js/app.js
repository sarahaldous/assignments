var favoriteShow = {
    name: "Modern Family",
    genre: "sitcom",
    characters: [
        {
            name: "Jay",
            married: true,
            age: 70,
            employment: "closet store owner",
            children: [
                {
                    name: "Claire",
                    birthOrder: 1,
                    age: 45,
                    married: true,
                    employment: "closet store employee",
                    spouse: {
                        name: "Phil",
                        employment: "realtor",
                        interests: ["magic", "being a good dad"]
                    } ,
                        children: [
                        {
                            name: "Haley",
                            birthOrder: 1,
                            age: 25
                            },
                            {
                            name: "Alex",
                            birthOrder: 2,
                            age: 23
                            },
                            {
                            name: "Josh",
                            birthOrder: 3,
                            age: 21
                            }
                        ]
                },
                {
                    name: "Mitchell",
                    birthOrder: 2,
                    age: 42,
                    employment: "lawyer",
                    married: true,
                    spouse:  {
                        name: "Cameron",
                        employment: "teacher",
                        interests: "sports"

                    },
                    children: [
                    {
                        name: "Lily",
                        age: 11,
                        birthOrder: 1
                    }
                ]
                },
            ],
            ageWillBe: function() {
                var newAge = favoriteShow.characters[0].children[0].children[0].age += 1
                console.log(newAge) 
            },

            // var otherNewAge = characters.age
            //     var lastNewAge = characters.children.children.age
        }
    ]
}

favoriteShow.characters[0].ageWillBe()
            