const data = [
    {imageUrl: 'https://m.economictimes.com/thumb/msid-105271411,width-1600,height-900,resizemode-4,imgsize-74658/john-cena-set-to-host-groundbreaking-talk-show-what-drives-you-post-wwe-exit-all-about-it.jpg', 
    name: 'Name: JOHN CENA', 
    age: 'Age: 20',
    description: 'Height: 6.1 ft',
    weight: 'Weight: 250 lb'
    },
    {imageUrl: 'https://pbs.twimg.com/profile_images/1070084370696794112/ecpXIUeY_400x400.jpg',
    name: 'Name: UnderTaker',
    age: 'Age: 22',
    description: 'Height: 6.4 ft',
    weight: '310 lb' 
    },
    {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn-Y4aGMVnIV6wvvRC2KAG2jUkPsciC_pVmBZnY6JiCG5QlAclMD5H6Qa75oZWVomm-JE&usqp=CAU',
    name: 'Name: Roman Reigns',
    age: 'Age: 36',
    description: 'Height: 6.3 ft',
    weight: '265 lb' 
    },
    {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNN-LNOAlUk6RegsaXRhDMJXYT4kFdnBDGE_a56zXVgbcN0sp9Ck4L1QhZm3vX_LBrX6k&usqp=CAU',
    name: 'Name: Sasha Banks',
    age: 'Age: 30',
    description: 'Height: 5.5 ft',
    weight: '114 lb' 
    },
    {imageUrl: 'https://imgk.timesnownews.com/story/1541838554-Brock_Lesnar_WWE1.jpg?tr=w-400,h-300,fo-auto',
    name: 'Name: Brock Lesnar',
    age: 'Age: 44',
    description: 'Height: 6.3 ft',
    weight: '265 lb' 
    },
    {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn0GXp_WEyeO2OpMUwzuXN2wuXlrmZi0kunOy-bmsu_rLKgO84qpiEM4rJG39tCw_AZRU&usqp=CAU',
    name: 'Name: Charlotte Flair',
    age: 'Age: 35',
    description: 'Height: 5.10 ft',
    weight: '144 lb' 
    },
    {imageUrl: 'https://nationaltoday.com/wp-content/uploads/2022/10/34-Becky-Lynch-1200x834.jpg',
    name: 'Name: Becky Lynch',
    age: 'Age: 35',
    description: 'Height: 5.6 ft',
    weight: '135 lb' 
    },
    {imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdUuI9NO30ZX2kw99Nk_N8hhMseEXRLTsgPt7fJGlGlE_OYRr7eFVWmR8Og13tOSTw76g&usqp=CAU',
    name: 'Name: The Miz',
    age: 'Age: 41',
    description: 'Height: 6.2 ft',
    weight: '220 lb' 
    },
    {imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Randy_Orton_May_2014.jpg',
    name: 'Name: Randy Ortan',
    age: 'Age: 36',
    description: 'Height: 6.3 ft',
    weight: '265 lb' 
    },
    {imageUrl: 'https://img.bleacherreport.net/img/images/photos/003/657/310/c6abb3199507da367491efdbec415267_crop_north.jpg?1486176111&w=3072&h=2048',
    name: 'Name: Aj Styles',
    age: 'Age: 44',
    description: 'Height: 5.11 ft',
    weight: '218 lb' 
    },
    {imageUrl: 'https://staticg.sportskeeda.com/editor/2023/11/4e665-16990784392367-1920.jpg',
    name: 'Name: Seth Rollins',
    age: 'Age: 35',
    description: 'Height: 6.1 ft',
    weight: '215 lb' 
    },{imageUrl: 'https://pbs.twimg.com/profile_images/1660035803416875008/AEfORjmR_400x400.jpg',
    name: 'Name: Bayley',
    age: 'Age: 33',
    description: 'Height: 5.6 ft',
    weight: '155 lb' 
    },{imageUrl: 'https://www.thefamouspeople.com/profiles/images/edge-wrestler-4.jpg',
    name: 'Name: Edge',
    age: 'Age: 44',
    description: 'Height: 6.3 ft',
    weight: '248 lb' 
    },{imageUrl: 'https://www.wrestlinginc.com/img/gallery/injury-update-on-wwes-braun-strowman/intro-1701968913.jpg',
    name: 'Name: Brawn Stromen',
    age: 'Age: 38',
    description: 'Height: 6.8 ft',
    weight: '355 lb' 
    },{imageUrl: 'https://i.pinimg.com/474x/ba/01/4f/ba014f267c06045def8cf915ca10f8dd.jpg',
    name: 'Name: Asuka',
    age: 'Age: 40',
    description: 'Height: 5.3 ft',
    weight: '135 lb' 
    },
]

const work = document.getElementById('work');

data.map(item => {
    const div = document.createElement('div');
    div.classList.add('item');

    const img = document.createElement('img');
    img.src = item.imageUrl;

    const name = document.createElement('div');
    name.textContent = item.name;

    const age = document.createElement('div');
    age.textContent = item.age;

    const weight = document.createElement('div');
    weight.textContent = item.weight;

    const description = document.createElement('div');
    description.classList.add('description');
    description.textContent = item.description;

    div.appendChild(img);
    div.appendChild(name);
    work.appendChild(div);
    div.appendChild(age);
    div.appendChild(weight);
    div.appendChild(description);
});